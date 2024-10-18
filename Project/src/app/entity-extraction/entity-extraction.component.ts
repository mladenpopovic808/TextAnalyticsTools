import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";
import {EntityClass} from "../model";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit{

  abstract:boolean=false
  categories:boolean=false
  image:boolean=false
  confidence:number=0.5;
  text:string=''
  results: Array<EntityClass> = []

  constructor(private postService:PostService) {


  }


  ngOnInit() {
  }
  extractEntities(){
    if(this.text==''){
      return
    }
    let includeString=''
    if (this.abstract===true){
      includeString+='abstract,'
    }if(this.categories===true){
      includeString+='categories,'
    }if(this.image===true){
      includeString+='image'
    }

    this.postService.extractEntities(this.text,includeString,this.confidence,String(localStorage.getItem("token")))
      .subscribe(result =>{
        this.results=result.annotations


      })












  }


}
