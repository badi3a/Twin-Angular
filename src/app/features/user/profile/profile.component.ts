import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/services/authentification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(
    private router: Router,
    private authService: AuthentificationService // Injecter le service d'authentification
  ) {}

  ngOnInit(): void {
    // Charger les données du profil depuis le localStorage
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  logout(): void {
    // Appeler la méthode de déconnexion du service
    this.authService.logOut();
    // Rediriger vers la page de connexion
    this.router.navigate(['/user/login']);
  }
}
