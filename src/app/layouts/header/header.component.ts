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

  isLoggedin : boolean ;

  logout() {
    this.authserv.logout()
  }
}
