//Clase personaje, contiene la definición de este, cómo se dibuja, su movimiento y la interacción con el arma 

class personaje {
  constructor(){
    this.posX = 270;
    this.posY = 360;
    this.miColor = color(220,193,0);
    this.sprite = 6;
    this.arma = new arma();
  }
  
  dibujar(){
    this.arma.dibujar();
    image(arraySprites[this.sprite],this.posX,this.posY,100,120);
  }
  
  moverDerecha(){
    if(this.posX < 520 ){
      this.posX = this.posX+50;
      this.sprite = 8;
    }
  }
  
  moverIzquierda(){
    if(this.posX > 25){
      this.posX = this.posX-50;
      this.sprite = 7;
    }
  }
  
  //Método que controla el movimiento del personaje 
  movimiento(tecla){
    if((tecla ==='d')||(tecla ==='D')){
      this.moverDerecha();
    }else{
      if((tecla ==='a')||(tecla ==='A')){
        this.moverIzquierda();
      }
    }
  }
  
  //Método que crea una nueva arma y llama el método gracias al que luego se dibujará en movimiento
  lanzar(){
    this.arma = new arma(this.posX,this.posY);
    this.arma.fueLanzada();
  }
  
  //Método para la accion de ataque generada al tocar el click en el juego
  ataque(){
    this.lanzar();
    this.sprite = 9;
  }
    
}
