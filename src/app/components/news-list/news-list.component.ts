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
  // search 
  searchField = '';

  constructor(
    public newsService: NewsService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    // store news in ls
    this.newsService.storeNews();
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
}