import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from 'src/app/core/models/User';
import { AnnouncementService } from '../../announcement/services/announcement.service';
import { Announcement } from 'src/app/core/models/announcement';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent implements OnInit{
  constructor( private userService: UserService, private annonceSerice : AnnouncementService) {}

  users : User [] ;
  nbUsers : number;
  nbAnnonce : number;


  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data : User[]) : void => {
        this.users = data;
        this.nbUsers = data.length
      } )

      this.annonceSerice.getAllAnnouncements().subscribe(
        (data : Announcement[]) : void => {
          
          this.nbAnnonce = data.length;
        }
      
    )



  }

  
  
  
}
