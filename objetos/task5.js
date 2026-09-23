// ¡Escribe tu código debajo de esta línea!
class FriendList{
    constructor(names){
        this.nombres = names;
    }
}
const names = process.argv.slice(4);
const friendList = new FriendList(names);
console.log(friendList.nombres);


// ¡Escribe tu código encima de esta línea!