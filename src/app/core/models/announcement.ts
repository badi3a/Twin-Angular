export class Announcement{
  id:number;
  title:string;
  address:string;
  category:string;
  price:number;
  //pictures:Array<string>;
  nbrLike: number =0;
  picture:string;
  datePublication:Date;
  description:string;
  surface:number;
  status:string;
  roomsNumber:number;
  isLiked : boolean;
}
