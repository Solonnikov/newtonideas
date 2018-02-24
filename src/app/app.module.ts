import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { AddNewsComponent } from './components/add-news/add-news.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsListComponent,
    NewsDetailsComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: NewsListComponent },
      { path: 'add', component: AddNewsComponent },
      { path: ':id', component: NewsDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
