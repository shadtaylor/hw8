import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { giphyAPIKey } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GiphyService {
  
  URL: string;

  constructor(private http: HttpClient) {

    this.URL = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&limit=1&offset=0&rating=G&lang=en`

  }

  doSearch(searchText) {

    const query = `${this.URL}&q=${searchText}`;
    const response = this.http.get(query).pipe(map(response => response['data'].map(result => result['images']['original']['url'])));

    return response;

  }

}
