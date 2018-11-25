import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../game.model';
import {ActivatedRoute} from '@angular/router';
import {GamesApiService} from '../../../services/games-api.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input() game: Game;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private gamesApi: GamesApiService
  ) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    // fetch the game from the backend and store it locally
    this.gamesApi.get(this.id)
      .subscribe(
        response => {
          const game = this.gamesApi.nextCallback(response, 'Retrieving Game Details');
          this.game = game[0];

          this.game = new Game(
            this.game['id'], this.game['enemy_name'],
            this.game['enemy_elo'], 1000,
            this.game['result'], this.game['comment']);

          console.log(this.game);
        },
        error => this.gamesApi.errorCallback(error)
      );
  }

}
