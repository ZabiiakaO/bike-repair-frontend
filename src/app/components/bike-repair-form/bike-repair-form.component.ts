import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription, pluck } from 'rxjs';
import { BikeBrandModel } from 'src/app/models/bike-brand.model';
import { BikeRepairModel } from 'src/app/models/bike-repair.model';
import { BikeTypeModel } from 'src/app/models/bike-type.model';
import { ServicePackageModel } from 'src/app/models/serivce-package.model';
import { ServiceUnitModel } from 'src/app/models/service-unit.model';
import { BikeBrandService } from 'src/app/services/bike-brand-service/bike-brand.service';
import { BikeRepairService } from 'src/app/services/bike-repair-service/bike-repair.service';
import { BikeTypeService } from 'src/app/services/bike-type-service/bike-type.service';
import { LoaderService } from 'src/app/services/loader-service/loader.service';
import { ServicePackageService } from 'src/app/services/service-package-service/service-package.service';
import { ServiceUnitService } from 'src/app/services/service-unit-service/service-unit.service';

@Component({
  selector: 'app-bike-repair-form',
  templateUrl: './bike-repair-form.component.html',
  styleUrls: ['./bike-repair-form.component.scss']
})
export class BikeRepairFormComponent { 
  @ViewChild("stepper", { static: false })
  private stepper!: MatStepper;
  isLoader = false
  isLinear = false;
  isLoading: Subject<boolean> = this.loader.isLoading;
  brands: BikeBrandModel[] = []
  types: BikeTypeModel[] = []
  packages: ServicePackageModel[] = []
  units: ServiceUnitModel[] = []
  unitsElectro: ServiceUnitModel[] = []
  currentStep: string = '0'
  checkedUnits: ServiceUnitModel[] = []
  stringarray: AbstractControl[] = []
  firstFormGroup = this.repairFormBuilder.group({
    bikeType: [''],
    bikeBrand: []
  });
  secondFormGroup = this.repairFormBuilder.group({
    servicePackage: [''],
  });
  thirdFormGroup = this.repairFormBuilder.group({

  });
  fourthFormGroup = this.repairFormBuilder.group({
    description: [''],
    costCeiling: ['']
  });
  fifthFromGroup = this.repairFormBuilder.group({
    firstName: [''],
    secondName: [''],
    street: [''],
    no: [''],
    location: [''],
    postcode: [''],
    email: [''],
    phone: [''],
  });
  subscription!: Subscription;
  selectedUnits: ServiceUnitModel[] = []
  constructor(private repairFormBuilder: FormBuilder, private bikeRepairService: BikeRepairService,
    private toastrService: ToastrService,
    private loader: LoaderService,
    private translate: TranslateService,
    private bikeTypeService: BikeTypeService,
    private bikeBrandService: BikeBrandService,
    private servicePackageService: ServicePackageService,
    private serviceUnitService: ServiceUnitService) {

    translate.setDefaultLang('en');

  }
  ngOnInit(): void {
    this.bikeBrandService.getBikeBrandRequest().subscribe((result: BikeBrandModel[]) => {
      this.brands = result
    });
    this.bikeTypeService.getBikeTypeRequest().subscribe((result: BikeTypeModel[]) => {
      this.types = result
    });
    this.servicePackageService.getServicePackageRequest().subscribe((result: ServicePackageModel[]) => {
      this.packages = result
      this.packages.map((element) => {
        element.fullinfo = element.description + " " + element.price + " " + element.currency
      }) 
    });
    this.serviceUnitService.getServiceUnitRequest().subscribe((result: ServiceUnitModel[]) => {
      this.units = result
      this.unitsElectro = result.filter((item) => item.isElectroBike)
      this.units.map((item) =>
        this.thirdFormGroup.addControl(item.id.toString(), new FormControl(''))
      ) 
    });


  }

  onSubmit() {
    this.isLoader=true
    const submitModel = new BikeRepairModel()

    submitModel.bikeType = this.firstFormGroup.value.bikeType ? this.firstFormGroup.value.bikeType : ''
    submitModel.bikeBrand =this.firstFormGroup.value.bikeBrand ? this.firstFormGroup.value.bikeBrand : ''

    submitModel.servicePackage = this.secondFormGroup.value.servicePackage ? this.secondFormGroup.value.servicePackage : ''

    for (const [key, value] of Object.entries(this.thirdFormGroup.value)) {
      if (typeof value === 'boolean' && value) { 
        const selectedUnits = this.units.filter((item) => item.id === parseInt(key))
        selectedUnits.forEach((item) => {
          submitModel.serviceUnits += item.name+'; '
        })

      }
    } 
    submitModel.description = this.fourthFormGroup.value.description ? this.fourthFormGroup.value.description : ''
    submitModel.costCeiling = this.fourthFormGroup.value.costCeiling ? this.fourthFormGroup.value.costCeiling : ''

    submitModel.firstName = this.fifthFromGroup.value.firstName ? this.fifthFromGroup.value.firstName : ''
    submitModel.lastName = this.fifthFromGroup.value.secondName ? this.fifthFromGroup.value.secondName : ''
    submitModel.street = this.fifthFromGroup.value.street ? this.fifthFromGroup.value.street : ''
    submitModel.no = this.fifthFromGroup.value.no ? this.fifthFromGroup.value.no : ''
    submitModel.postcode = this.fifthFromGroup.value.postcode ? this.fifthFromGroup.value.postcode : ''
    submitModel.location = this.fifthFromGroup.value.location ? this.fifthFromGroup.value.location : ''
    submitModel.email = this.fifthFromGroup.value.email ? this.fifthFromGroup.value.email : ''
    submitModel.phone = this.fifthFromGroup.value.phone ? this.fifthFromGroup.value.phone : ''
    this.bikeRepairService.postBikeRepairRequest(submitModel).subscribe(result => { 
      this.toastrService.success("Request was sent", "SUCCESS")
      this.isLoader=false
      this.stepper.reset()
    }) 
  }




  ngAfterViewInit() {
    this.stepper.selectionChange
      .pipe(pluck("selectedIndex"))
      .subscribe((res: number) => {
        this.currentStep = res.toString()
      });
  }
}
