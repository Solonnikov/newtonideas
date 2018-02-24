import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewsService {
  
  constructor(public http: HttpClient) { }

  getNews() {
    return this.http.get('assets/data/news.json');
  }
}
