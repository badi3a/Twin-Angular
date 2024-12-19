import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthentificationService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Vérifie si l'utilisateur a le rôle requis (par exemple, ROLE_ADMIN)
    if (this.authService.hasRole('ROLE_ADMIN')) {
      return true; // Autoriser l'accès à la route
    } else {
      // Déconnecter l'utilisateur et rediriger vers la page de connexion
      this.authService.logOut();
      this.router.navigate(['/login']);
      return false; // Bloquer l'accès à la route
    }
  }
}
