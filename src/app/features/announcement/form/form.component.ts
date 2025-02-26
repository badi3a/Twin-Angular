import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from "../services/announcement.service";
import {Announcement} from "../../../core/models/announcement";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   announcement:Announcement;
   imagePreview: string | ArrayBuffer | null = null;

   constructor(private announcementService: AnnouncementService , private router:Router ) { }

   ngOnInit() {
     this.announcement = new Announcement();
   }
  save() {
    this.announcement.datePublication=new Date();
    this.savePicture();

    this.announcementService.addAnnouncement(this.announcement).subscribe(
      () => {
        this.router.navigateByUrl("announcement/list");
      }
    )
  }

  onImageSelect(event: any) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result; // Set the preview to the reader result (image file)
        this.announcement.picture = this.imagePreview as string; // Assign the preview to the announcement object
      };
      reader.readAsDataURL(file); // Read the image file as a data URL
    }
  }

  savePicture()
  {
   
  }
}
