import { Component, OnInit } from '@angular/core';
import { About } from '../about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: About = {
    title: 'Software Developer',
    name: 'Jayprakash Yadav',
    description: 'I want to make things that make a difference.'
  };

  constructor() { }

  ngOnInit() {
  }

}
