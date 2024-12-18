import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { AuthentificationService } from './core/authentification.service';
import { Router } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 
  constructor(private router: Router, private auth: AuthentificationService) {}

  title = 'twinIm';
  
  @ViewChild('header') header: HeaderComponent;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event.constructor.name === 'NavigationEnd') {
        if (this.auth._is_logged()) {
          this.header.isLoggedin = true;
        } else {
          this.header.isLoggedin = false;
        }
      }
    });
  }

  
}
