import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'

})

export class WikiService {

  constructor(private http: HttpClient) { }

  doSearch(searchText) {
  
    const query = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=/${searchText}`;
    const response = this.http.get(query).pipe(map(response => response['query'].search.map(result => result['title'])));

    return response;
  
  }
}
