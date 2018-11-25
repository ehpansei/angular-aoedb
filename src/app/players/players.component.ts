import { Component, OnInit } from '@angular/core';
import {Player} from './player-list/player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  selectedPlayer: Player;

  constructor() { }

  ngOnInit() {
  }


  onSelectedPlayer(player: Player) {
    this.selectedPlayer = player;
  }
}
