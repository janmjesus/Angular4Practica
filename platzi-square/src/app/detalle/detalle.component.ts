import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LugaresService} from "../services/lugares.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',

})
export class DetalleComponent {

    hola = "hola";
  //let idRecibido = "";
    idRecibido = "";
    lugares = null;
  id = null;
  lugar = {};

  constructor( private route: ActivatedRoute,private lugaresService: LugaresService ){

      //console.log("EPAAAAAAAAA");
     //console.log( this.route.snapshot.params['id'] );

      this.hola = "hola2";
      this.idRecibido = this.route.snapshot.params['id'];
      // idRecibido = this.route.snapshot.params['id'];

      console.log( this.route.snapshot.queryParams['action'] );

      this.id = this.route.snapshot.params['id'];

        this.lugares = this.lugaresService.getLugares();

       this.lugar = this.lugaresService.buscarLugar( this.idRecibido );


     }



}
