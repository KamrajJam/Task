import { Component } from '@angular/core';
import { Game } from '../models/game.model';
import { GAME_LIST } from '../constants';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  item_list : Game[] = GAME_LIST;
  activeIndex : number = 0
}
