//Clase botones, como se dibujan y el sonido que reproducen al tocarse

class botones{
  constructor(){
    this.miColor = color(255, 215, 0);
  }
  
  //Método utilizado para dibujar botones
  dibujaBoton( x, y, mensaje, ancho, alto){
  textSize(15);
  let w = textWidth(mensaje) + 20; // ancho del texto + margen
  let h = alto; // altura fija

  strokeWeight(2);
  stroke(0);
  fill(this.miColor);
  rectMode(CORNER);
  rect(x, y, w, h, 5);
  fill(255); 
  textAlign(CENTER,CENTER);
  text(mensaje, x + w / 2, y + h / 2); 
  }
  
  dibujaAtras() {
    this.dibujaBoton(40, 40, "<---", 30, 30); 
  }

  dibujaStart() {
    this.dibujaBoton(280, 363, "START", 85, 40); 
  }

  dibujaCreditos() {
    this.dibujaBoton(200, 420, "CRÉDITOS", 140, 40); 
  }

  dibujaRestart() {
    this.dibujaBoton(280, 400, "RESTART", 100, 40); 
  }
  
  dibujaInstruc(){
    this.dibujaBoton(320, 420, "INSTRUCCIONES", 100, 40); 
  }
  
  sonidoBoton(){
    sonido.play();
  }

  //Método para resumir la declaración de variables booleanas utilizadas para las delimitaciones de los botones
  delimitarBotones(mayorY,menorY,mayorX,menorX){
    return ((mouseY >= mayorY) && (mouseY <= menorY) && (mouseX >= mayorX) && (mouseX <= menorX));
  }
  
}
