import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {GameDetailComponent} from './game-list/game-detail/game-detail.component';
import {PlayerDetailComponent} from './players/player-detail/player-detail.component';
import {PlayersComponent} from './players/players.component';
import {PlayerDetailsResolver} from './resolvers';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'games/detail/:id', component: GameDetailComponent},
  {path: 'player-list', component: PlayersComponent},
  {
    path: 'players/detail/:id',
    component: PlayerDetailComponent,
    resolve: {PlayerDetailsResolver}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PlayerDetailsResolver]
})
export class AppRoutingModule {
}
