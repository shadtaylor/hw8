import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HistoryService {
  
  searches: any[];

  constructor() {

    this.searches = [];
  
  }

  push(searchText) {

    this.searches.push({searchText: searchText, timeStamp: new Date()});
  
  }

  get() {

    return this.searches;
  
  }

}
