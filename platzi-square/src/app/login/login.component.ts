import { Component } from '@angular/core';
import {AutorizacionService} from "../services/autorizacion.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent {

  //a = 5;

  loginParams:any = {};

  constructor( private autorizacionService: AutorizacionService ){

      //this.autorizacionService.login('email','password');

  }

  login(){
    /*


    this.autorizacionService.login(this.loginParams.email,this.loginParams.password);


    */
  }

}
