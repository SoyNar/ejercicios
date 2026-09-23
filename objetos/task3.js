// ¡Escribe tu código debajo de esta línea!

function Mail(asunto, mensaje) {
  this.asunto = asunto
  this.mensaje = mensaje
  this.printEmail = function(){
    console.log(`${this.asunto}: ${this.mensaje}`)
  }

}

const subject = process.argv[3];
const message = process.argv[4];
const nuevoCorreo = new Mail(subject,message);

// ¡Escribe tu código encima de esta línea!

nuevoCorreo.printEmail()