import { Injectable } from '@angular/core';
import { environment } from '../../env/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPaginationResponse } from '../Shared/Interface/irespose';
import { IEducation } from '../interface/ieducation';

@Injectable({
  providedIn: 'root'
})
export class EducationAPI {
  private baseUrl = `${environment.baseUrl}education`;

  constructor(private http: HttpClient) {}

  createEducation(payload: IEducation): Observable<any> {
    return this.http.post<any>(this.baseUrl, payload);
  }

  getAllEducations(): Observable<IPaginationResponse<IEducation>> {
    return this.http.get<IPaginationResponse<IEducation>>(
      `${this.baseUrl}/paginate/8`
    );
  }

  deleteEducation(id: string | number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  
}
