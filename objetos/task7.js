// ¡Escribe tu código debajo de esta línea!

function Auto(make, model, year, color, number, ofDoors, mileage, engine){
  this.make = make;
  this.model = model;
  this.year = year;
  this.number = number;
  this.color = color;
  this.ofDoors = ofDoors;
  this.mileage = mileage;
  this.engine = engine;
  this.info = function(){
    return `Información auto: marca ${make}, modelo ${model}, año ${year}, color ${color}, puertas ${ofDoors}, kilometraje ${mileage}, motor ${engine}`;  }
}

const [make, model, year, color, number, ofDoors, mileage, engine] = process.argv.slice(3);
const newCar = new Auto(make, model, year, color, number, ofDoors, mileage, engine);

const newCar2  = new Auto('Toyota', 'Corolla', 2022, 'Rojo', 'XYZ123', 4, 15000, 'combustion')
// console.log(newCar);
console.log(newCar2.info());
// ¡Escribe tu código encima de esta línea!
