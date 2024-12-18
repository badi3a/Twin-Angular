import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/core/models/announcement';
import {AnnouncementService} from "../services/announcement.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  list: Announcement[];
  searchListExists: number = 0;
  title: string | null;
  category: string | null;
  price: number = 0;

  constructor (private announcementService:AnnouncementService , private route: ActivatedRoute){}
  ngOnInit(): void {
    this.title = this.route.snapshot.queryParamMap.get('title');
    this.category = this.route.snapshot.queryParamMap.get('category');
    this.price = Number(this.route.snapshot.queryParamMap.get('price_gt')) || 0;

    if (this.title || this.category || this.price > 0) {
      this.announcementService.searchAnnouncement(this.title ? this.title : '' , this.category ? this.category : '' , this.price ).subscribe(
        (data: Announcement[]) => {
          this.list = data;
          this.searchListExists = this.list.length ;
          console.log('Filtered Announcements:', this.list , this.searchListExists);
        },
        (error) => {
          console.error('Error fetching filtered announcements:', error);
        }
      );
    } else {
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
  }


addLike(a: Announcement): void {
  // Basculer l'état de "like"
  a.isLiked = !a.isLiked;

  // Mettre à jour le nombre de likes
  if (a.isLiked) {
    a.nbrLike += 1;
  } else {
    a.nbrLike -= 1;
  }

  // Mettre à jour l'annonce côté serveur
  this.updateAnnouncement(a.id, a);
}

// Mettre à jour une annonce sur le serveur
updateAnnouncement(id: any, announcement: Announcement): void {
  this.announcementService.updateAnnouncement(id, announcement).subscribe(
    () => {
      console.log('Annonce mise à jour avec succès:', announcement);
    },
    (error) => {
      console.error('Erreur lors de la mise à jour de l\'annonce :', error);
      alert('Une erreur est survenue lors de la mise à jour.');
    }
  );
}


//search




}
