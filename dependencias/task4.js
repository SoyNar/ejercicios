export class EdadAmigo {

    constructor(nombre,anio,mes,dia){
        this.nombre = nombre;
        this.anio = anio;
        this.mes = mes;
        this.dia= dia;

    }
    retornarEdad(){
    let today = new Date();
    let birth = new Date(this.anio,this.mes,this.dia);
    let age = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth() - birth.getMonth();
    if( month < 0  || (month === 0 && today.getDate() < birth.getDate())){
        age --;
    }
    return `¡${this.nombre} tiene ${age} años hoy!`;
    }
    

}
// const amigo = new EdadAmigo("Anaa",1997,1,28)
// console.log(amigo.retornarEdad())