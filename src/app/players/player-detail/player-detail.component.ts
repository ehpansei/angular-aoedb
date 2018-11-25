import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Player} from '../player-list/player.model';
import {PlayersApiService} from '../../services/players-api.service';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit, OnChanges {

  selectedPlayer: any;
  isLoadingResults = false;
  @Input() player: Player;

  constructor(
    private playersApi: PlayersApiService,
    private route: ActivatedRoute
  ) {
    this.player = new Player(1, '');
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.player) {
      this.getPlayerDetails(this.player.id);
    }

    // console.log('testing resolver');
    // console.log(this.route.snapshot);
  }

  getPlayerDetails(id_number): any {

    // merge(this.sort.sortChange, this.paginator.page)
    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          // make request (returns observable)
          // return this.gamesApi.index();
          return this.playersApi.get(id_number);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          // this.isRateLimitReached = false;
          // this.resultsLength = data.total_count;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // this.isRateLimitReached = true;
          return of([]);
        })
      ).subscribe(
      response => {
        this.selectedPlayer = this.playersApi.nextCallback(response, 'Fetching Player');

        // console.log(this.selectedPlayer);
      },
      error => {
        this.playersApi.errorCallback(error);
      }
    );


    // this.playersApi.get(this.player.id)
    //   .subscribe(
    //     response => {
    //       this.selectedPlayer = this.playersApi.nextCallback(response, 'Fetching Player');
    //
    //       console.log(this.selectedPlayer);
    //     },
    //     error => {
    //       this.playersApi.errorCallback(error);
    //     }
    //   );
  }

}
