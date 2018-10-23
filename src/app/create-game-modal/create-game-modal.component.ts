import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {GamesApiService} from '../games-api.service';

import {FormControl, Validators} from '@angular/forms';
import {PlayersApiService} from '../players-api.service';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Player} from '../players/player-list/player.model';


export interface Player {
  name: string;
}

@Component({
  selector: 'app-create-game-modal',
  templateUrl: './create-game-modal.component.html',
  styleUrls: ['./create-game-modal.component.css']
})
export class CreateGameModalComponent implements OnInit {

  enemyName: string;
  enemyElo: number;
  myElo: number;
  outcome = 1;

  options: string[] = [];

  enemyNameFormControl = new FormControl('', [
    Validators.required
  ]);

  enemyEloFormControl = new FormControl('', [
    Validators.required
  ]);

  myEloFormControl = new FormControl('', [
    Validators.required
  ]);

  playersOptionsControl = new FormControl();

  filteredOptions: Observable<string[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateGameModalComponent>,
    private gamesApi: GamesApiService,
    private playersApi: PlayersApiService
  ) {
  }

  ngOnInit() {
    this.getPlayersNames();

    this.filteredOptions = this.playersOptionsControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  displayFn(player?: Player): string | undefined {
    return player ? player.name : undefined;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getPlayersNames() {
    this.playersApi.index()
      .subscribe(
        response => {
          const data = this.playersApi.nextCallback(response, 'Retrieved Players');
          this.options = data.map(o => o['name']);
        },
        error => this.playersApi.errorCallback(error)
      );
  }

  store() {
    const data = {
      'enemyName': this.enemyName,
      'enemyElo': this.enemyElo,
      'myElo': this.myElo,
      'outcome': this.outcome
    };

    this.gamesApi.store(data)
      .subscribe(
        response => {
          const requestResponse = this.gamesApi.nextCallback(response, 'New Game Stored');

          // console.log('Request Response');
          console.log(requestResponse);

          this.dialogRef.close();
        },
        error => {
          this.gamesApi.errorCallback(error);
        }
      );
  }

}
