import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./layouts/home/home.component";
import {NotFoundComponent} from "./layouts/not-found/not-found.component";

const routes: Routes = [
  { path:'home',component: HomeComponent},
  { path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'announcement', loadChildren: () => import('./features/announcement/announcement.module').then(m => m.AnnouncementModule) },
  { path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) },
  {path:'**', component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
