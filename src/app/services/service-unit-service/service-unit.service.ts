import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceUnitModel } from 'src/app/models/service-unit.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceUnitService {
  url = 'ServiceUnit'
  constructor(private http: HttpClient) { }

  public getServiceUnitRequest() {
    return this.http.get<ServiceUnitModel[]>(`${environment.apiUrl}${this.url}`)
  }
}
