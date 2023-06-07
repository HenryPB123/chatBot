var saludo = RegExp(
  "(HOLA|BUENAS|BUEN DÍA|BUENOS DIAS|BUENOS DÍAS|BUENAS TARDES|BUENAS NOCHES)"
);

var what = RegExp("(QUE|QUÉ|CUAL|CUÁL|CUALES|SABER|CONOCER)");
var menu = RegExp(
  "(MENU|MENÚ|CARTA|TIPO|TIPOS|CLASSES|CLASE|SABOR|SABORES|PIZZA|PIZZAS|PIZA|PIZAS)"
);
var order = RegExp("(PEDIDO|ORDEN|ORDÉN|PIZZA)");
var toWant = RegExp("(QUIERO|DESEO|VOY|QUISIERA|GUSTARIA|GUSTARÍA)");
var toHave = RegExp("(TIENE|TIENES|TIENEN|OFRECE|DISPONE)");
var flavorChiken = RegExp("(POLLO|CAMPIÑONES)");
var flavorPeperonni = RegExp("(PEPERONI|PEPERONNI)");
var flavorHawaianna = RegExp("(HAWAIANA|HAWAIANNA)");
// var flavors = ["POLLO","CAMPIÑONES","PEPERONI","PEPERONNI","HAWAIANA","HAWAIANNA"]
var price = RegExp("(PRECIO|VALOR|COSTO|CUESTA|VALE)");

function getBotResponse(input) {
  input = input.toUpperCase();
  if (input === "") return "No has escrito nada, ¿Qué te gustaría saber?";
  else if (saludo.test(input) == true) return "Hola, ¿Cómo puedo ayudarl@?";
  else if (
    (toWant.test(input) == true || what.test(input) == true) &&
    menu.test(input) == true
  )
    return "El día de hoy ofrecemos los siguiéntes sabores: <ul><li>Peperonni</li><li>Pollo con champiñones</li><li>Hawaianna</li><li>¿Cúal le gustaría ordenar?</li></ul>";
  else if (toWant.test(input) == true && flavorChiken.test(input) == true)
    return "Sabor a Pollo con champiñones tiene tres tamaños disponibles: <ul><li>Pequeña (4 Porciones) cuesta 160 pesos</li><li>Mediana (8 Porciones) cuesta 220 pesos</li><li>Familiar (12 Porciones) cuesta 330 pesos</li></ul> ";
  else if (toWant.test(input) == true && flavorPeperonni.test(input) == true)
    return "Sabor a Peperonni tiene tres tamaños disponibles: <ul><li>Pequeña (4 Porciones) cuesta 165 pesos</li><li>Mediana (8 Porciones) cuesta 225 pesos</li><li>Familiar (12 Porciones) cuesta 335 pesos</li></ul>";
  else if (toWant.test(input) == true && flavorHawaianna.test(input) == true)
    return "Sabor a Hawaianna tiene tres tamaños disponibles: <ul><li>Pequeña (4 Porciones) cuesta 150 pesos</li><li>Mediana (8 Porciones) cuesta 200 pesos</li><li>Familiar (12 Porciones) cuesta 300 pesos</li></ul>";
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
