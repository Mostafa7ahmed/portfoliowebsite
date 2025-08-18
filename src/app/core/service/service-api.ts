import { Injectable } from '@angular/core';
import { environment } from '../../env/environment';
import { HttpClient } from '@angular/common/http';
import { ICreateService } from '../interface/icreate-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAPI {
    private baseUrl = `${environment.baseUrl}service`;

  constructor(private http: HttpClient) {}

  createService(payload: ICreateService): Observable<any> {
    return this.http.post<any>(this.baseUrl, payload);
  }
}
