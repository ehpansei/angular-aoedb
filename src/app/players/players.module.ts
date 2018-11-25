import {NgModule} from '@angular/core';

// Routing
import {PlayersRoutingModule} from './players-routing.module';

// Components
import {PlayerDetailComponent} from './player-detail/player-detail.component';
import {PlayersComponent} from './players.component';
import {PlayerDetailsResolver} from '../resolvers';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    PlayersComponent,
    PlayerDetailComponent,
  ],
  imports: [
    SharedModule,
    PlayersRoutingModule,
  ],
  exports: [
    PlayersComponent,
    PlayerDetailComponent,
  ],
  providers: [
    PlayerDetailsResolver
  ]

})
export class PlayersModule {
}
