import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { UUID } from 'angular2-uuid';
import { NEWS } from '../news';
import { News } from '../models/News';

interface IServerResponse {
  items: News[];
  total: number;
  category?: string;
}

const NEWS_API: string = "http://localhost:3000/news";

@Injectable()
export class NewsService {
  // news: News[];

  constructor(public http: HttpClient) {
    // if (localStorage.getItem('news') !== null) {
    //   this.news = JSON.parse(localStorage.getItem('news'));
    //   // Generate UUID
    //   this.news.map(news => {
    //     news.id = v
    //   });
    // } else {
    //   this.news = NEWS;
    //   // Generate UUID
    //   this.news.map(news => {
    //     news.id = UUID.UUID();
    //   });
    // }
  }

  // store news arr in ls on init
  // storeNews() {
  //   localStorage.setItem('news', JSON.stringify(this.news));
  // }

  generateID() {
    const id = UUID.UUID();
    return id;
  }

  // Get news 
  getNews(page: number): Observable<HttpResponse<any>> {
    const perPage = 5;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return this.http.get<any>(
      `${NEWS_API}?_start=${start}&_end=${end}`, { observe: 'response' });
  }

  // Filter news 
  // filterNews(filter: string): Observable<IServerResponse> {
  //   const news = JSON.parse(localStorage.getItem('news'));

  //   return Observable
  //     .of({
  //       // filtering categories and returning all data if filter equals ''
  //       items: filter !== '' ? news.filter(element => element.category === filter) : news,
  //       total: filter !== '' ? news.filter(element => element.category === filter).length : news.length,
  //       category: filter
  //     }).delay(500);
  // }

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
