var saludo = RegExp(
  "(HOLA|BUENAS|BUEN DÍA|BUENOS DIAS|BUENOS DÍAS|BUENAS TARDES|BUENAS NOCHES)"
);
var morningGreet = RegExp("(BUEN DIA|BUEN DÍA|BUENOS DIAS|BUENOS DÍAS)");
var afternoonGreet = RegExp("(BUENA TARDE|BUENAS TARDES)");
var eveningGreet = RegExp("(BUENA NOCHE|BUENAS NOCHES)");

var what = RegExp(
  "(QUE|QUÉ|CUAL|CUÁL|CUALES|SABER|CONOCER|ENVIA|ENVÍA|ENVIAS|ENVÍAS|DA|PODRIA|PODRÍA|PODRÍAS|PODRIAS)"
);
var carta = RegExp(
  "(MENU|MENÚ|CARTA|TIPO|TIPOS|CLASSES|CLASE|SABOR|SABORES|PIZZA|PIZZAS|PIZA|PIZAS)"
);
var order = RegExp("(PEDIDO|ORDEN|ORDÉN|PIZZA)");
var toWant = RegExp(
  "(MUESTRA|MUESTRAS|PUEDES|QUIERO|DESEO|VOY|QUISIERA|GUSTARIA|GUSTARÍA|DAME|DEME)"
);
var toHave = RegExp("(TIENE|TIENES|TIENEN|OFRECE|DISPONE)");
var flavorsPizza = RegExp(
  "(POLLO|CHAMPIÑONES|PEPERONI|PEPERONNI|HAWAIANA|HAWAIANNA)"
);
var flavorChiken = RegExp("(POLLO|CHAMPIÑONES)");
var flavorPeperonni = RegExp("(PEPERONI|PEPERONNI)");
var flavorHawaianna = RegExp("(HAWAIANA|HAWAIANNA)");
var sizes = RegExp("(PEQUEÑA|MEDIANA|GRANDE)");
var price = RegExp("(PRECIO|VALOR|COSTO|CUESTA|VALE)");

function upperCase(input) {
  return (input = input.toUpperCase());
}

function toGreet(input) {
  upperCase(input);
  if (input.includes("HOLA")) return "Hola, bienvenid@. ¿Cómo le puedo ayudar?";
  else if (morningGreet.test(input) == true)
    return "Buenos días, bienvenid@. ¿Cómo le puedo ayudar?";
  else if (afternoonGreet.test(input) == true)
    return "Buenas tardes, bienvenid@. ¿Cómo le puedo ayudar?";
  else if (eveningGreet.test(input) == true)
    return "Buenas noches, bienvenid@. ¿Cómo le puedo ayudar?";
  else return "Hola, bienvenid@. ¿Cómo le puedo ayudar?";
}

function menu() {
  return `El día de hoy ofrecemos los siguiéntes sabores:\n <b>Peperonni,</b>\n<b>Pollo con champiñones y </b>\n<b>Hawaianna</b>\n¿Cúal le gustaría?`;
}

function flavors(input) {
  console.log("input", input);
  return "sabores";
}

function getBotResponse(input) {
  input = input.toUpperCase();
  if (input === "") return "No has escrito nada, ¿Qué te gustaría saber?";
  else if (saludo.test(input) == true) return toGreet(input);
  else if (what.test(input) == true && carta.test(input) == true) return menu();
  else if (toWant.test(input) == true && flavorsPizza.test(input) == true)
    return flavors(input);
  // else if (
  //   (toWant.test(input) == true || what.test(input) == true) &&
  //   menu.test(input) == true
  // )
  //   return "El día de hoy ofrecemos los siguiéntes sabores: <ul><li>Peperonni</li><li>Pollo con champiñones</li><li>Hawaianna</li><li>¿Cúal le gustaría ordenar?</li></ul>";
  // else if (toWant.test(input) == true && flavorChiken.test(input) == true)
  //   return flavorsPizza("Pollo con champiñones");
  // else if (toWant.test(input) == true && flavorPeperonni.test(input) == true)
  //   return flavorsPizza("Peperonni");
  // else if (toWant.test(input) == true && flavorHawaianna.test(input) == true)
  //   return flavorsPizza("Hawaianna");
  // else if (toWant.test(input) == true && sizes.test(input) == true)
  //   return sizesPizza(input);
  else return "Por favor reformula tu pregunta.";

  // // rock paper scissors
  // if (input == "rock") return "paper";
  // else if (input == "paper") return "scissors";
  // else if (input == "scissors") return "rock";

  // // Simple responses
  // if (input == "hello") return "Hello There!";
  // else if (input == "goodbye") return "Talk to you later!";
  // else return "Try asking something else!";
}
