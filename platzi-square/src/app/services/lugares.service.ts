import {Injectable} from "@angular/core";

//import 'rxjs/add/operator/map';
//import { Http, Headers } from "@angular/http";

@Injectable()

export class LugaresService{

  // API_ENDPOINT = https://platzisquare.firebaseio.com; //EJEMPLO DE LA URL DE LA API EN ESTE CASO

  lugares = [
    {id:1,plan: 'pagado',cercania: 1, distancia: 1, nombre: "Nombre1", active: 0,description: "Descripcion1"},
    {id:2,plan: 'gratuito',cercania: 3, distancia: 15, nombre: "Nombre2", active: 1,description: "Descripcion2"},
    {id:3,plan: 'gratuito',cercania: 2, distancia: 5, nombre: "Nombre3", active: 0,description: "Descripcion3"},
    {id:4,plan: 'gratuito',cercania: 3, distancia: 15, nombre: "Nombre5", active: 1,description: "Descripcion4"},
  ];

  /*constructor( private afDB:AngularFireDatabase, private http:Http ){



  }*/

  public getLugares(){

    // return this.afDB.list('lugares/');
    // return this.http.get(this.API_ENDPOINT+'/.json')
    //        .map( ( resultado ) => {
    //
                  //const data = resultado.json().lugares;
                  //return data;
    //
    //        });


    return this.lugares;

    /*

      return this.afDB.list('lugares/')

    */

  }

  public buscarLugar(id){

    return this.lugares.filter( (lugar) => { return lugar.id == id } )[0] || null;

  }

  public guardarLugar(lugar){



    //this.afDB.database.ref('lugares/' + lugar.id).set(lugar);

    /*

    const headers = new Headers({ "Content-Type": "application/json" });

    return this.http.post(this.API_ENDPOINT+'lugares.json',lugar,{ headers:headers } );


     */
  }

  public editarLugar(lugar){



    //this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  /*

    public obtenerGeoData( direccion ){

      return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);

    }



  */

  public getLugar(id){

    //this.afDB.object('lugares/' + id);

  }

}
