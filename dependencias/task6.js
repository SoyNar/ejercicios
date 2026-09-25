export function rubricaExcelente(score) {
 
    if(score < 0 || score > 11) {
        return "Nota no valida";
    }
    //condicion 1 valor 1 (condicion dos ? valor dos : valor tres)
    return score >= 9 ? "Excelente" : (score >= 5 ? "Aprobado" : "Reprobado");
}