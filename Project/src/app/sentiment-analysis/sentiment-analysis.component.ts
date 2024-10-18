import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";
import {Sentiment, SentimentAnalysisResponse} from "../model";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit{

  languageOption:string='en'
  enteredText:string=''
  sentiment:Sentiment=new Sentiment()
  colorClass:String=''


  constructor(private postService:PostService) {
  }

  ngOnInit() {
  }

  submitForm(){


    this.postService.analyzeSentiment(this.enteredText,this.languageOption,String(localStorage.getItem("token")))
      .subscribe(value => {
        this.sentiment = value.sentiment
        this.calculateColor()


      })

  }
  calculateColor():void{
    let green=((this.sentiment.score+1)/2)*255 //od 0 do 1 *255
    if(green<0){
      green=0
    }
    let red=255-green
    this.colorClass="rgb("+red+","+green+",0)"




  }


}
