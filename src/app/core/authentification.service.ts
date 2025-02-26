import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) {}
  roleAs : any;
  


  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
  }

 

  singin(data: any) : Observable<any> {
    return this.http.post<User>('http://localhost:3000/login', data) ;
  }

  _is_logged() : boolean {
    return !!localStorage.getItem('access_token');
  }

  getRole(role : string) {
    this.roleAs  = localStorage.getItem('role');
    if(this.roleAs == role) {
      return true;
    }
    return false; 
  }
}
