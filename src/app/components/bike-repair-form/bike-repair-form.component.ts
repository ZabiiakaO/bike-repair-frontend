import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { BikeRepairModel } from 'src/app/models/bike-repair.model';
import { BikeRepairService } from 'src/app/services/bike-repair.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-bike-repair-form',
  templateUrl: './bike-repair-form.component.html',
  styleUrls: ['./bike-repair-form.component.scss']
})
export class BikeRepairFormComponent {
  @Input() bikeRepairRequest: BikeRepairModel = new BikeRepairModel()
  isLoader = false
  form: FormGroup 
  name: FormControl
  email: FormControl
  description: FormControl
  isLoading: Subject<boolean> = this.loader.isLoading;
  constructor(private repairFormBuilder: FormBuilder, private bikeRepairService: BikeRepairService, 
    private toastrService: ToastrService,
    private loader: LoaderService,
    private translate: TranslateService) {

    translate.setDefaultLang('en');

    this.name = new FormControl('')
    this.email = new FormControl('')
    this.description = new FormControl('')
    this.form = this.repairFormBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      description: [null]
    })
  }
  ngOnInit(): void {
    
  }
 
  onSubmit() { 
    if (this.form.valid)  {
      this.bikeRepairService.postBikeRepairRequest(this.bikeRepairRequest).subscribe((result: any) => {
        this.isLoading.next(true)   
        setTimeout(() => {
          this.isLoading.next(false)
          this.toastrService.success('Request was successfuly sent', 'Success!', {
            positionClass: 'toast-top-center' 
          });
        }, 3000);
        console.log('Request was sent');
        console.log(result);  
      })
    }
 
    else {
      this.toastrService.error('Fill required fields', 'Error!', {
        positionClass: 'toast-top-center' 
      });
    }
  }
}
