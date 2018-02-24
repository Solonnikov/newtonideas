import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { News } from '../models/News';
import { UUID } from 'angular2-uuid';

@Injectable()
export class NewsService {
  news: News[];

  constructor(public http: HttpClient) {
    // News array
    this.news = [
      {
        "id": "1",
        "title": "Equity shot: Dropbox is going public, and Aaron Levie has some advice",
        "description": "Hello and welcome back to Equity, TechCrunch’s venture capital-focused podcast where we unpack the numbers behind the headlines. At long last, after many predictions and even a private filing, Dropbox dropped its S-1 today. The filing marks the public beginni…",
        "category": "Health"
      },
      {
        "id": "2",
        "title": "This vinyl subscription service is an audiophile's dream",
        "description": "Heads up: All products featured here are selected by Mashable's commerce team and meet our rigorous standards for awesomeness. If you buy something, Mashable may earn an affiliate commission. We love the convenience of streaming songs as much as the next pers…",
        "category": "Life"
      },
      {
        "id": "3",
        "title": "Happy Birthday to Steve Jobs and MacRumors",
        "description": "Former Apple CEO Steve Jobs, who co-founded Apple and was responsible for catapulting the company to wild success with products like the iPod and the iPhone, was born on February 24, 1955, and were he still alive, today would mark his 63rd birthday. Jobs not …",
        "category": "Food"
      },
      {
        "id": "4",
        "title": "This TV sound bar uses phone tech to aim audio at your ears - CNET",
        "description": "The prototype from the mobile mavens at Qualcomm borrows from Wi-Fi technology to find the sweet spot.",
        "category": "Health"
      },
      {
        "id": "5",
        "title": "The Average Salaries of Tech Works in Major Cities (Infographic)",
        "description": "In 2017, most tech workers brought in a enviable yearly salary.",
        "category": "Life"
      },
      {
        "id": "6",
        "title": "Equity shot: Dropbox is going public, and Aaron Levie has some advice",
        "description": "Hello and welcome back to Equity, TechCrunch’s venture capital-focused podcast where we unpack the numbers behind the headlines. At long last, after many predictions and even a private filing, Dropbox dropped its S-1 today. The filing marks the public beginni…",
        "category": "Health"
      },
      {
        "id": "7",
        "title": "This vinyl subscription service is an audiophile's dream",
        "description": "Heads up: All products featured here are selected by Mashable's commerce team and meet our rigorous standards for awesomeness. If you buy something, Mashable may earn an affiliate commission. We love the convenience of streaming songs as much as the next pers…",
        "category": "Life"
      },
      {
        "id": "8",
        "title": "Happy Birthday to Steve Jobs and MacRumors",
        "description": "Former Apple CEO Steve Jobs, who co-founded Apple and was responsible for catapulting the company to wild success with products like the iPod and the iPhone, was born on February 24, 1955, and were he still alive, today would mark his 63rd birthday. Jobs not …",
        "category": "Food"
      },
      {
        "id": "9",
        "title": "This TV sound bar uses phone tech to aim audio at your ears - CNET",
        "description": "The prototype from the mobile mavens at Qualcomm borrows from Wi-Fi technology to find the sweet spot.",
        "category": "Health"
      },
      {
        "id": "10",
        "title": "The Average Salaries of Tech Works in Major Cities (Infographic)",
        "description": "In 2017, most tech workers brought in a enviable yearly salary.",
        "category": "Life"
      }
    ]
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
  getNewsById(id: number): Observable<News> {
    return of(this.news)
      .map(res => res
        .filter(data => data.id === id));
  }
}
