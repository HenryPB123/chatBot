var input = document.getElementById("input");
var output = document.getElementById("output");
var stringIn = "";
var stringOut = "";

var saludo = RegExp(
  "(HOLA|BUENAS|BUENOS DÍAS|BUENOS DIAS|BUENAS TARDES|BUENAS NOCHES)"
);
var saludoRes1 = RegExp("(BIEN|SUPER)");
var saludoRes2 = RegExp("(BIEN Y TU| BIEN Y TÚ)");
var apellido = RegExp("(APELLIDO)");
var edadSi = RegExp("(SI|CLARO|SEGURO)");
var pasatiempoRes = RegExp("(PASATIEMPO|PASATIEMPOS|HOBBIES)");
var profesiónSi = RegExp("(DIME|CUENTAME|CUÉNTAME)");
var profesiónNO = RegExp("(NO ME INTERESA)");

window.addEventListener("keydown", keyDownHandler, false);
//función para que al dar enter también se ejecute el código
function keyDownHandler(event) {
  // el 13 es el código askey, es donde encontramos el número que corresponde a cada tecla en nuestro teclado
  if (event.keyCode === 13) clickHandler();
}

var button = document.querySelector("button");
button.addEventListener("click", clickHandler, false);
function clickHandler() {
  stringIn = input.value;
  stringIn = stringIn.toUpperCase();
  if (saludo.test(stringIn) === true) stringOut = "<p>Hola, ¿Cómo estás?</p>";
  else if (saludoRes2.test(stringIn) === true)
    stringOut =
      "<p>Estoy super bien</p>\n<p> <p>Dime:</p> ¿Te gustaría saber sobre mi: mi apellido, mi edad, mi profesión o qué hago en mis ratos libres?</p>";
  else if (saludoRes1.test(stringIn) === true) {
    stringOut =
      " <p>Dime:</p> ¿Te gustaría saber sobre mi: mi apellido, mi edad, mi profesión o qué hago en mis ratos libres?</p>";
  } else if (apellido.test(stringIn)) {
    console.log("apellido", stringIn);
    stringOut = "Mi apellido es Simón, ¿Te gustaría saber mi edad?";
  } else if (edadSi.test(stringIn))
    stringOut = "Tengo 10 años, ¿quieres saber qué hago en mis ratos libres?";
  else if (pasatiempoRes.test(stringIn))
    stringOut =
      "Mis pasatiempos son: <ul><li>Leer</li><li>Cantar</li><li>Jugar fútbol</li><li>Y conocer nuevos amigos</li></ul> <p>Por último sólo me queda contarte sobre mi profesión. ¿Te gustaría saber a que me dedico?</p>";
  else if (profesiónSi.test(stringIn))
    stringOut =
      "<p>Mi profesión es psicólogo, me gusta hablar y escuchar a las personas y ver en que los puedo aconsejar.</p><p>Bien ha sido un gusto hablar contigo, espero verte de nuevo por acá.</p< ";
  else if (profesiónNO.test(stringIn))
    stringOut =
      "<p>OK, me hubiera gustado compartir un poco más contigo.</p><p>Sin embargo ha sido un gusto hablar contigo y espero verte de nuevo por acá</p< ";
  else {
    stringOut = "No comprendo lo que dices. Reformula o haz otra tú pregunta.";
  }

  output.innerHTML = stringOut;
  input.value = "";
  input.focus();
}
