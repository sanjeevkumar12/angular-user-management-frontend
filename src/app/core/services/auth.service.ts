import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) : Observable <any> {
    return this.http.post(`${environment.apiUrl}/api/v1/auth/login`, {email, password});
  }
  register(email: string, password: string, confirm_password: string, first_name: string, last_name: string) : Observable <any> {
    return this.http.post(`${environment.apiUrl}/api/v1/auth/register`, {email, password, first_name, last_name, confirm_password});
  }
  forgot_password_link(email: string, client_url: string){
    return this.http.post(`${environment.apiUrl}/api/v1/auth/forgot-password`, {email, client_url});
  }

  forgot_password_reset(new_password: string, confirm_password: string, token: string, hash: string){
    return this.http.post(`${environment.apiUrl}/api/v1/auth/forgot-password/${token}/reset/${hash}`, {new_password, confirm_password});
  }

}
