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
  "(MUESTRA|MUESTRAS|PUEDES|QUIERO|DESEO|VOY|QUISIERA|GUSTARIA|GUSTARÍA|DAME|DEME|DA)"
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

function selectFlavor(input) {
  input = upperCase(input);

  if (input.includes("POLLO") || input.includes("CHAMPIÑONES"))
    return {
      name: "Pollo con Champiñones",
      prices: { small: 160, medium: 220, large: 330 },
    };
  if (input.includes("PEPERONI") || input.includes("PEPERONNI"))
    return {
      name: "Peperonni",
      prices: { small: 165, medium: 225, large: 335 },
    };
  if (input.includes("HAWAIANA") || input.includes("HAWAIANNA"))
    return {
      name: "Hawaianna",
      prices: { small: 150, medium: 210, large: 320 },
    };
}

function sizeAvaliable(flavor) {
  return `La pizza de ${flavor.name} está disponible en tres tamaños: <ul><li>Pequeña (4 porciones). Cuesta ${flavor.prices.small} pesos.</li> <li>Mediana (8 Porciones). Cuesta ${flavor.prices.medium} pesos.</li><li>Grande (12 Porciones). Cuesta ${flavor.prices.large} pesos.</li><li>¿Cúal te gustaría ordenar?</li></ul>`;
}

function messageConfirmSize(input, flavor) {
  if (input.includes("PEQUEÑA"))
    return `Ha seleccionado la pizza pequeña del sabor <b>${flavor}</b>. Sí la orden en correcta escribe <b>SI</b> o <b>NO</b> para cancelar o cambiar la orden`;
  else if (input.includes("MEDIANA"))
    return `Ha seleccionado la pizza mediana del sabor <b>${flavor}</b>. Sí la orden en correcta escribe <b>SI</b> o <b>NO</b> para cancelar o cambiar la orden`;
  else if (input.includes("GRANDE"))
    return `Ha seleccionado la pizza grande del sabor <b>${flavor}</b>. Sí la orden en correcta escribe <b>SI</b> o <b>NO</b> para cancelar o cambiar la orden`;
}

function flavors(input) {
  let flavor = selectFlavor(input);
  let sabor = flavor.name;

  //arreglar acá
  if (flavor.name === "Hawaianna") {
    // ojo
    if (sizes.test(input)) return messageConfirmSize(input, sabor);
    return sizeAvaliable(flavor);
  } else if (flavor.name === "Pollo con Champiñones") {
    if (sizes.test(input)) return messageConfirmSize(input, sabor);

    return sizeAvaliable(flavor);
  } else if (flavor.name === "Peperonni") {
    if (sizes.test(input)) return messageConfirmSize(input, sabor);
    return sizeAvaliable(flavor);
  }
}

function selectSize(input) {
  input = upperCase(input);
  console.log("imputado", input);

  // let pizza
  // let size;
  // if (input.includes("PEQUEÑA"))
  //   return `Ha seleccionado la pizza pequeña del sabor <b>${pizza.name}</b>. Sí la orden en correcta escribe <b>SI</b> o <b>NO</b> para cancelar o cambiar la orden`;
  // else if (input.includes("PEQUEÑA"))
  //   return `Ha seleccionado la pizza mediana del sabor <b>${pizza.name}</b>. Sí la orden en correcta escribe <b>SI</b> o <b>NO</b> para cancelar o cambiar la orden`;
  // else if (input.includes("PEQUEÑA"))
  //   return `Ha seleccionado la pizza grande del sabor <b>${pizza.name}</b>. Sí la orden en correcta escribe <b>SI</b> o <b>NO</b> para cancelar o cambiar la orden`;
}

function getBotResponse(input) {
  input = input.toUpperCase();
  if (input === "") return "No has escrito nada, ¿Qué te gustaría saber?";
  else if (saludo.test(input) == true) return toGreet(input);
  else if (what.test(input) == true && carta.test(input) == true) return menu();
  else if (toWant.test(input) == true && flavorsPizza.test(input) == true)
    return flavors(input);
  else if (toWant.test(input) == true && sizes.test(input) == true)
    return flavors(input);
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
