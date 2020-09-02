import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches:any;
  constructor(private matchService:MatchService  ) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data;
      }
    )
  }
  updateMatches(matches: any) {
    this.matches = matches;
}

  
 
  
  
}
