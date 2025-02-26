import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Announcement} from "../../../core/models/announcement";
import {Observable} from "rxjs";

@Injectable()
export class AnnouncementService {
   urlApi: string= "https://6762de1017ec5852cae7600e.mockapi.io/twinim/announcements/";
  constructor(private http:HttpClient) { }
  getLikedAnnouncement(){
    return this.http.get<Announcement[]>(`${this.urlApi}?isLiked=true`);
  }

  ///CNX Backend Side
  //getAnnouncement
  getAllAnnouncements():Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.urlApi)
  }
  //addAnnouncement
  addAnnouncement(objet:Announcement):Observable<Announcement>{
    return this.http.post<Announcement>(this.urlApi,objet)
  }
  //getAnnouncement By id
  getAnnouncementById(id:any){
    return this.http.get<Announcement>(`${this.urlApi}${id}`)
  }

  //delete
  //search
  //getbyId
  //update






  getAnnoucementBYID(id: any){
    return this.http.get<Announcement>(`${this.urlApi}${id}`)

}

deletAnnoucement(id: any): Observable<void> {
  return this.http.delete<void>(`${this.urlApi}${id}`);
}



updateAnnouncement(id: any, announcement: Announcement): Observable<void> {
  return this.http.put<void>(`${this.urlApi}${id}`, announcement);
}





}
