import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BikeBrandModel } from 'src/app/models/bike-brand.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BikeBrandService {
  url = 'BrandRequest'
  constructor(private http: HttpClient) { }

  public getBikeBrandRequest() {
    return this.http.get<BikeBrandModel[]>(`${environment.apiUrl}${this.url}`)
  }
}
