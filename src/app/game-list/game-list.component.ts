import {Component, OnInit, ViewChild} from '@angular/core';
import {Game} from './game.model';
import {Player} from '../players/player-list/player.model';
import {GamesApiService} from '../games-api.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  displayedColumns: string[] = ['enemyName', 'enemyElo', 'myElo', 'result'];

  dataSource: any;

  isLoadingResults = false;

  // sort
  @ViewChild(MatSort) sort: MatSort;

  // paginate
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private gamesApi: GamesApiService
  ) {
  }

  ngOnInit() {
    this.init2();
  }

  // get data source for game list
  // configure data source to use sorts and a paginator
  init(): void {
    this.gamesApi.index()
      .subscribe(
        response => {
          const games = this.gamesApi.nextCallback(response, 'Retrieved Games');

          this.dataSource = new MatTableDataSource(games);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;

          console.log(this.dataSource.sort);
        },
        error => this.gamesApi.errorCallback(error)
      );
  }

  init2(): void {
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          // make request (returns observable)
          return this.gamesApi.index();
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
      )
      .subscribe(
        response => {
          const games = this.gamesApi.nextCallback(response, 'Retrieved Games');

          this.dataSource = new MatTableDataSource(games[0]);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error => this.gamesApi.errorCallback(error)
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
