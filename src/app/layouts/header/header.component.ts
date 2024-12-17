import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})


export class HeaderComponent implements OnInit  {


  title: string = '';

  constructor(private router: Router) {}

  search(){
    this.router.navigate(['/announcement/list'], {
      queryParams: {
        title: this.title.trim() ,
      }
    });
  }
  ngOnInit(): void {
    console.log(this.title);
  }





}
