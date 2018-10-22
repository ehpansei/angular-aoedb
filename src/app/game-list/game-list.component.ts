import {Component, OnInit, ViewChild} from '@angular/core';
import {Game} from './game.model';
import {Player} from '../player-list/player.model';
import {GamesApiService} from '../games-api.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Game {
  id: number;
  enemyElo: number;
  difficulty: number;
  enemyName: string;
  result: number;
  comment: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  displayedColumns: string[] = ['enemyName', 'enemyElo', 'myElo', 'result'];
  games: any;
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  dataSource: any;

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
          this.games = this.gamesApi.nextCallback(response, 'Retrieved Games');

          this.dataSource = new MatTableDataSource(this.games);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;

          console.log(this.dataSource);
        },
        error => this.gamesApi.errorCallback(error)
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
