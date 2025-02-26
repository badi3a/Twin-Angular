import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from "../services/announcement.service";
import {Announcement} from "../../../core/models/announcement";

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.css']
})
export class FavoritComponent implements OnInit{
  listFav: Announcement[]
  constructor(private announcementService:AnnouncementService) {
  }
  ngOnInit() {
    this.announcementService.getLikedAnnouncement().subscribe(
      (data:Announcement[])=> this.listFav = data
    )
  }
}
