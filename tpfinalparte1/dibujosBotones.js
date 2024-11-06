//Pestaña de funciones de dibujo de botones

function dibujaBoton(x, y, mensaje, ancho, alto, colorCaja, colorTexto) {
  textSize(15);
  let w = textWidth(mensaje) + 20; // ancho del texto + margen
  let h = alto; // altura fija

  strokeWeight(2);
  stroke(0);
  fill(colorCaja); 
  rect(x, y, w, h, 5);
  fill(colorTexto); 
  textAlign(CENTER, CENTER);
  text(mensaje, x + w / 2, y + h / 2); 
}

function dibujaAtrás() {
  dibujaBoton(40, 40, "<---", 30, 30, colorAtras, 0); 
}

function dibujaSiguiente() {
  dibujaBoton(575, 435, "--->", 30, 30, colorSiguiente, 255); 
}

function dibujaStart() {
  dibujaBoton(280, 373, "START", 85, 40, colorStart, 0); 
}

function dibujaCreditos() {
  dibujaBoton(265, 430, "CRÉDITOS", 140, 40, colorCreditos, 0); 
}

function dibujaRestart() {
  dibujaBoton(280, 430, "RESTART", 100, 40, colorRestart, 255); 
}

function dibujaDecision(coord, mensaje) {
  dibujaBoton(280 + coord, 390, mensaje, 85, 40, colorDecision, 0); 
}


function dibujaBotonExtra() {
  dibujaBoton(400, 400, "EXTRA", 100, 40, colorExtra, 255); 
}
