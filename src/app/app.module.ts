import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {GameListComponent} from './game-list/game-list.component';
import {ChartsComponent} from './charts/charts.component';
import {PiechartComponent} from './charts/piechart/piechart.component';
import {LinechartComponent} from './charts/linechart/linechart.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PlayerListComponent} from './player-list/player-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {AngularMaterialLoaderModule} from './angular-material-loader.module';
import { CreateGameModalComponent } from './create-game-modal/create-game-modal.component';
import {GameDetailComponent} from './game-list/game-detail/game-detail.component';
import {PlayerDetailComponent} from './player-list/player-detail/player-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameDetailComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    ChartsComponent,
    PiechartComponent,
    LinechartComponent,
    DashboardComponent,
    MainNavComponent,
    CreateGameModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialLoaderModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CreateGameModalComponent
  ],
  exports: [],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
