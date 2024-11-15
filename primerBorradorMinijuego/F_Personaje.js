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
  
  movimiento(tecla){
    if((tecla ==='d')||(tecla ==='D')){
      this.moverDerecha();
    }else{
      if((tecla ==='a')||(tecla ==='A')){
        this.moverIzquierda();
      }
    }
  }
  
  lanzar(){
    this.arma = new arma(this.posX,this.posY);
    this.arma.fueLanzada();
  }
  
  ataque(){
    this.lanzar();
    this.sprite = 9;
  }
    
}
