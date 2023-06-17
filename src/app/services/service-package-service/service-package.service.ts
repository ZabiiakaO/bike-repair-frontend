import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicePackageModel } from 'src/app/models/serivce-package.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServicePackageService {
  url = 'ServicePackage'
  constructor(private http: HttpClient) { }

  public getServicePackageRequest() {
    return this.http.get<ServicePackageModel[]>(`${environment.apiUrl}${this.url}`)
  }
}
