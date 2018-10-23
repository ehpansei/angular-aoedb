import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Player} from './player.model';
import {PlayersApiService} from '../../players-api.service';
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

  @Output() selectedPlayer = new EventEmitter<Player>();

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

  onSelectRow(row: string) {
    const player = new Player(row['id'], row['name']);
    this.selectedPlayer.emit(player);
  }


  public getPlayers() {
    this.playerApi.index().subscribe(
      (data: Player[]) => {
        this.players = data;
        this.dataSource = this.players;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

}
