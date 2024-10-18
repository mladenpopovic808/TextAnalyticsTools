import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit{

  text1:string=''
  text2:string=''
  resultString:string=''


  constructor(private postService:PostService) {

  }

  ngOnInit() {

  }


  checkSimilarity(){


    if(this.text1=='' || this.text2==''){
      return
    }

    this.postService.textSimilarity(this.text1,this.text2,String(localStorage.getItem("token")))
      .subscribe(result=>{
        this.resultString = 'Similarity is ' + (result.similarity*100).toFixed(2)+"%"




      })




  }



}
