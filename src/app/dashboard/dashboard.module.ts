import {NgModule} from '@angular/core';

// Modules
import {DashboardRoutingModule} from './dashboard-routing.module';

// Components
import {DashboardComponent} from './dashboard.component';
import {PiechartComponent} from '../charts/piechart/piechart.component';
import {LinechartComponent} from '../charts/linechart/linechart.component';
import {ChartsComponent} from '../charts/charts.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ChartsComponent,
    PiechartComponent,
    LinechartComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
  ],
  exports: [
    DashboardComponent,
    PiechartComponent,
    ChartsComponent,
    LinechartComponent,
  ]
})
export class DashboardModule {
}
