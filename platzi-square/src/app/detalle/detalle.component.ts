import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',

})
export class DetalleComponent {

    hola = "hola";
  //let idRecibido = "";
    idRecibido = "";

    constructor( private route: ActivatedRoute ){

      //console.log("EPAAAAAAAAA");
     //console.log( this.route.snapshot.params['id'] );

      this.hola = "hola2";
      this.idRecibido = this.route.snapshot.params['id'];
      // idRecibido = this.route.snapshot.params['id'];



     }

}
