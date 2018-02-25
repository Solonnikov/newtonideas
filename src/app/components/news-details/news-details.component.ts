import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/News';
import { Location } from '@angular/common';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  singleNews: News;
  p: number;
  category: string;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public newsService: NewsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.p = params['page'];
      this.category = params['category'];
      this.newsService.getNewsById(params['id']).subscribe(singleNews => {
        this.singleNews = singleNews[0];
        console.log(this.singleNews)
      });
    });
  }
}
