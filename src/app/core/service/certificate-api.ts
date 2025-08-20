import { Injectable } from '@angular/core';
import { environment } from '../../env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPaginationResponse } from '../Shared/Interface/irespose';

@Injectable({
  providedIn: 'root'
})
export class CertificateAPI {
  private baseUrl = `${environment.baseUrl}certificate`;

  constructor(private http: HttpClient) {}

  createCertificate(payload: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, payload);
  }

  getAllCertificates(): Observable<IPaginationResponse<any>> {
    return this.http.get<IPaginationResponse<any>>(
      `${this.baseUrl}/paginate/8`
    );
  }

  deleteCertificate(id: string | number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
