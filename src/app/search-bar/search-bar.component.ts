import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchText : EventEmitter<string> = new EventEmitter<string>();
  // We can integrate api with this seatch text
  emitInputValue(value:string){
    this.searchText.emit(value)
  }

}
