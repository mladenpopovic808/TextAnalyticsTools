import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ApiHistoryComponent } from './api-history/api-history.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { LanguageDetectionComponent } from './language-detection/language-detection.component';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import {HttpClientModule} from "@angular/common/http";
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { TokenEntryComponent } from './token-entry/token-entry.component';
import { TokenNullPipePipe } from './pipes/token-null-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ApiHistoryComponent,
    EntityExtractionComponent,
    LanguageDetectionComponent,
    TextSimilarityComponent,
    SentimentAnalysisComponent,
    TokenEntryComponent,
    TokenNullPipePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
