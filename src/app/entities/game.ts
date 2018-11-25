import {Player} from './player';

export class Game {
  id: number;
  user_id: number;
  player: Player;
  enemy_elo: number;
  difficulty: number;
  result: string;
  comment?: string;
}
