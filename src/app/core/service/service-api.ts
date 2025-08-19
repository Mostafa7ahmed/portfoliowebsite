import { IPaginationResponse } from './../Shared/Interface/irespose';
import { Injectable } from '@angular/core';
import { environment } from '../../env/environment';
import { HttpClient } from '@angular/common/http';
import { ICreateService } from '../interface/icreate-service';
import { Observable } from 'rxjs';
import { Iservice } from '../interface/iservice';

@Injectable({
  providedIn: 'root'
})
export class ServiceAPI {
    private baseUrl = `${environment.baseUrl}service`;

  constructor(private http: HttpClient) {}

  createService(payload: ICreateService): Observable<any> {
    return this.http.post<any>(this.baseUrl, payload);
  }


  getAllServices(): Observable<IPaginationResponse<Iservice>> {
    return this.http.get<IPaginationResponse<Iservice>>(
      `${this.baseUrl}/paginate/8`
    );
  }


  // Delete service by id
  deleteService(id: string | number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

}
