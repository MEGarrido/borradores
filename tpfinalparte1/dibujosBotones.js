//Pestaña de funciones de dibujo de botones

function dibujaAtrás(){
  strokeWeight(2);
  stroke(0);
  fill(255);
  rect(40,40,50,20);
  text("<---",53,53);
}
function dibujaSiguiente(){
  strokeWeight(2);
  stroke(0);
  fill(255);
  rect(550,440,50,20);
  text("--->",565,455);
}

function dibujaStart(){
  strokeWeight(2);
  stroke(0);
  fill(255);
  rect(280,373,85,40);
  fill(0);
  textSize(20);
  text("START",290,400);
}

function dibujaCreditos(){
  strokeWeight(2);
  stroke(0);
  fill(255);
  rect(280,440,85,20);
  fill(0);
  textSize(15);
  text("CRÉDITOS",283,455);
}

function dibujaRestart(){
  strokeWeight(2);
  stroke(0);
  fill(255);
  rect(280,400,100,40);
  fill(0);
  textSize(20);
  text("RESTART",285,425);
}

//Dibuja los botones de desición según los párametros ingresados en la función decision()
function dibujaDecision(coord,mensaje){
  strokeWeight(2);
  stroke(0);
  fill(255);
  rect(280+coord,390,85,40);
  fill(0);
  textSize(15);
  text(mensaje,283+coord,395,80,35);
}
