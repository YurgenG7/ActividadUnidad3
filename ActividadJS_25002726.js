var mes = parseInt(prompt("Ingrese el mes de nacimiento (1-12):"))
var dia = parseInt(prompt("Ingrese el día de nacimiento (1-31):"))

if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
  alert("Su signo zodiacal es Acuario")
} else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
  alert("Su signo zodiacal es Piscis")
} else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
  alert("Su signo zodiacal es Aries")
} else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
  alert("Su signo zodiacal es Tauro")
} else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
  alert("Su signo zodiacal es Géminis")
} else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
  alert("Su signo zodiacal es Cáncer")
} else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
  alert("Su signo zodiacal es Leo")
} else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
  alert("Su signo zodiacal es Virgo")
} else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
  alert("Su signo zodiacal es Libra")
} else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
  alert("Su signo zodiacal es Escorpio")
} else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
  alert("Su signo zodiacal es Sagitario")
} else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
  alert("Su signo zodiacal es Capricornio")
} else {
  alert("Fecha inválida")
}

   



















                    
                      