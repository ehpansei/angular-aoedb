import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Player} from '../player-list/player.model';
import {PlayersApiService} from '../../players-api.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit, OnChanges {

  selectedPlayer: any;

  @Input() player: Player;

  constructor(
    private playersApi: PlayersApiService
  ) {
    this.player = new Player(0, '');
    console.log('constrc');
  }

  ngOnInit() {
    console.log(this.player);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
    console.log(this.player);
    if (this.player) {
      this.getPlayerDetails(this.player.id);
    }

  }

  getPlayerDetails(id: number): any {
    this.playersApi.get(id)
      .subscribe(
        response => {
          const selectedPlayer = this.playersApi.nextCallback(response, 'Fetching Player');

          this.selectedPlayer = selectedPlayer['data'];
        },
        error => {
          this.playersApi.errorCallback(error);
        }
      );
  }

}
