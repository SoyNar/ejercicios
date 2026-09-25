export function rubricaPerfecto(score) {
    
    if(score < 0 || score > 11) {
        return "Nota no valida";
    }
 if (score === 11) return "Perfecto";
  if (score >= 9) return "Excelente";
  if (score >= 5) return "Aprobado";
  return "Reprobado";
}