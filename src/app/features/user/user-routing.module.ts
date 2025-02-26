import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import {RegisterComponent} from "./register/register.component";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
=======
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
>>>>>>> master

const routes: Routes = [
  { path: '', component: UserComponent },
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
<<<<<<< HEAD
  {path:'profile/:id', component: ProfileComponent},
=======
  {path:'profile', component: ProfileComponent},
  {path:'dashboard', component: DashboardAdminComponent},
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
