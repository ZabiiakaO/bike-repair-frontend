import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BikeTypeModel } from 'src/app/models/bike-type.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BikeTypeService {
  url = 'BikeTypeRequest'
  constructor(private http: HttpClient) { }


  public getBikeTypeRequest() {
    return this.http.get<BikeTypeModel[]>(`${environment.apiUrl}${this.url}`)
  }
}
