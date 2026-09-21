// Consulta la Tarea 3 en tus Instrucciones para completar esta tarea


for (let i = 1; i <= 105; i++) {
  // console.log("¡Esta es la Tarea Tres!");
  let output = "";
   if(i % 3 === 0){
    output += "Fizz";
  }
  if(i % 5 === 0){
    output += "Buzz";
  } 
  console.log(output || i);
};