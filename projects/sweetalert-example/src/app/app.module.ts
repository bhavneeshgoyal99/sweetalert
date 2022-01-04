import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {SweetalertModule} from 'sweetalert';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SweetalertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
