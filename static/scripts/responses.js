var saludo = RegExp(
  "(HOLA|BUENAS|BUEN DÍA|BUENOS DIAS|BUENOS DÍAS|BUENAS TARDES|BUENAS NOCHES)"
);
var morningGreet = RegExp("(BUEN DIA|BUEN DÍA|BUENOS DIAS|BUENOS DÍAS)");
var afternoonGreet = RegExp("(BUENA TARDE|BUENAS TARDES)");
var eveningGreet = RegExp("(BUENA NOCHE|BUENAS NOCHES)");

var what = RegExp(
  "(QUE|QUÉ|CUAL|CUÁL|CUALES|SABER|CONOCER|ENVIA|ENVÍA|ENVIAS|ENVÍAS|DA|PODRIA|PODRÍA|PODRÍAS|PODRIAS|QUIERO)"
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
var siNo = RegExp("(SI|NO)");
var movil = RegExp("([0-9][ -]*){10}");
var despedida = RegExp("(GRACIAS)");
var sabores = [
  {
    name: "Pollo con Champiñones",
    sizes: { small: "Pequeña", medium: "Mediana", large: "Grande" },
    prices: { small: 160, medium: 220, large: 330 },
  },
  {
    name: "Peperonni",
    sizes: { small: "Pequeña", medium: "Mediana", large: "Grande" },
    prices: { small: 165, medium: 225, large: 335 },
  },
  {
    name: "Hawaianna",
    sizes: { small: "Pequeña", medium: "Mediana", large: "Grande" },
    prices: { small: 150, medium: 210, large: 320 },
  },
];
var ordenFinal = {};

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
      sizes: { small: "Pequeña", medium: "Mediana", large: "Grande" },
      prices: { small: 160, medium: 220, large: 330 },
    };
  if (input.includes("PEPERONI") || input.includes("PEPERONNI"))
    return {
      name: "Peperonni",
      sizes: { small: "Pequeña", medium: "Mediana", large: "Grande" },
      prices: { small: 165, medium: 225, large: 335 },
    };
  if (input.includes("HAWAIANA") || input.includes("HAWAIANNA"))
    return {
      name: "Hawaianna",
      sizes: { small: "Pequeña", medium: "Mediana", large: "Grande" },
      prices: { small: 150, medium: 210, large: 320 },
    };
}

function sizeAvaliable(flavor) {
  return `La pizza de ${flavor.name} está disponible en tres tamaños: <ul><li>Pequeña (4 porciones). Cuesta ${flavor.prices.small} pesos.</li> <li>Mediana (8 Porciones). Cuesta ${flavor.prices.medium} pesos.</li><li>Grande (12 Porciones). Cuesta ${flavor.prices.large} pesos.</li><li>¿Cúal te gustaría ordenar?</li></ul>`;
}

function flavors(input) {
  let flavor = selectFlavor(input);

  ordenFinal.name = flavor.name;
  if (flavor.name === "Hawaianna") {
    return sizeAvaliable(flavor);
  } else if (flavor.name === "Pollo con Champiñones") {
    return sizeAvaliable(flavor);
  } else if (flavor.name === "Peperonni") {
    return sizeAvaliable(flavor);
  }
}

//!pendiente
// function retornOrder(namePizza) {
// for(let i=0;i<sabores.length;i++){
//   if(namePizza===sabores[i].name)return
// }
// }

function selectSize(input) {
  input = upperCase(input);

  if (input.includes("PEQUEÑA")) {
    if (ordenFinal.name === "Hawaianna") ordenFinal.price = 150;
    if (ordenFinal.name === "Pollo con Champiñones") ordenFinal.price = 160;
    if (ordenFinal.name === "Peperonni") ordenFinal.price = 165;
    ordenFinal.size = "Pequeña";
    return `Ha seleccionado la pizza pequeña del sabor <b>${ordenFinal.name}</b>. Sí la orden es correcta escribe <b>SI</b> para confirmar o <b>NO</b> para cancelar.`;
  } else if (input.includes("MEDIANA")) {
    if (ordenFinal.name === "Hawaianna") ordenFinal.price = 210;
    if (ordenFinal.name === "Pollo con Champiñones") ordenFinal.price = 220;
    if (ordenFinal.name === "Peperonni") ordenFinal.price = 225;
    ordenFinal.size = "Mediana";
    return `Ha seleccionado la pizza mediana del sabor <b>${ordenFinal.name}</b>. Sí la orden es correcta escribe <b>SI</b> para confirmar o <b>NO</b> para cancelar.`;
  } else if (input.includes("GRANDE")) {
    if (ordenFinal.name === "Hawaianna") ordenFinal.price = 320;
    if (ordenFinal.name === "Pollo con Champiñones") ordenFinal.price = 330;
    if (ordenFinal.name === "Peperonni") ordenFinal.price = 335;

    ordenFinal.size = "Grande";
    return `Has seleccionado la pizza grande de sabor <b>${ordenFinal.name}</b>. Sí la orden es correcta escribe <b>SI</b> para confirmar o <b>NO</b> para cancelar.`;
  }
}

function confirmationOrden(input) {
  input = input.toUpperCase();
  if (input.includes("SI")) {
    return `Su pedido confirmado es: Una pizza de <b>${ordenFinal.name}</b>, de tamaño <b>${ordenFinal.size}</b> y cuesta <b>${ordenFinal.price}</b> pesos. Por favor escribe un número de telefono celular para enviar la factura.`;
  }
  console.log(ordenFinal);
  if (input.includes("NO")) return `Has cancelado tu pedido.`;
}

function phoneConfirmation() {
  return "El pedido se ha hecho correctamente y estara listo en 25 minutos.";
}

function getBotResponse(input) {
  input = input.toUpperCase();
  if (input === "") return "No has escrito nada, ¿Qué te gustaría saber?";
  else if (saludo.test(input) == true) return toGreet(input);
  else if (what.test(input) == true && carta.test(input) == true) return menu();
  else if (flavorsPizza.test(input) == true) return flavors(input);
  // else if (toWant.test(input) == true && flavorsPizza.test(input) == true)
  //   return flavors(input);
  else if (sizes.test(input) == true) return selectSize(input);
  // else if (toWant.test(input) == true && sizes.test(input) == true)
  //   return selectSize(input);
  else if (siNo.test(input) == true) return confirmationOrden(input);
  else if (movil.test(input) == true) return phoneConfirmation();
  else if (despedida.test(input.toUpperCase()) == true)
    return "Con gusto, esperamos verte de regreso pronto!!!!";
  else return "Por favor reformula tu pregunta.";
}
