import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players:any;
  constructor() { }

  ngOnInit() {
    this.players = [
      {id:1, name: 'Leo Messi', team: 'FCB', description: "Milieu Offensif", photo: 'assets/images/img_1.jpg'},
      {id:1, name: 'Suarez', team: 'FCB', description: "Attaquant", photo: 'assets/images/img_1.jpg'},
      {id:1, name: 'Neymar', team: 'FCB', description: "Goal Keeper", photo: 'assets/images/img_1.jpg'},
      {id:1, name: 'Xavi', team: 'FCB', description: "Défenseur", photo: 'assets/images/img_1.jpg'}
    ]
  }

}
