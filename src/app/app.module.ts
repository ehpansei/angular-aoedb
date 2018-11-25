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
import {CreateGameModalComponent} from './create-game-modal/create-game-modal.component';


@NgModule({
  declarations: [
    AppComponent,
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
    ReactiveFormsModule,
  ],
  entryComponents: [
    CreateGameModalComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
