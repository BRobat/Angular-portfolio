import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  animations: [
    trigger('fade', [
      
    ])
  ]
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
