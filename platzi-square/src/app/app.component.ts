import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzi-square';

  lugares = [
    {
      nombre: "Nombre1",
      active: 0

    },
    {
      nombre: "Nombre2",
      active: 1

    },
    {
      nombre: "Nombre3",
      active: 0
    }
  ];

  lat = 0;
  lng = 0;

}
