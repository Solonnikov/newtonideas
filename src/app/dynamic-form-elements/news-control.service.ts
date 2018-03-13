import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NewsBase } from './news-base';

@Injectable()
export class NewsControlService {
  constructor() { }

  toFormGroup(news: NewsBase<any>[]) {
    let group: any = {};

    news.forEach(singleNews => {
      group[singleNews.key] = singleNews.required ? new FormControl(singleNews.value || '', Validators.required)
        : new FormControl(singleNews.value || '');
    });
    return new FormGroup(group);
  }
}
