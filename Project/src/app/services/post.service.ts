import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  EntityExtractionResponse,
  LanguageDetectionResponse,
  SentimentAnalysisResponse,
  TextSimilarityResponse,
  Transaction
} from "../model";
import {formatDate} from "@angular/common";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  savedTransactions:Transaction[]

  constructor(private httpClient:HttpClient) {
    this.savedTransactions=[]

  }



  detectLanguage(text:String,option:boolean,token:string):Observable<LanguageDetectionResponse>{
    this.saveTransaction("GET", `${environment.languageDetection}/?text=${text}&option=${option}&token=${token}`);

    return this.httpClient.get<LanguageDetectionResponse>(`${environment.languageDetection}/?text=${text}&option=${option}&token=${token}`)
  }

  analyzeSentiment(text:string,lang:string,token:string):Observable<SentimentAnalysisResponse>{

    this.saveTransaction("GET",`${environment.sentimentAnalysis}/?text=${text}&lang=${lang}&token=${token}`)
    return this.httpClient.get<SentimentAnalysisResponse>(`${environment.sentimentAnalysis}/?text=${text}&lang=${lang}&token=${token}`)

  }

  textSimilarity(text1:string,text2:string,token:string){
    this.saveTransaction("GET",`${environment.textSimilarity}/?text1=${text1}&text2=${text2}&token=${token}`)
    return this.httpClient.get<TextSimilarityResponse>(`${environment.textSimilarity}/?text1=${text1}&text2=${text2}&token=${token}`)

  }
  extractEntities(text:string,include:string,min_confidence:number,token:string){
    this.saveTransaction("GET", `${environment.entityExtraction}/?text=${text}&min_confidence=${min_confidence}&lang=eng&include=${include}&token=${token}`);
    return this.httpClient.get<EntityExtractionResponse>(`${environment.entityExtraction}/?text=${text}&min_confidence=${min_confidence}&include=${include}&token=${token}`)

  }


  private saveTransaction(method: string, url: string): void {
    this.savedTransactions.push(new Transaction(
      formatDate(new Date(), 'dd/mm/yyyy', 'en'),
      formatDate(new Date(), 'hh:mm:ss', 'en'),
      method,
      url
    ))

  }





}
