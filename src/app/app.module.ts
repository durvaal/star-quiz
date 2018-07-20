import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppRoutingModule } from './app.routing.module';
import { GameComponent } from './components/game/game.component';
import { BoxPersonageComponent } from './components/game/shared/box-personage/box-personage.component';
import { ModalGenericComponent } from './components/game/shared/modal-generic/modal-generic.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GameComponent,
    BoxPersonageComponent,
    ModalGenericComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
