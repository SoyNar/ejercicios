function principal() {
    console.log("¡Hola, estudiantes!");
    console.log( "suma:" +sumarMultiplesNumeros([1, "2", 3, 4])); 
    console.log( "multiplicación:" +multiplicarMultiplesNumeros([1, 2, 3, 4]));
    console.log( "esPar:" +esPar(4));
    console.log( "esEntero:" +esEntero(4.2));   
}

function validateTypeOfArguments(func, args) {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            console.log(`Error: El argumento en la posición ${i} no es un número.`);
            return false;
        }
    }
    return true;
}

// Funciones requeridas para la calificación automática
function sumarMultiplesNumeros(numeros) {
    // TODO: Implementa esta función
    // Debe recibir un arreglo de números y devolver su suma
    if (!validateTypeOfArguments(sumarMultiplesNumeros, numeros)) {
        return null;
    }
    let suma = 0;
    for(let i = 0; i<numeros.length; i++){
        suma += numeros[i];
    }
    return suma;
}

function multiplicarMultiplesNumeros(numeros) {
    // TODO: Implementa esta función
    // Debe recibir un arreglo de números y devolver el producto de multiplicarlos todos entre sí

      if (!validateTypeOfArguments(sumarMultiplesNumeros, numeros)) {
        return null;
      }
    let producto = 1;
    for(let i = 0; i<numeros.length; i++){
        producto *= numeros[i];
    }
    return producto;
}

function esPar(numero) {
    // TODO: Implementa esta función
    // Debe devolver true si el número es un entero par, false en caso contrario
    
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function esEntero(numero) {
    // TODO: Implementa esta función
    // Debe devolver true si el número es un entero, false en caso contrario
   
    if(Number.isInteger(numero)){
        return true;
    }else{
        return false;
    }
}

// Exportar funciones para pruebas (estilo Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sumarMultiplesNumeros,
        multiplicarMultiplesNumeros,
        esPar,
        esEntero
    };
}

// Ejecutar la función principal si este archivo se ejecuta directamente
if (require.main === module) {
    principal();
}