import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// Routing
import {PlayersRoutingModule} from './players-routing.module';

// Modules
import {AngularMaterialLoaderModule} from '../angular-material/angular-material-loader.module';
import {FlexLayoutModule} from '@angular/flex-layout';

// Components
import {PlayerDetailComponent} from './player-detail/player-detail.component';
import {PlayerListComponent} from './player-list/player-list.component';
import {PlayersComponent} from './players.component';
import {PlayerDetailsResolver} from '../resolvers';

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
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    PlayersComponent,
    PlayerDetailComponent,
    PlayerListComponent
  ],
  providers: [PlayerDetailsResolver]

})
export class PlayersModule {
}
