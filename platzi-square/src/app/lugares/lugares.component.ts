import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',

})
export class LugaresComponent {
  title = 'platzi-square';



  lat = 0;
  lng = 0;

  lugares = null;

  constructor( private lugaresService: LugaresService ){

      this.lugares = this.lugaresService.getLugares();

      /*

        lugaresService.getLugares().subscribe( (lugares) => {

          this.lugares = lugares;
        });

      */

  }


}
