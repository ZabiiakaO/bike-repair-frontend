import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BikeRepairModel } from '../models/bike-repair.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BikeRepairService {
  url = 'BireRepairRequest'
  constructor(private http: HttpClient) { }
  
  public postBikeRepairRequest(bikeRepairRequest: BikeRepairModel) {
    return this.http.post<BikeRepairModel>(`${environment.apiUrl}${this.url}`, bikeRepairRequest)
  }
}
