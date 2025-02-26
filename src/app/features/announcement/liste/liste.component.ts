
import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/core/models/announcement';
import {AnnouncementService} from "../services/announcement.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  list: Announcement[];
  constructor (private announcementService:AnnouncementService){}

ngOnInit(): void {

  this.announcementService.getAllAnnouncements().subscribe(
    (data:Announcement[]) : void =>{this.list=data;
     console.log(this.list)
    },
  )

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




}
