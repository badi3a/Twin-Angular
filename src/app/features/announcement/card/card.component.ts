import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Announcement} from "../../../core/models/announcement";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() a:Announcement;
    @Output() notifyParent:EventEmitter<Announcement>=
        new EventEmitter<Announcement>();
    eventLike(a:Announcement) {
      return this.notifyParent.emit(a);
    }

}
