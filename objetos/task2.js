function Mail(asunto, mensaje) {
  this.asunto = asunto
  this.mensaje = mensaje
}

// ¡Escribe tu código debajo de esta línea!
const subject = process.argv[3];
const message = process.argv[4];

const nuevoCorreo = new Mail(subject,message)

// ¡Escribe tu código encima de esta línea!

console.log(nuevoCorreo.asunto + ": " + nuevoCorreo.mensaje)