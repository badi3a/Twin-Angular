import { Component, ElementRef } from '@angular/core';
import { AuthentificationService } from 'src/app/core/authentification.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  
  constructor(private authserv : AuthentificationService) {
  }

  isLoggedin : boolean = !!localStorage.getItem('access_token');;

  logout() {
    this.authserv.logout()
  }
}
