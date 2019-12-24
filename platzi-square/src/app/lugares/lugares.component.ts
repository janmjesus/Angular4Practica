import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [

    trigger('contenedorAnimable', [

      state('inicial', style({

        opacity: 0,
        backgroundColor: 'green',
        transform: 'rotate3d(0,0,0,0deg)'

      })),
      state('final', style({

        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5,10,20,30deg)'

      })),
      transition('inicial => final',animate(1000)),
      transition('final => inicial',animate(500)),


      ]),



  ]

})
export class LugaresComponent {
  title = 'platzi-square';
  state = 'inicial';



  lat = 0;
  lng = 0;

  lugares = null;


  animar(){


    this.state = ( this.state === 'final' ) ? 'inicial' : 'final'

  }

  animacionInicia(e){

    console.log('Iniciado');
    console.log(e);

  }

  animacionTermina(e){

      console.log('Terminado!');
      console.log(e);

  }

  constructor( private lugaresService: LugaresService ){

      this.lugares = this.lugaresService.getLugares();

      /*

        lugaresService.getLugares().subscribe( (lugares) => {

          this.lugares = lugares.json();
          var me = this;
          this.lugares = Object.keys(me.lugares).map(function(key){ return me.lugares[key]; });
        }, error => {

          console.log(error);
          alert('Tenemos algo de dificultades, disculpe las molestias. Error: ' + error.statusText)

        });

      */

  }


}
