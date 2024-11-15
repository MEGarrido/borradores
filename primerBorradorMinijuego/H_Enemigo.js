class enemigo {
  constructor(){
    this.posX = 270;
    this.posY = 185;
    this.miColor = color(206,42,41);
    this.vida = 30;
    this.velocidad = 1;
  }
  
  dibujar(){
    if(this.vida > 0){
      image(arraySprites[5],this.posX,this.posY,100,120);
      this.contador();
    }
  }
  
  contador(){
    strokeWeight(2);
    stroke(0);
    fill(this.miColor);
    rect(470,30,140,35);
    textSize(15);
    fill(255);
    text("Vida disponible: "+this.vida,540,47);
  }
  
  golpeado(arma){
    if( dist(this.posX, this.posY, arma.posX, arma.posY) < 15){
      this.vida = this.vida - 1;
    }
  }

  actualizar(){
    //actualizar posicion
    this.posX = this.posX + this.velocidad;
    //logica de rebotes
    if(this.posX >= 550){
      if(this.velocidad < 6){
        this.velocidad = this.velocidad + 1;
      }
      this.velocidad = this.velocidad * -1;
      print(this.velocidad);
    }
    if(this.posX <= 0){
      if(this.velocidad > 6){
        this.velocidad = this.velocidad - 1;
      }
      this.velocidad = this.velocidad * -1;
      print(this.velocidad);
    }
  }
}
