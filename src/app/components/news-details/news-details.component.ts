import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/News';
import {Location} from '@angular/common';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  singleNews: News;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public newsService: NewsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.newsService.getNewsById(params['id']).subscribe(singleNews => {
        this.singleNews = singleNews[0];
        console.log(this.singleNews)
      });
    });
  }

  goBack() {
    this.location.back();
  }
}
