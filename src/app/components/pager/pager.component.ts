import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import * as _ from 'underscore';

import { PagerService } from '../../services/pager.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  // array of all items to be paged
  private allItems: any;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    public pagerService: PagerService,
    public http: HttpClient
  ) { }

  ngOnInit() {
    // get dummy data
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      // .map((response: Response) => response.json())
      .subscribe(data => {
        console.log(data);
        // set items to json response
        this.allItems = data;

        // initialize to page 1
        this.setPage(1);
      });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
