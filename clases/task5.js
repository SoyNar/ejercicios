export class Jugador {
  constructor(nombre, nivel, puntos) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.puntos = puntos;

  }

    informacion(){
     return `${this.nombre} ha alcanzado el Nivel ${this.nivel}!`;
  }
  subirNivel(){
    this.nivel  = this.nivel + 1;
  }

 


}