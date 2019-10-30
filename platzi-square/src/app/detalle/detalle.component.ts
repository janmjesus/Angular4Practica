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

  lugares = [
    {id:1,plan: 'pagado',cercania: 1, distancia: 1, nombre: "Nombre1", active: 0,description: 'Descripcion'},
    {id:2,plan: 'gratuito',cercania: 3, distancia: 15, nombre: "Nombre2", active: 1,description: 'Descripcion'},
    {id:3,plan: 'gratuito',cercania: 2, distancia: 5, nombre: "Nombre3", active: 0,description: 'Descripcion'},
    {id:4,plan: 'gratuito',cercania: 3, distancia: 45, nombre: "Nombre5", active: 1,description: 'Descripcion'},
  ];

  id = null;
  lugar = {};

  constructor( private route: ActivatedRoute ){

      //console.log("EPAAAAAAAAA");
     //console.log( this.route.snapshot.params['id'] );

      this.hola = "hola2";
      this.idRecibido = this.route.snapshot.params['id'];
      // idRecibido = this.route.snapshot.params['id'];

      console.log( this.route.snapshot.queryParams['action'] );

      this.id = this.route.snapshot.params['id'];

       this.lugar = this.buscarLugar();


     }

     buscarLugar(){

      return this.lugares.filter( (lugar) => { return lugar.id == this.id } )[0] || null;

     }

}
