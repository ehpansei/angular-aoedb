import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Components
import {PlayersComponent} from './players.component';
import {PlayerDetailComponent} from './player-detail/player-detail.component';

// Resolvers
import {PlayerDetailsResolver} from '../resolvers';

const routes: Routes = [
  {
    path: '',
    component: PlayersComponent,
    children: [
      {
        path: 'player-list',
        component: PlayersComponent
      },
      {
        path: 'detail/:id',
        component: PlayerDetailComponent,
        resolve: {PlayerDetailsResolver}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {
}
