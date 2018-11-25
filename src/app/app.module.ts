import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Modules
import {AppRoutingModule} from './app-routing.module';
import {AngularMaterialLoaderModule} from './angular-material/angular-material-loader.module';
import {FlexLayoutModule} from '@angular/flex-layout';

// Custom Components
import {AppComponent} from './app.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {CreateGameModalComponent} from './main-nav/create-game-modal/create-game-modal.component';
import { BottomSheetComponent } from './shared/common/bottom-sheet/bottom-sheet.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CreateGameModalComponent,
    BottomSheetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialLoaderModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    CreateGameModalComponent,
    BottomSheetComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
