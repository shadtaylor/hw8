import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { WikiService } from '../wiki.service';
import { GiphyService } from '../giphy.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  formInput: FormGroup; wikiData: string[]; giphyData: string[];

  constructor(private fb: FormBuilder, private wikiService: WikiService, private giphyService: GiphyService, private historyService: HistoryService) {

      this.formInput = fb.group({

        'formInput': ['']
      
      });

  }

  onSubmit(value) {

    this.wikiService.doSearch(value.formInput).subscribe(wikiDataResults => this.wikiData = wikiDataResults);
    this.giphyService.doSearch(value.formInput).subscribe(giphyDataResults => this.giphyData = giphyDataResults);
    this.historyService.push(value.formInput); 

  }

  ngOnInit() {
  }

}
