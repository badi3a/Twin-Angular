import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
=======
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
>>>>>>> master
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
>>>>>>> master
@NgModule({
  declarations: [
    UserComponent,
    RegisterComponent,
    LoginComponent,
<<<<<<< HEAD
    ProfileComponent
=======
    ProfileComponent,
    DashboardAdminComponent
>>>>>>> master
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService]
})
export class UserModule { }
