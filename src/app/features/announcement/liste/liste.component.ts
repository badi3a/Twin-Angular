import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/core/models/announcement';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  list: Announcement[] = [];
  sortedList: Announcement[] = [];
  selectedSort: string = 'newest'; // Default sort option

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.announcementService.getAllAnnouncements().subscribe(
      (data: Announcement[]): void => {
        this.list = data;
        console.log(this.list);
        this.sortList(); // Initial sorting
      }
    );
  }

  addLike(a: Announcement): void {
    // Toggle "like" state
    a.isLiked = !a.isLiked;

    // Update like count
    if (a.isLiked) {
      a.nbrLike += 1;
    } else {
      a.nbrLike -= 1;
    }

    // Update the announcement on the server
    this.updateAnnouncement(a.id, a);
  }

  updateAnnouncement(id: any, announcement: Announcement): void {
    this.announcementService.updateAnnouncement(id, announcement).subscribe(
      () => {
        console.log('Announcement updated successfully:', announcement);
      },
      (error) => {
        console.error('Error updating the announcement:', error);
        alert('An error occurred while updating the announcement.');
      }
    );
  }

  // Sorting functionality
  sortList(): void {
    if (this.selectedSort === 'newest') {
      this.sortedList = this.list.sort(
        (a, b) => new Date(b.datePublication).getTime() - new Date(a.datePublication).getTime()
      );
    } else if (this.selectedSort === 'popular') {
      this.sortedList = this.list.sort((a, b) => b.nbrLike - a.nbrLike);
    }
  }
}
