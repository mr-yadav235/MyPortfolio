import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: Experience = {
    company_name: 'Synoris Technologies',
    overview: 'An IT Company offer every type of IT Services, that includes, Software/WEB Development, SEO, etc.',
    role: 'Software Developer',
    product: 'Based on CLIENTS Requirement',
    accomplishments:'Individually completed the Project on a Client-Side using Angular 4',
    date:'March 2018 - Present',
    location:'Vashi, Navi Mumbai',
  };

  constructor() { }

  ngOnInit() {
  }

}
