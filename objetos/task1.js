function Mail(asunto, mensaje) {
  this.asunto = asunto
  this.mensaje = mensaje
}

// ¡Escribe tu código debajo de esta línea!

const nuevoCorreo = new Mail()

// ¡Escribe tu código encima de esta línea!
const mail = new Mail("hola", "mundo");

console.log(mail.asunto + ": " + mail.mensaje)