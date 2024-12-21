import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './announcement.component';
import {FormComponent} from "./form/form.component";

import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import {FavoritComponent} from "./favorit/favorit.component";


const routes: Routes = [
  { path: '', component: AnnouncementComponent },
  {path:'new', component:FormComponent},
  {path: 'list', component:ListeComponent},
  {path: 'favorit', component:FavoritComponent},
  {path: 'details/:id' ,component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AnnouncementRoutingModule { }
