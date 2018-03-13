import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { NewsService } from './services/news.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { FlashMessagesModule } from 'ngx-flash-messages';

import { LoadingModule } from 'ngx-loading';
import { AddNewsDynamicComponent } from './components/add-news-dynamic/add-news-dynamic.component';
import { DynamicFormNewsComponent } from './components/dynamic-form-news/dynamic-form-news.component';
import { NewsInputService } from './dynamic-form-elements/news-input.service';
import { NewsControlService } from './dynamic-form-elements/news-control.service';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsListComponent,
    NewsDetailsComponent,
    AddNewsComponent,
    AddNewsDynamicComponent,
    DynamicFormNewsComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    LoadingModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/news', pathMatch: 'full' },
      { path: 'news', component: NewsListComponent },
      { path: 'add', component: AddNewsComponent },
      { path: 'add-dynamic', component: AddNewsDynamicComponent },
      { path: 'news/:id', component: NewsDetailsComponent }
    ])
  ],
  providers: [NewsService, NewsControlService, NewsInputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
