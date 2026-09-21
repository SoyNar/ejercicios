// Consulta la Tarea 5 en tus Instrucciones para completar esta tarea
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });
import { FizzBuzz } from './fizzbuzz.js';


const n  = parseInt(prompt("Cuantas lineas quiere ingresar: "));
 const fb = new FizzBuzz();
fb.generate(n);