import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PlayerListComponent} from './player-list/player-list.component';
import {GameDetailComponent} from './game-list/game-detail/game-detail.component';
import {PlayerDetailComponent} from './player-list/player-detail/player-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'player-list', component: PlayerListComponent},
  {path: 'games/detail/:id', component: GameDetailComponent},
  {path: 'players/detail/:id', component: PlayerDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
