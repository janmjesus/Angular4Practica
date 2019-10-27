import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzi-square';

  lugares = [
    {plan: 'pagado',cercania: 1, distancia: 1, nombre: "Nombre1", active: 0},
    {plan: 'gratuito',cercania: 3, distancia: 15, nombre: "Nombre2", active: 1},
    {plan: 'gratuito',cercania: 2, distancia: 5, nombre: "Nombre3", active: 0},
    {plan: 'gratuito',cercania: 3, distancia: 15, nombre: "Nombre5", active: 1},
  ];

  lat = 0;
  lng = 0;

}
