//Clase arma, contiene la definición de esta, cómo se dibuja y su movimiento

class arma {
  constructor(x,y){
    this.posX=x;
    this.posY=y;
    this.miColor = color(255, 215, 0);
    this.lanzada = false;
  }
  
  
  dibujar(){
    if(this.lanzada){
      image(arraySprites[10],this.posX,this.posY,60,60);
      this.mover();
    }
  }
  
  //Movimiento del arma
  mover(){
    this.posY = this.posY - 5;
  }
  
  //Método que genera el movimiento del arma(puño)
  fueLanzada(valor){
    this.lanzada = true;
  }
}
