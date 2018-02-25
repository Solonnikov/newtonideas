import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/News';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: News[] = [];
  count: number;
  // pagination page
  p: number = 1;
  // filter 
  category = '';

  constructor(
    public newsService: NewsService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    // store news on load
    if (localStorage.getItem('news') === null) {
      this.newsService.storeNews();
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.p = params['page']
      if ('category' in params) {
        this.category = params['category']
      }
      this.newsService.getNews().subscribe(res => {
        console.log(res);
        this.news = res.data;
        this.count = res.count;
        console.log(this.news);
        console.log(this.count);
      })
    });
  }

  updateCategory(filter: string) {
    this.category = filter;
  }
}