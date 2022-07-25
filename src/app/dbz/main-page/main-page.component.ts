import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes:Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    },
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0, 
  }

  agregar(){
    if ( this.nuevo.nombre.trim().length === 0 ){ //no hacer nada si esta vacio
      return;
    }

    console.log(this.nuevo)

    // agregar al array
    this.personajes.push( this.nuevo );

    // limpiar los campos
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
