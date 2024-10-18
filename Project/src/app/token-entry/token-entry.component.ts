import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-token-entry',
  templateUrl: './token-entry.component.html',
  styleUrls: ['./token-entry.component.css']
})
export class TokenEntryComponent implements OnInit{

  token:string
  lastToken:string


  constructor() {
    this.lastToken=String(localStorage.getItem("token"))
    if(this.lastToken==="null"){
      this.lastToken="(noToken)"
    }
    this.token=""


  }


  ngOnInit() {

  }

  applyToken(){

    this.lastToken=this.token
    localStorage.setItem("token",this.token)
    this.token=""

  }


  protected readonly localStorage = localStorage;
}
