import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatBottomSheet} from '@angular/material';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

// Services
import {GamesApiService} from '../../services/games-api.service';
import {PlayersApiService} from '../../services/players-api.service';

// Entities
import {Player} from '../../players/player-list/player.model';

// Custom Components
import {BottomSheetComponent} from '../../shared/common/bottom-sheet/bottom-sheet.component';


export interface Player {
  name: string;
}

@Component({
  selector: 'app-create-game-modal',
  templateUrl: './create-game-modal.component.html',
  styleUrls: ['./create-game-modal.component.css']
})
export class CreateGameModalComponent implements OnInit {

  options: string[] = [];

  gameFormGroup: FormGroup;

  playersOptionsControl = new FormControl();

  filteredOptions: Observable<string[]>;

  // EnemyName control
  get controlEnemyName(): FormControl {
    return this.gameFormGroup.get('enemyName') as FormControl;
  }

  // EnemyElo control
  get controlEnemyElo(): FormControl {
    return this.gameFormGroup.get('enemyElo') as FormControl;
  }

  // MyElo control
  get controlMyElo(): FormControl {
    return this.gameFormGroup.get('myElo') as FormControl;
  }

  // Outcome control
  get controlOutcome(): FormControl {
    return this.gameFormGroup.get('outcome') as FormControl;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateGameModalComponent>,
    private gamesApi: GamesApiService,
    private playersApi: PlayersApiService,
    private fb: FormBuilder,
    private messageSheet: MatBottomSheet
  ) {
  }

  ngOnInit() {
    this.createForm();


  }

  createForm() {
    this.gameFormGroup = this.fb.group({
      enemyName: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
          // todo implement noSpacesValidator
        ]
      ],
      enemyElo: [
        ''
      ],
      myElo: [
        ''
      ],
      outcome: [
        ''
      ],
    });


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
          // take just the names to populate the autocomplete helper
          this.options = response.map(o => o['name']);
        },
        error => this.playersApi.errorCallback(error)
      );
  }

  store() {
    const form = this.gameFormGroup.value;

    const data = {
      'enemyName': this.playersOptionsControl.value,
      'enemyElo': form.enemyElo,
      'myElo': form.myElo,
      'outcome': form.outcome
    };

    this.gamesApi.store(data)
      .subscribe(
        response => {
          const requestResponse = this.gamesApi.nextCallback(response, 'New Game Stored');

          this.messageSheet.open(BottomSheetComponent);

          this.dialogRef.close();
        },
        error => {
          this.gamesApi.errorCallback(error);
        }
      );
  }

}
