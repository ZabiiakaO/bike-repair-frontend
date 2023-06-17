import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoaderComponent } from './components/loader/loader.component';
import { CyclixLogoComponent } from './components/cyclix-logo/cyclix-logo.component'; 
import { BikeRepairFormComponent } from './components/bike-repair-form/bike-repair-form.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'  
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { DxButtonModule, DxSelectBoxModule, DxRadioGroupModule, DxCheckBoxModule,DxTextAreaModule, DxTextBoxModule } from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { StepBarComponent } from './components/step-bar/step-bar.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    BikeRepairFormComponent,
    CyclixLogoComponent,
    StepBarComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    FontAwesomeModule,
    DxButtonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule, 
    MatExpansionModule,
    DxSelectBoxModule,
    DxRadioGroupModule,
    DxCheckBoxModule,
    DxTextAreaModule,
    DxTextBoxModule,
    MatProgressBarModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 15000,  
      progressBar: true, 
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [provideToastr(), provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
 }
