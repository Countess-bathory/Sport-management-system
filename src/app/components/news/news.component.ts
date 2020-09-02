import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  x:number;
  result:string;
  maxNbr:number;
  T:number[];
  users: any;
  news:any;
  constructor() { }

  ngOnInit() {
    this.news = [
      { id: 1, name: 'Neymar', image: 'assets/images/person_1.jpg', date: "19/08/2020" },
      { id: 2, name: 'Messi', image: 'assets/images/person_2.jpg', date: "20/08/2020" },
      { id: 3, name: 'Ronaldo', image: 'assets/images/person_3.jpg', date: "21/08/2020" },
      { id: 4, name: 'Ronaldo', image: 'assets/images/person_4.jpg', date: "21/08/2020" },
    ];
    this.x = this.calcul(12,13);
    this.result = this.moyenne(19,20,19);
    this.maxNbr = this.max([4,12,8,16,9]);
    // alert(this.reverseArray([4,5,6,7,8]));
    this.T = [5,6,7,8,9];
    // alert(this.T.reverse());
    this.users = [
      {id:1, email: "test"},
      {id:2, email: "tttt@tt.tt"},
      {id:3, email: "jkjkj"},
    ]

    for (let i = 0; i < this.users.length; i++) {
        let isValid = this.verifyEmail(this.users[i].email);
        // alert(`User Email N° ${this.users[i].id} is  ${isValid}`)
    }
  }
  calcul(a:number,b:number) {
    return a+b;
  }

  moyenne(math:number, phy:number, info:number) {
    let moy = (math * 2 + phy * 3 + info * 4) /9;
    if (moy > 0 && moy<8) {
      return 'Trop faible';
    } else if (moy >= 8 && moy<10) {
      return 'Faible';
    }
    else if (moy >= 10 && moy<13) {
      return 'Assez Bien';
    }
    else if (moy >= 13 && moy<16) {
      return 'Bien';
    }
    else if (moy >= 16 && moy<19) {
      return 'T Bien';
    } else {
      return 'Excellent';
    }
  }

  max(T:number[]){
    let max = T[0];
    for (let i = 0; i < T.length; i++) {
      if(max<T[i]) {
        max = T[i];
      }      
    }
    return max;
  }

  reverseArray(T: number[]) {
    let reversedArray = Array(T.length);
    for (let i = T.length - 1; i >=0; i--) { 
      reversedArray[T.length - 1 - i] = T[i];     
    }
    return reversedArray;
  }

  negatif(T:number[]) {
    let negativeArray = Array();
    for (let j = 0; j < T.length; j++) {
      if (T[j] < 0) {
        negativeArray.push(T[j]);
      }      
    }
  }

  fusion(T:number[], N:number[]) {
    for (let j = 0; j < N.length; j++) {
      T.push(N[j]);
    }
    alert(T);
    T.sort();
  }

  verifyEmail(email:string) {
    let regExp = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
    return regExp.test(email);
  }

  checkLength(ch:string, n:number) {
    return (ch.length > n) ;

  }

}
