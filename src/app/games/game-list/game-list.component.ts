import {Component, OnInit, ViewChild} from '@angular/core';
import {Game} from './game.model';
import {Player} from '../../players/player-list/player.model';
import {GamesApiService} from '../../services/games-api.service';
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

  /**
   * The data source of the table
   */
  dataSource: any;

  /**
   * Our games
   */
  games: Game[] = [];

  /**
   * True while the data is still loading
   */
  isLoadingResults = true;

  // sort
  @ViewChild(MatSort) sort: MatSort;

  // paginate
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private gamesApi: GamesApiService
  ) {
  }

  ngOnInit() {
    this.init();
  }

  // get data source for game list
  // configure data source to use sorts and a paginator
  init(): void {
    this.gamesApi.index()
      .subscribe(
        response => {

          this.dataSource = new MatTableDataSource(response['data'][0]);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;

          this.isLoadingResults = false;

        },
        error => this.gamesApi.errorCallback(error)
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
