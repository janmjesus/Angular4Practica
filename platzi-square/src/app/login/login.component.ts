import { Component } from '@angular/core';
import {AutorizacionService} from "../services/autorizacion.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent {

  a = 5;

  constructor( private autorizacionService: AutorizacionService ){

      this.autorizacionService.login('email','password');

  }

}
