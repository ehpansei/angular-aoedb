import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Player} from './player.model';
import {PlayersApiService} from '../../players-api.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  dataSource: any;

  // todo add nr of games agaisnt player column
  displayedColumns = ['name', 'games_count'];

  isLoadingResults = false;

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
    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          // make request (returns observable)
          return this.playerApi.index();
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // this.isRateLimitReached = true;
          return of([]);
        })
      ).subscribe(
      (data: Player[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }
}
