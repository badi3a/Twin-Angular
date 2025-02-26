import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {Announcement} from "../../core/models/announcement";
import {RouterModule} from "@angular/router";
import {AnnouncementService} from "../../features/announcement/services/announcement.service";

@Component({
  selector: 'app-card-annonce',
  standalone: true,
  imports: [CommonModule, SharedModule,RouterModule],
  templateUrl: './card-annonce.component.html',
  styleUrls: ['./card-annonce.component.css']
})
export class CardAnnonceComponent {
  @Input() a:Announcement;
  constructor(private announcementService: AnnouncementService) {
  }
  addLike(a:Announcement) {
    // Basculer l'état de "like"
    a.isLiked = !a.isLiked;

    // Mettre à jour le nombre de likes
    if (a.isLiked) {
      a.nbrLike += 1;
    } else {
      a.nbrLike -= 1;
    }

    // Mettre à jour l'annonce côté serveur
    this.announcementService.updateAnnouncement(a.id, a).subscribe(
      () => {
        console.log('Annonce mise à jour avec succès:', a);
      })
  }
}
