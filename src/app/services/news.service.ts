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
    if (localStorage.getItem('news') !== null) {
      this.news = JSON.parse(localStorage.getItem('news'));
      // Generate UUID
      this.news.map(news => {
        news.id = UUID.UUID();
      });
    } else {
      this.news = NEWS;
      // Generate UUID
      this.news.map(news => {
        news.id = UUID.UUID();
      });
    }
  }

  // store news arr in ls on init
  storeNews() {
    localStorage.setItem('news', JSON.stringify(this.news));
  }

  // Get news list
  getNews(): Observable<News[]> {
    const news = JSON.parse(localStorage.getItem('news'));
    const count = news.length;
    // news.splice(0, count);
    return of({
      data: news,
      count: count
    });
  }

  // Get single news
  getNewsById(id: string): Observable<News[]> {
    const news = JSON.parse(localStorage.getItem('news'));
    return of(news)
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
