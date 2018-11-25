import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

// Components
import {GameListComponent} from '../game-list/game-list.component';
import {PlayerListComponent} from '../players/player-list/player-list.component';

// Angular Material
import {AngularMaterialLoaderModule} from '../angular-material/angular-material-loader.module';

// FlexLayout
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialLoaderModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
    GameListComponent,
    PlayerListComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    AngularMaterialLoaderModule,
    FlexLayoutModule,
    RouterModule,

    GameListComponent,
    PlayerListComponent,

  ]
})
export class SharedModule {
}
