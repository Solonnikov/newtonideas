import { Injectable } from '@angular/core';

import { DropdownNews } from './news-dropdown';
import { NewsBase } from './news-base';
import { TextboxNews } from './news-textbox';

@Injectable()
export class NewsInputService {
  getNewsInputs() {

    let news: NewsBase<any>[] = [

      new DropdownNews({
        key: 'category',
        label: 'Category',
        options: [
          { key: 'life', value: 'Life' },
          { key: 'food', value: 'Food' },
          { key: 'health', value: 'Health' }
        ],
        required: true,
        value: '',
        order: 3
      }),

      new TextboxNews({
        key: 'title',
        label: 'Title',
        type: 'text',
        value: '',
        required: true,
        placeholder: 'News Title',
        order: 1
      }),

      new TextboxNews({
        key: 'description',
        label: 'Description',
        type: 'textarea',
        value: '',
        required: true,
        placeholder: 'News Description',
        order: 2
      }),
    ];

    return news.sort((a, b) => a.order - b.order);
  }
}


