import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {GameListComponent} from '../game-list/game-list.component';
import {PiechartComponent} from '../charts/piechart/piechart.component';
import {LinechartComponent} from '../charts/linechart/linechart.component';
import {ChartsComponent} from '../charts/charts.component';
import {AngularMaterialLoaderModule} from '../angular-material/angular-material-loader.module';
import {RouterModule} from '@angular/router';

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
