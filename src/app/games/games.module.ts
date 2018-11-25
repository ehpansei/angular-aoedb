import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games/games.component';
import {GameDetailComponent} from './game-list/game-detail/game-detail.component';
import {GameListComponent} from './game-list/game-list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    GamesComponent,
    // GameListComponent,
    GameDetailComponent
  ],
  imports: [
    // CommonModule,
    SharedModule,
    GamesRoutingModule
  ],
  exports: [
    GamesComponent,
    // GameListComponent,
    GameDetailComponent
  ]
})
export class GamesModule { }
