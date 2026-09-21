// Consulta la Tarea 4 en tus Instrucciones para completar esta tarea

for (let i = 1; i <= 105; i++) {
  // console.log("¡Esta es la Tarea Cuatro!");
let output = "";

if( i %3 ===0){
  output += "Fizz";
} 
if (i %5 ===0){
  output += "Buzz";
}  if (i %7 ===0){
  output += "Woof";
}
console.log(output || i);
}