import {Component, OnInit} from '@angular/core';
import {Announcement} from "../../core/models/announcement";
import {AnnouncementService} from "../../features/announcement/services/announcement.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{

  list: Announcement[];
  constructor (private announcementService:AnnouncementService , private router: Router ){}
  title : string
  category : string
  price : number


  ngOnInit(): void {
      this.announcementService.getAllAnnouncements().subscribe(
        (data: Announcement[]) => {
          this.list = data;
          console.log('All Announcements:', this.list);
        },
        (error) => {
          console.error('Error fetching all announcements:', error);
        }
      );
  }


  search() {
    this.router.navigate(['/announcement/list'], {
      queryParams: {
        title: this.title ? this.title : '' ,
        category: this.category ? this.category : '',
        price_gt: this.price ? this.price : null
      }
    });
    console.log('Search Params:', this.title, this.category, this.price);
  }

}
