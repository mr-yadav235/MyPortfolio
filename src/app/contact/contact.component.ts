import { Component,ViewChild  } from '@angular/core';
import { } from '@types/googlemaps';
import {MapsAPILoader} from '@agm/core';

declare var MarkerClusterer: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']

})
export class ContactComponent {
  lat: number = 45.421530;
  lng: number = -75.697193;
  zoom: number = 7;
}
