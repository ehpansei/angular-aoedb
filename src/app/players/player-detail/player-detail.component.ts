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

  @Input() player = new Player(1, '');

  constructor(
    private playersApi: PlayersApiService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getPlayerDetails(this.player.id);
  }

  getPlayerDetails(id_number): any {
    this.playersApi.get(this.player.id)
      .subscribe(
        response => {
          this.selectedPlayer = this.playersApi.nextCallback(response, 'Fetching Player');

          console.log(this.selectedPlayer);
        },
        error => {
          this.playersApi.errorCallback(error);
        }
      );
  }

}
