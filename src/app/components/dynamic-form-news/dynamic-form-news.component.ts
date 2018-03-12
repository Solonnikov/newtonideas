import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NewsBase } from '../../dynamic-form-elements/news-base';

@Component({
  selector: 'app-news',
  templateUrl: './dynamic-form-news.component.html',
  styleUrls: ['./dynamic-form-news.component.css']
})
export class DynamicFormNewsComponent {
  @Input() singleNews: NewsBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.singleNews.key].valid;
  }

  get isTouched() {
    return this.form.controls[this.singleNews.key].touched;
  }
}
