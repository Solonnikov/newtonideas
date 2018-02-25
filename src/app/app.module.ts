import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { NewsService } from './services/news.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { FilterPipe } from './pipes/filter.pipe';
import { PagerService } from './services/pager.service';
import { PagerComponent } from './components/pager/pager.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsListComponent,
    NewsDetailsComponent,
    AddNewsComponent,
    FilterPipe,
    PagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/news', pathMatch: 'full' },
      { path: 'news', component: NewsListComponent },
      { path: 'pager', component: PagerComponent },
      { path: 'add', component: AddNewsComponent },
      { path: 'news/:id', component: NewsDetailsComponent }
    ])
  ],
  providers: [NewsService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
