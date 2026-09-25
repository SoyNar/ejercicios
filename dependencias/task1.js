

export function calculadoraCosto(transaction) {
    //costo es igual a  costo transaccion  =trasaccion + 3 +  trasaccion * 0.01
    //  trasaccion  suma $3 + interes de 1%

    const cost = Number(transaction )+ 3;
    const interest = Number(transaction) * 0.01;
    return cost + interest;


}