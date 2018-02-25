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
      this.newsService.getNews().subscribe(news => {
        this.news = news;
        console.log(this.news);
      })
    });
  }

  updateCategory(filter: string) {
    this.category = filter;
  }
}