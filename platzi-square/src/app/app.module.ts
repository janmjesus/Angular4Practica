import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9dI5jI2QF6ZiW2mqcaLfCrEWqEE93Rug'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
