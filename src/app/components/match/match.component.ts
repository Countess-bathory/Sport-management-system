import { MatchService } from './../../services/match.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input() data:any;
  @Output() newMatches : EventEmitter<any> = new EventEmitter();
  constructor(
    private router:Router,
    private matchService:MatchService
  ) { }

  ngOnInit() {
  }

  compare(a:number,b:number) {
    if (a>b) {
      return 'win';
    } else if (a<b) {
      return 'loss';
    } else {
      return 'draw';
    }
  }

  goToMatch(id:number) {
    this.router.navigate([`displayMatch/${id}`]);
    console.log(`displayMatch/${id}`);
 
  }

  deleteMatch(id:number) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        alert('Match deleted');
        this.matchService.getAllMatches().subscribe( data => {
          this.newMatches.emit(data);
        }
        ) 
        
    }
    )
  }

}
