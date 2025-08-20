import { Injectable } from '@angular/core';
import { environment } from '../../env/environment';
import { HttpClient } from '@angular/common/http';
import { ICreateSkills } from '../interface/icreate-skills';
import { Observable } from 'rxjs';
import { IPaginationResponse } from '../Shared/Interface/irespose';

@Injectable({
  providedIn: 'root'
})
export class SkillAPI {
      private baseUrl = `${environment.baseUrl}skill`;

  constructor(private http: HttpClient) {}

  createSkills(payload: ICreateSkills): Observable<any> {
    return this.http.post<any>(this.baseUrl, payload);
  }

    getAllSkills(): Observable<IPaginationResponse<ICreateSkills>> {
      return this.http.get<IPaginationResponse<ICreateSkills>>(
        `${this.baseUrl}/paginate/8`
      );
    }
  
    deleteSkill(id: string | number): Observable<any> {
      return this.http.delete<any>(`${this.baseUrl}/${id}`);
    }
}
