import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',

})
export class LugaresComponent {
  title = 'platzi-square';

  lugares = [
    {id:1,plan: 'pagado',cercania: 1, distancia: 1, nombre: "Nombre1", active: 0},
    {id:2,plan: 'gratuito',cercania: 3, distancia: 15, nombre: "Nombre2", active: 1},
    {id:3,plan: 'gratuito',cercania: 2, distancia: 5, nombre: "Nombre3", active: 0},
    {id:4,plan: 'gratuito',cercania: 3, distancia: 15, nombre: "Nombre5", active: 1},
  ];

  lat = 0;
  lng = 0;

  constructor(){


  }


}
