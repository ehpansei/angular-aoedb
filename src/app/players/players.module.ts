import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialLoaderModule} from '../angular-material/angular-material-loader.module';
import {RouterModule} from '@angular/router';
import {PlayerDetailComponent} from './player-detail/player-detail.component';
import {PlayerListComponent} from './player-list/player-list.component';
import {PlayersComponent} from './players.component';

@NgModule({
  declarations: [
    PlayersComponent,
    PlayerDetailComponent,
    PlayerListComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialLoaderModule,
    RouterModule
  ],
  exports: [
    PlayersComponent,
    PlayerDetailComponent,
    PlayerListComponent
  ]
})
export class PlayersModule {
}
