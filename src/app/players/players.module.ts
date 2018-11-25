import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// Routing
import {PlayersRoutingModule} from './players-routing.module';

// Modules
import {AngularMaterialLoaderModule} from '../angular-material/angular-material-loader.module';

// Components
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
    PlayersRoutingModule,
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
