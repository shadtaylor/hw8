import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class SearchHistory implements OnInit {

  constructor(private historyService: HistoryService) {

  }

  ngOnInit() {
  }

}
