import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import { AnnouncementService } from './features/announcement/services/announcement.service';
import {AnnouncementModule} from "./features/announcement/announcement.module";
import {CardComponent} from "./features/announcement/card/card.component";
import {CardAnnonceComponent} from "./layouts/card-annonce/card-annonce.component";



//using this module our front App will be able to send http request
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, // Import the HTTP client module
    SharedModule,
    AnnouncementModule,
    CardAnnonceComponent,
  ],
  providers: [AnnouncementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
