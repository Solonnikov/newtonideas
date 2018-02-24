import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/News';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: News[] = [];

  constructor(public newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
      console.log(this.news);
    })
  }
}
