export function calculadoraEdad(year,month,day) {
    let today = new Date();
    let birth = new Date(year,month,day);

    return today.getFullYear() - birth.getFullYear();

}