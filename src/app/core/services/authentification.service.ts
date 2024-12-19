import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private apiUrl = 'http://localhost:3000'; // URL de l'API

  constructor(private http: HttpClient, private router: Router) {}

  // Méthode pour se connecter
  signin(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signin`, credentials);
  }

  // Méthode pour se déconnecter
  logOut(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    this.router.navigate(['/user/login']);
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  // Méthode pour récupérer le rôle de l'utilisateur
  getRole(): string | null {
    return localStorage.getItem('role');
  }

  // Méthode pour vérifier si l'utilisateur a un rôle spécifique
  hasRole(role: string): boolean {
    return this.getRole() === role;
  }

}
