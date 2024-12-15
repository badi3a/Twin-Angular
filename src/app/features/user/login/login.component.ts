import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/authentification.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new User ;
  authbuttons : any

  constructor(private authService: AuthentificationService, private router: Router, private route: ActivatedRoute) {}

  login(d: any) : void {
    console.log(d);
    this.authService.singin(d).subscribe(
      (response) => {
        // Stocker le jeton JWT dans le stockage local 
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('role', response.user.role);
        if(response.user.role == "role_simpleuser") {
           this.router.navigate(['user/profile'])
          
        }

        if(response.user.role == "role_admin") {
           this.router.navigate(['user/dashboard'])
          
        }

        
        this.authbuttons = document.getElementById("authbuttons")
        if(localStorage.getItem('role') && localStorage.getItem('access_token')) {
          console.log("hello", this.authbuttons);
          this.authbuttons.classList.add("d-none");
        }
        else  {
          console.log("hello", this.authbuttons);
          this.authbuttons.classList.remove("d-none");
        }
        
      }

    )
  }
}
