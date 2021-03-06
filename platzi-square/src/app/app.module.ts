import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import {ResaltarDirective} from "./directives/resaltar.directive";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { Routes,RouterModule } from "@angular/router";
import {DetalleComponent} from "./detalle/detalle.component";
import {LugaresComponent} from "./lugares/lugares.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {LugaresService} from "./services/lugares.service";
import {CrearComponent} from "./crear/crear.component";
import {LinkifystrPipe} from "./pipes/linkifystr.pipe";
import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";
import {AutorizacionService} from "./services/autorizacion.service";

const appRoutes:Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear/:id', component: CrearComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},



];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9dI5jI2QF6ZiW2mqcaLfCrEWqEE93Rug'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    //HttpModule

  ],
  providers: [LugaresService, AutorizacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
