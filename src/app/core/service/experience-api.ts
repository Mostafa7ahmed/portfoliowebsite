import { Injectable } from '@angular/core';
import { environment } from '../../env/environment';
import { Observable } from 'rxjs';
import { IExperience } from '../interface/iexperience';
import { HttpClient } from '@angular/common/http';
import { IPaginationResponse } from '../Shared/Interface/irespose';

@Injectable({
  providedIn: 'root'
})
export class ExperienceAPI {
  private baseUrl = `${environment.baseUrl}experience`;

  constructor(private http: HttpClient) {}

  createExperience(payload: IExperience): Observable<any> {
    return this.http.post<any>(this.baseUrl, payload);
  }

  getAllExperiences(): Observable<IPaginationResponse<IExperience>> {
    return this.http.get<IPaginationResponse<IExperience>>(
      `${this.baseUrl}/paginate/8`
    );
  }

  deleteExperience(id: string | number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
