import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../env/environment';
import { IDecode } from '../interface/idecode';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = `${environment.baseUrl}user/session`;

  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.baseUrl, credentials);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);

    const decoded = this.decodeToken(token);
    if (decoded) {
      localStorage.setItem('user', JSON.stringify(decoded));
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  decodeToken(token: string): IDecode | null {
    try {
      return jwtDecode<IDecode>(token);
    } catch (e) {
      console.error('Invalid token', e);
      return null;
    }
  }

  getUser(): IDecode | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) as IDecode : null;
  }
}
