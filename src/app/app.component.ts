import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'twinIm';
  authbuttons : any;

  ngOnInit(): void {
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


}
