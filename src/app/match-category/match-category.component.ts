import { Component, EventEmitter, Output } from '@angular/core';
import { MacthCategory } from '../models/match-category.model';
import {  MATCHES_CATEGORY_LIST } from '../constants';

@Component({
  selector: 'app-match-category',
  templateUrl: './match-category.component.html',
  styleUrls: ['./match-category.component.scss']
})
export class MatchCategoryComponent {
    matchesList : MacthCategory[] = MATCHES_CATEGORY_LIST;
    activeIndex : number = 0;
    @Output() categoryValue : EventEmitter<string> = new EventEmitter<string>();
    // We can emit category value from this component to filter macthes
    emitCategoryValue(value:string,index:number){
      this.activeIndex = index;
      this.categoryValue.emit(value);
    }

}
