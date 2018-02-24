import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: any;
 

  constructor(public newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
      
      // Generate UUID
      this.news.map(news => {
        news.id = UUID.UUID();
      });
      console.log(this.news);
    })
  }
}
