import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Modules
import {AngularMaterialLoaderModule} from '../angular-material/angular-material-loader.module';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard-routing.module';

// Components
import {DashboardComponent} from './dashboard.component';
import {GameListComponent} from '../game-list/game-list.component';
import {PiechartComponent} from '../charts/piechart/piechart.component';
import {LinechartComponent} from '../charts/linechart/linechart.component';
import {ChartsComponent} from '../charts/charts.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GameListComponent,
    ChartsComponent,
    PiechartComponent,
    LinechartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialLoaderModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    GameListComponent,
    PiechartComponent,
    ChartsComponent,
    LinechartComponent,
  ]
})
export class DashboardModule {
}
