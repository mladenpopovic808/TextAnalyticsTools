import {Component, OnInit} from '@angular/core';
import {DetectedLanguage} from "../model";
import {PostService} from "../services/post.service";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit{

  cleanBoolean:boolean=false
  enteredText:String=""
  detectedLangs:DetectedLanguage[]=[];



  constructor(private postService:PostService) {

  }

  ngOnInit() {


  }

  submitLanguageDetection(){


    this.postService.detectLanguage(this.enteredText,this.cleanBoolean,String(localStorage.getItem("token")))
      .subscribe(value =>
        this.detectedLangs=value.detectedLangs
      )

  }

}
