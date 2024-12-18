import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {AnnouncementService} from "../services/announcement.service";
import {Announcement} from "../../../core/models/announcement";

@Component({
  selector: 'app-detail-announcement',
  templateUrl: './detail-announcement.component.html',
  styleUrls: ['./detail-announcement.component.css']
})
export class DetailAnnouncementComponent implements OnInit{
  announcement :Announcement;
   //get id form path
  //use Service ActivatedRoute to get the id from the path
  constructor(private route:ActivatedRoute,
              private announcementService: AnnouncementService,
              private router : Router) {
  }
  ngOnInit() {
    //use snapshot
    let id:any=this.route.snapshot.params['id']
    this.announcementService.getAnnouncementById(id).subscribe(
    (data:Announcement)=>{
      this.announcement=data;
      console.log(this.announcement);
    },
      (err)=>{
      this.router.navigateByUrl("/notFound")
      })
  }




  //use method getAnnouncementbyId from Announcement Service

}
