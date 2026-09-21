// Consulta la Tarea 5 en tus Instrucciones para completar esta tarea

const prompt = require("prompt-sync")({ sigint: true });
const n = parseInt(prompt("Ingrese numero de lineas para el programa: "));

for (let i = 0; i <= n; i++) {
  // console.log("¡Esta es la Tarea Cinco!");
  let output = "";

if( i %3 ===0){
  output += "Fizz";
} 
if (i %5 ===0){
  output += "Buzz";
}  if (i %7 ===0){
  output += "woof";
}
console.log(output || i);
};