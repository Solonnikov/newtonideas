import { Component, Input, OnInit } from '@angular/core';
import { NewsInputService } from '../../dynamic-form-elements/news-input.service';

@Component({
  selector: 'app-add-news-dynamic',
  templateUrl: './add-news-dynamic.component.html',
  styleUrls: ['./add-news-dynamic.component.css']
})
export class AddNewsDynamicComponent {

  news: any[];

  constructor(service: NewsInputService) {
    this.news = service.getNewsInputs();
  }
}
