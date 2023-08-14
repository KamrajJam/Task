import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inplay-popup',
  templateUrl: './inplay-popup.component.html',
  styleUrls: ['./inplay-popup.component.scss']
})
export class InplayPopupComponent {

@ViewChild('div_element', { static: true }) myDivElementRef!: ElementRef<HTMLDivElement>;
  closeInplay(){
      this.myDivElementRef.nativeElement.remove()
  }
}
