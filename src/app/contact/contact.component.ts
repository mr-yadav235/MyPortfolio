import { Component,ViewChild  } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']

})
export class ContactComponent {
  lat: number = 19.207233;
  lng: number =  72.976625;
  zoom: number = 10;
}
