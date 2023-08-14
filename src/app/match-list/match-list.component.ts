import { Component, Input } from '@angular/core';
import { Match } from '../models/match-model';
import { MATCH_LIST } from '../constants';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent {
    match_list : Match[] = MATCH_LIST 
    @Input() matches : Match[]=[]
}
