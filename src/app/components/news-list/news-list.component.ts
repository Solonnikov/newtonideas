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
  }

  ngOnInit() {
    // get page and category from url to save the state after redirect
    this.route.queryParams.subscribe((params: Params) => {
      if ('page' in params) {
        this.page = params['page'];
        this.category = params['category'];
        this.getPage(this.page, this.category);
      } else {
        this.getPage(1, '');
      }
      if (params['category']) {
        const filter = params['category'];
        this.filterCategory(filter);
      }
    })
  }

  // async get news with page parameters
  getPage(page: number, filter: string) {
    this.loading = true;
    this.newsService.getNews(page, filter).subscribe((news => {
      this.news = news.body;
      // getting x-total-count from reponse
      this.total = parseInt(news.headers.get('X-Total-Count'), 0);
      this.page = page;
      console.log(this.news);
      console.log(`Total: ${this.total}`);
      console.log(`Page: ${this.page}`);
      this.loading = false;
    }))
  }

  filterCategory(filter: string) {
    this.loading = true;
    this.newsService.filterNews(filter).subscribe(news => {
      this.news = news.body;
      this.total = news.body.length;
      console.log(this.news);
      console.log(`Total filter: ${news.body.length}`);
      this.category = filter;
      this.loading = false;
    })
  }
}