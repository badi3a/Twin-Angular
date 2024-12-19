import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    UserComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService]
})
export class UserModule { }
