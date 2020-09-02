import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { splitNsName } from '@angular/compiler';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
dateNow : Date;
  constructor() { }
  ngOnInit() {
    this.dateNow = new Date();
    console.log(this.dateNow);
    alert(this.dateNow);
  
  }


}
