import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Player} from './player.model';
import {PlayersApiService} from '../../players-api.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

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
    this.getPlayers();
  }

  applyFilter(filterValue: string) {
    console.log(this.dataSource.filter);

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelectRow(row: string) {
    const player = new Player(row['id'], row['name']);
    this.selectedPlayer.emit(player);
  }

  public getPlayers() {
    this.playerApi.index().subscribe(
      (data: Player[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

}
