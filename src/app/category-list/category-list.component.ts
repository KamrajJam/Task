import { Component } from '@angular/core';
import { Category } from '../models/category.model';
import { CATEGORY_MATCHES_LIST } from '../constants';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent {
  category_match_list : Category[] = CATEGORY_MATCHES_LIST
}