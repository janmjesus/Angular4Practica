import {Injectable} from "@angular/core";

@Injectable()

export class LugaresService{

  lugares = [
    {id:1,plan: 'pagado',cercania: 1, distancia: 1, nombre: "Nombre1", active: 0,description: "Descripcion1"},
    {id:2,plan: 'gratuito',cercania: 3, distancia: 15, nombre: "Nombre2", active: 1,description: "Descripcion2"},
    {id:3,plan: 'gratuito',cercania: 2, distancia: 5, nombre: "Nombre3", active: 0,description: "Descripcion3"},
    {id:4,plan: 'gratuito',cercania: 3, distancia: 15, nombre: "Nombre5", active: 1,description: "Descripcion4"},
  ];

  /*constructor( private afDB:AngularFireDatabase ){



  }*/

  public getLugares(){

    return this.lugares;

    /*

      return this.afDB.list('lugares/')

    */

  }

  public buscarLugar(id){

    return this.lugares.filter( (lugar) => { return lugar.id == id } )[0] || null;

  }

  public guardarLugar(lugar){

     // console.log("Desde el servicio se ve el objeto" + lugar.nombre);

    //this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }


}
