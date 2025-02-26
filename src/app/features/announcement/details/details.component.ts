import { AnnouncementService } from './../services/announcement.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Announcement } from 'src/app/core/models/announcement';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit{

  announcement : Announcement;
  isEditing: boolean = false; // Pour savoir si on est en mode édition
  imagePreview: string | ArrayBuffer | null = null;


  constructor(private activatedRoute: ActivatedRoute
    , private announcementService: AnnouncementService , public router: Router) {
  }

    ngOnInit() {

      let id:any=this.activatedRoute.snapshot.params['id']

      this.announcementService.getAnnoucementBYID(id).subscribe(
        (data: Announcement) => {

          this.announcement=data;
          console.log(this.announcement);


        }


      )
    }




    toggleEdit(): void {
      this.isEditing = !this.isEditing; // Permet de passer en mode édition ou non
    }



    onImageSelect(event: any): void {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreview = e.target.result;
          this.announcement.picture = this.imagePreview as string; // Mettre à jour l'image dans l'annonce
        };
        reader.readAsDataURL(file);
      }
    }



    updateAnnouncement(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.announcement.datePublication = new Date(); // Mettre à jour la date de publication
      this.announcementService.updateAnnouncement(id, this.announcement).subscribe(
        () => {
          this.isEditing = false; // Désactive le mode édition
          this.router.navigate(['/announcement/list']); // Redirige vers la liste des annonces
        }
      );
    }


    deleteAnnouncement(id: any): void {
      if (confirm('supprimer cette annonce ?')) {
        this.announcementService.deletAnnoucement(id).subscribe(
          () => {
            console.log('Annonce supprimée avec succès');
            this.router.navigate(['/announcement/list']);  // Utilisation du Router pour la redirection
          },
          (error) => {
            console.error('Erreur lors de la suppression de l\'annonce :', error);
          }
        );
      }

    }




}
