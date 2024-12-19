import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {

  constructor(private authService: AuthentificationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Vérifie si l'utilisateur est connecté
    if (this.authService.isLoggedIn()) {
      // Vérifie si l'utilisateur a le rôle requis
      const requiredRole = 'ROLE_ADMIN'; // Rôle requis pour accéder à la page "dashboard"
      if (this.authService.hasRole(requiredRole)) {
        return true; // Autoriser l'accès à la route
      }
      else {
        // Rediriger vers une page d'erreur ou une page d'accès refusé
        this.router.navigate(['/access-denied']);
        return false; // Bloquer l'accès à la route
      }
    }
    else {
      // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
      this.router.navigate(['/user/login']);
      return false; // Bloquer l'accès à la route
    }
  }
}
