var orden = RegExp("(PEDIDO|ORDEN|ORDÉN|PIZZA)");
var orden2 = RegExp("(QUIERO|DESEO|VOY|QUISIERA)");

var pizzaRes = RegExp("(PEPERONI|PEPERONNI)");
var pizzaRes2 = RegExp("(POLLO|CHAMPIÑONES)");

function getBotResponse(input) {
  input = input.toUpperCase();
  if (orden.test(input) == true && orden2.test(input) == true)
    return "Con gusto, para hoy le ofrezco pizza de: <ul><li>Peperonni</li><li>Pollo con champiñones</li></ul>";
  else if (pizzaRes.test(input) == true)
    return "Sabor a Peperonni tiene dos tamaños disponibles: <ul><li>Mediana (8 Porciones) cuesta 200 pesos</li><li>Familiar (12 Porciones) cuesta 300 pesos</li></ul>";
  else if (pizzaRes2.test(input) == true)
    return "Sabor a Pollo con Champiñones tiene tres tamaños disponibles: <ul><li>Personal (4 Porciones) cuesta 150 pesos</li><li>Mediana (8 Porciones) cuesta 200 pesos</li><li>Familiar (12 Porciones) cuesta 300 pesos</li></ul>";
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
