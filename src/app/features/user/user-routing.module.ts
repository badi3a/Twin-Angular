import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {RegisterComponent} from "./register/register.component";
import { LoginComponent } from './login/login.component';
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthentificationGuard} from "../../core/guards/authentification.guard";
import {RoleGuard} from "../../core/guards/role-guard.guard";
import { AccessDeniedComponent } from "../../features/access-denied/access-denied.component";


const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthentificationGuard, RoleGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
