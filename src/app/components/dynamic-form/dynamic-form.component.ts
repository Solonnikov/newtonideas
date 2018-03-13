import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { News } from '../../models/News';
import { UUID } from 'angular2-uuid';
import { NewsService } from '../../services/news.service';
import { FlashMessagesService } from 'ngx-flash-messages';

import { NewsBase } from '../../dynamic-form-elements/news-base';
import { NewsControlService } from '../../dynamic-form-elements/news-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  public loading = false;

  @Input() news: NewsBase<any>[] = [];
  form: FormGroup;

  constructor(
    private newsControlService: NewsControlService,
    public newsService: NewsService,
    public flashMessagesService: FlashMessagesService,
    public router: Router
  ) { }

  ngOnInit() {
    this.form = this.newsControlService.toFormGroup(this.news);
  }

  onSubmit() {
    this.loading = true;
    const newNews = this.form.value;
    newNews.id = UUID.UUID();
    console.log(newNews);

    this.newsService.addNews(newNews).subscribe(() => {
      this.flashMessagesService.show('News added', { classes: ['alert', 'alert-success'], timeout: 4000 });
      this.router.navigate(['/news'], { queryParams: { category: newNews.category } });
      this.loading = false;
    },
      err => {
        this.flashMessagesService.show('Smth went wrong', { classes: ['alert', 'alert-danger'], timeout: 4000 });
        this.loading = false;
      });

  }
}
