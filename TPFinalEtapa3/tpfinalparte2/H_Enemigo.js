//Clase arma, contiene la definición de este, cómo se dibuja, el contador de vida, su movimiento y la colision del arma con él

class enemigo {
  constructor(){
    this.posX = 270;
    this.posY = 185;
    this.miColor = color(206,42,41);
    this.vida = 70;
    this.velocidad = 1; //variable que determina la velocidad del movimiento del enemigo
  }
  
  dibujar(){
    if(this.vida > 0){
      image(arraySprites[5],this.posX,this.posY,100,120);
      this.contador();
    }
  }
  
  //Método que dibuja el contador de vida del enemigo
  contador(){
    strokeWeight(2);
    stroke(0);
    fill(this.miColor);
    rect(470,30,140,35);
    textSize(15);
    fill(255);
    text("Vida disponible: "+this.vida,540,47);
  }
  
  //Método que define la colisión del arma con el enemigo y le resta vida
  golpeado(arma){
    if( dist(this.posX, this.posY, arma.posX, arma.posY) < 30){
      this.vida = this.vida - 1;
    }
  }

  actualizar(){
    //Método que actualiza la posición del enemigo (lo mueve al llamarse en el juego.dibujar)
    this.posX = this.posX + this.velocidad;
    //Lógica de rebotes contra los lados de la pantalla y el aumento de velocidad
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
