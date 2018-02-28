import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { News } from '../models/News';

const NEWS_API: string = "http://localhost:3000/news";

@Injectable()
export class NewsService {
  headers;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  // Get news 
  getNews(page: number, filter: string): Observable<HttpResponse<any>> {
    const perPage = 5;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    if (filter) {
      return this.http.get<any>(
        `${NEWS_API}?q=${filter}&_start=${start}&_end=${end}`, { observe: 'response' });
    } else {
      return this.http.get<any>(
        `${NEWS_API}?_start=${start}&_end=${end}`, { observe: 'response' });
    }
  }

  // Filter news by category
  filterNews(filter: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      `${NEWS_API}?q=${filter}`, { observe: 'response' });
  }

  // Get single news
  getNewsById(id: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      `${NEWS_API}/${id}`, { observe: 'response' });
  }

  addNews(value: Object): Observable<any> {
    return this.http.post(NEWS_API, value, { headers: this.headers }).map(res => console.log(res));
  }
}
