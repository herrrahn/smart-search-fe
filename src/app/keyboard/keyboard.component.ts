import { Component, OnInit } from '@angular/core';
import {SearchService} from "../service/SearchService";
import {__await} from "tslib";


@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  suggestions: string;
  searchHistory = [];


  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  async search(term: string) {
    this.searchHistory.push(term);
    await this.searchService.search(term).then( it => {
      this.suggestions = it.join(", ")
    })

  }

  async startSearch() {
    this.suggestions = "";
    this.searchHistory = [];
    await this.searchService.startSearch();
  }

  async debug() {
    this.searchService.debug().then( it => {
      this.suggestions = it.join(", ")
    })
  }

  async reset() {
    await this.searchService.resetSearch();
  }
}
