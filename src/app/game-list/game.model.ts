export class Game {
  id: number;
  enemyName: string;
  enemyElo: number;
  myElo: number;
  result: string;
  comment: string;

  // constructor(enemyPlayer: Player, enemyElo: number, myElo: number, result: string, comment: string) {
  constructor(id: number,
              enemyPlayer: string,
              enemyElo: number,
              myElo: number,
              result: string,
              comment: string) {
    this.id = id;
    this.enemyName = enemyPlayer;
    this.enemyElo = enemyElo;
    this.myElo = myElo;
    this.result = result;
    this.comment = comment;
  }
}
