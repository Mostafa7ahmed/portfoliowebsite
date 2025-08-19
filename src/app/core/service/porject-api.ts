import { Injectable } from '@angular/core';
import { environment } from '../../env/environment';
import { HttpClient } from '@angular/common/http';
import { Iporject } from '../interface/iporject';
import { Observable } from 'rxjs';
import { IPaginationResponse } from '../Shared/Interface/irespose';

@Injectable({
  providedIn: 'root'
})
export class PorjectAPI {
   private baseUrl = `${environment.baseUrl}project`;

  constructor(private http: HttpClient) {}

  createPorject(payload: Iporject): Observable<any> {
    return this.http.post<any>(this.baseUrl, payload);
  }

  getAllPorjects(): Observable<IPaginationResponse<Iporject>> {
    return this.http.get<IPaginationResponse<Iporject>>(
      `${this.baseUrl}/paginate/8`
    );
  }

  deletePorject(id: string | number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
