// ¡Escribe tu código debajo de esta línea!
 function Journey(start,end) {
    this.inicio = start;
    this.fin = end;
 }



// ¡Escribe tu código encima de esta línea!
const desde = process.argv[3];
const hasta = process.argv[4];
const viaje = new Journey(desde, hasta)

console.log("Reservando un taxi desde " + viaje.inicio + " hasta " + viaje.fin + ".")