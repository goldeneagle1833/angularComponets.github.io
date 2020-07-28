import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AverageRatingComponent } from './average-rating/average-rating.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { WebsiteVistorsComponent } from './website-vistors/website-vistors.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReviewsComponent,
    AverageRatingComponent,
    SentimentAnalysisComponent,
    WebsiteVistorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
