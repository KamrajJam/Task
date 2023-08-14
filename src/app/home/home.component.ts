import { Component, OnInit } from '@angular/core';
import { MATCH_LIST } from '../constants';
import { Match } from '../models/match-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  match_list : Match[] = MATCH_LIST;
  filteredMatches : Match[] = []
  constructor() {}

  ngOnInit(): void {
    this.filteredMatches = MATCH_LIST
  }

  handleInputValue(value:string){
    console.log("input value",value)
  }

  filterMaches(category:string){
    console.log("category value",category);
  this.filteredMatches = this.match_list.filter((item)=> item.category === category)
  }

}