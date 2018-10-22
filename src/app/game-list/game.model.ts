import {Player} from '../player-list/player.model';

export class Game {
  result: string;
  enemyElo: number;
  enemyName: string;
  comment: string;

  constructor(enemyPlayer: Player, enemyElo: number, myElo: number, result: string, comment: string) {
    this.result = result;
    this.enemyElo = enemyElo;
    this.enemyName = enemyPlayer.name;
    this.comment = comment;
  }
}
