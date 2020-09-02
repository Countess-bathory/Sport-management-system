import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:any= {};
  x:number=7;
  constructor() { }

  ngOnInit() {
  }

  valider() {
    console.log('Contact object', this.contact);
  }

}
