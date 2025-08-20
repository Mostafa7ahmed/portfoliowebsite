import { Injectable } from '@angular/core';
import { environment } from '../../env/environment';
import { Observable } from 'rxjs';
import { IPaginationResponse, IResponseOf } from '../Shared/Interface/irespose';
import { HttpClient } from '@angular/common/http';
import { IPorfile } from '../interface/iporfile';

@Injectable({
  providedIn: 'root'
})
export class SidebarPorfile {
      private baseUrl = `${environment.baseUrl}user/profile/8`;
    constructor(private http: HttpClient) {}



        getporfile(): Observable<IResponseOf<IPorfile>> {
          return this.http.get<IResponseOf<IPorfile>>(
            `${this.baseUrl}`
          );
        }
}
