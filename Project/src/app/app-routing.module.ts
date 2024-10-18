import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntityExtractionComponent} from "./entity-extraction/entity-extraction.component";
import {TextSimilarityComponent} from "./text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./sentiment-analysis/sentiment-analysis.component";
import {TokenEntryComponent} from "./token-entry/token-entry.component";
import {ApiHistoryComponent} from "./api-history/api-history.component";
import {TokenGuard} from "../token.guard";

const routes: Routes = [

  {
    path:"",
    component:EntityExtractionComponent,
    canActivate:[TokenGuard]

  },
  {
    path:"textSimilarity",
    component:TextSimilarityComponent,
    canActivate:[TokenGuard]

  },
  {
    path:"languageDetection",
    component:LanguageDetectionComponent,
    canActivate:[TokenGuard]

  },
  {
    path:"sentimentAnalysis",
    component:SentimentAnalysisComponent,
    canActivate:[TokenGuard]
  },
  {
    path:"tokenEntry",
    component:TokenEntryComponent,
    canActivate:[TokenGuard]
  },
  {
    path:"apiHistory",
    component:ApiHistoryComponent,
    canActivate:[TokenGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {






}
