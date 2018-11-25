import {Injectable} from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {Player} from '../../players/player-list/player.model';
import {PlayersApiService} from '../../services/players-api.service';


@Injectable()
export class PlayerDetailsResolver implements Resolve<Player> {
  /**
   * Creates an instance of DetailProjectResolver.
   *
   * @param {PlayersApiService} playerService
   * @param {Router} router
   * @memberof DetailProjectResolver
   */
  constructor(
    private playerService: PlayersApiService,
    private router: Router
  ) {}

  /**
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<Player>}
   * @memberof DetailProjectResolver
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Player> {

    console.log('resolver');


    let playerId = +route.paramMap.get('projectId');

    // If is not the route itself, it's one of its children
    if (!playerId) {
      playerId = +route.parent.parent.paramMap.get('projectId');
      if (!playerId) {
        playerId = +route.parent.parent.parent.paramMap.get('projectId');
        if (!playerId) {
          playerId = +route.parent.parent.parent.parent.paramMap.get(
            'playerId'
          );
        }
      }
    }

    return this.playerService.get(playerId).pipe(
      take(1),
      map(player => {
        if (player) {
          return player;
        } else {
          // id not found
          this.router.navigate(['/projects']);
          return null;
        }
      })
    );
  }
}
