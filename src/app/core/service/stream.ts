import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class Stream {
  private baseUrl = `${environment.baseUrl}stream`;

  constructor(private http: HttpClient) {}

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders({
      'accept': 'text/plain',
      // متحطش Content-Type هنا، الـ browser هيضيفه تلقائي
    });

    return this.http.post(`${this.baseUrl}`, formData, {
      headers

    });
  }
}
