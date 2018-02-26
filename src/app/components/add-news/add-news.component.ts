import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../../models/News';
import { UUID } from 'angular2-uuid';
import { NewsService } from '../../services/news.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  public loading = false;
  news: News = {
    id: '',
    title: '',
    description: '',
    category: ''
  }
  constructor(
    public newsService: NewsService,
    public flashMessagesService: FlashMessagesService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit() {
    this.loading = true;
    const newNews = {
      id: UUID.UUID(),
      title: this.news.title,
      description: this.news.description,
      category: this.news.category
    }
    this.newsService.addNews(newNews).subscribe(res => {
      this.loading = false;
      this.flashMessagesService.show('News added', { classes: ['alert', 'alert-success'], timeout: 4000 });
      this.router.navigate(['/news']);
    },
      err => {
        this.flashMessagesService.show('Smth went wrong', { classes: ['alert', 'alert-success'], timeout: 4000 })
      });

  }
}
