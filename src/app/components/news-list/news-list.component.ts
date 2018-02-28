import { ChangeDetectionStrategy, Component, OnInit, Input } from "@angular/core";
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { NewsService } from '../../services/news.service';
import { News } from '../../models/News';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public loading = false;
  news: any;
  page: number = 1;
  total: number;
  category = '';

  constructor(
    public newsService: NewsService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    // store news on load
    // if (localStorage.getItem('news') === null) {
    //   this.newsService.storeNews();
    // }
  }

  ngOnInit() {
    // get page and category from url to save the state after redirect
    this.route.queryParams.subscribe((params: Params) => {
      if ('page' in params) {
        this.page = params['page'];
        this.getPage(this.page);
      } else {
        this.getPage(1);
      }
      // if (params['category']) {
      //   const filter = localStorage.getItem('filter');
      //   this.filterCategory(filter);
      // }
    })
  }

  // async get news with page parameters
  getPage(page: number) {
    this.loading = true;
    this.newsService.getNews(page).subscribe((news => {
      this.news = news.body;
       // setting UUID
      this.news.forEach(news => news.id = this.newsService.generateID());
       // getting x-total-count from reponse
      this.total = parseInt(news.headers.get('X-Total-Count'), 0);                                                      
      this.page = page;
      console.log(this.news);
      console.log(this.total);
      console.log(this.page);
      this.loading = false;
    }))
  }


  // filterCategory(filter: string) {
  //   localStorage.setItem('filter', filter);
  //   this.loading = true;
  //   this.p = 1;
  //   this.category = filter;
  //   this.asyncNews = this.newsService.filterNews(filter)
  //     .do(res => {
  //       console.log(res);
  //       this.total = res.total;
  //       this.loading = false;
  //     })
  //     .map(res => res.items);
  // }
}