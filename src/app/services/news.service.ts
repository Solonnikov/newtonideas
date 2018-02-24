import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { UUID } from 'angular2-uuid';
import { NEWS } from '../news';
import { News } from '../models/News';

@Injectable()
export class NewsService {
  news: News[];

  constructor(public http: HttpClient) {
    this.news = JSON.parse(localStorage.getItem('news'));
  }

  storeNews() {
    localStorage.setItem('news', JSON.stringify(this.news));
  }

  // Get news list
  getNews(): Observable<News[]> {
    // Generate UUID
    this.news.map(news => {
      news.id = UUID.UUID();
    });
    return of(this.news);
  }

  // Get single news
  getNewsById(id: string): Observable<News[]> {
    return of(this.news)
      .map(res => res
        .filter(data => data.id === id));
  }

  addNews(value: Object): Observable<News> {
    const news = JSON.parse(localStorage.getItem('news'));
    news.unshift(value);
    localStorage.setItem('news', JSON.stringify(news));
    return of(news);
  }
}
