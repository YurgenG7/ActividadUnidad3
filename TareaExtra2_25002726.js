function jugar() {
  var numeroComputadora = Math.floor(Math.random() * 9) + 1;

  var numeroUsuario;
  while (true) {
    numeroUsuario = parseInt(prompt("Ingrese un número entre 1 y 9:"));
    if (numeroUsuario >= 1 && numeroUsuario <= 9) {
      break;
    } else {
      alert("Número inválido. Por favor, ingrese un número entre 1 y 9.");
    }
  }

  var adivinanza;
  while (true) {
    adivinanza = prompt("¿Es su número mayor, menor o igual al de la computadora?:");
    if (adivinanza === "mayor" || adivinanza === "menor" || adivinanza === "igual") {
      break;
    } else {
      alert("Adivinanza inválida. Por favor, ingrese 'mayor', 'menor' o 'igual'.");
    }
  }

  var resultado;
  if (adivinanza === "mayor" && numeroUsuario > numeroComputadora) {
    resultado = "¡Ha adivinado!";
  } else if (adivinanza === "menor" && numeroUsuario < numeroComputadora) {
    resultado = "¡Ha adivinado!";
  } else if (adivinanza === "igual" && numeroUsuario === numeroComputadora) {
    resultado = "¡Ha adivinado!";
  } else {
    resultado = "Lo siento, no ha adivinado.";
  }
  alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. ${resultado}`);

  var jugarOtraVez = prompt("¿Quiere jugar otra vez? (SI/NO):");
  if (jugarOtraVez.toUpperCase() === "SI") {
    jugar();
  } else {
    alert(`Gracias por jugar`);
  }
}

jugar();



















                    
                      