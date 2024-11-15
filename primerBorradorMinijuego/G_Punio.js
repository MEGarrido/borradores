class arma {
  constructor(x,y){
    this.posX=x;
    this.posY=y;
    this.miColor = color(255, 215, 0);
    this.lanzada = false;
    this.vida = 10;
  }
  
  dibujar(){
    if(this.lanzada){
      image(arraySprites[10],this.posX,this.posY,60,60);
      this.mover();
    }
  }
  
  contador(){
    strokeWeight(2);
    stroke(0);
    fill(this.miColor);
    rect(50,30,180,35);
    textSize(15);
    fill(255);
    text("Ataques disponibles: "+this.vida,140,47);
  }
  
  mover(){
    this.posY = this.posY - 5;
  }
  
  fueLanzada(){
    this.lanzada = true;
    this.vida = this.vida - 1;
  }
  
  lanzada(){
    return this.lanzada;
  }
}
