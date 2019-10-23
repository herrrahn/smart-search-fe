import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyComponent } from './key/key.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import {SearchService} from "./service/SearchService";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    KeyComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SearchService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
