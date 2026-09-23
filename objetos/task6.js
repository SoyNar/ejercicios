// ¡Escribe tu código debajo de esta línea!
const argumentsC = process.argv.slice(3);
const shoppingList = argumentsC.map((item) => {
    const [article , amount ] = item.split(':');
    return {
        article: article,
        ampunt:Number(amount)
    }
})

class ShoppingLis {
    constructor(items){
        this.items = items;

    }
}

const articles = new ShoppingLis(shoppingList);
console.log(articles.items);

// ¡Escribe tu código encima de esta línea!