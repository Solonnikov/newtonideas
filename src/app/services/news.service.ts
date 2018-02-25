import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { UUID } from 'angular2-uuid';
import { NEWS } from '../news';
import { News } from '../models/News';

interface IServerResponse {
  items: string[];
  total: number;
}

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

  // Get news 
  getNews(page: number): Observable<IServerResponse> {
    const news = JSON.parse(localStorage.getItem('news'));
    const perPage = 5;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return Observable
      .of({
        items: news.slice(start, end),
        total: news.length
      }).delay(500);
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
