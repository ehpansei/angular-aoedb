import {Component, OnInit, ViewChild} from '@angular/core';
import {Player} from './player.model';
import {PlayersApiService} from '../players-api.service';
import {MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[];

  dataSource: any;

  displayedColumns = ['name'];

  // sort
  @ViewChild(MatSort) sort: MatSort;

  // paginate
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private playerApi: PlayersApiService
  ) {
  }

  ngOnInit() {
    this.players = [];

    this.getPlayers();
  }

  applyFilter(param: string) {

  }

  onClickButton() {
    console.log(this.players);
  }


  public getPlayers() {
    this.playerApi.index().subscribe(
      (data: Player[]) => {
        // console.log('next');

        console.log(data);
        this.players = data;
        this.dataSource = this.players;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    );
  }

}
