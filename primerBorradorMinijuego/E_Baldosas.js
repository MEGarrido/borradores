class baldosa{
  constructor(x,tipo){
    this.posX = 20+x;
    this.posY = 265;
    if(tipo===0){
      this.miColor = color(1,176,137);
    }
    if(tipo===1){
      this.miColor = color(222,76,89);
    }
    if(tipo===2){
      this.miColor = color(249,217,138);
    }
    if(tipo===3){
      this.miColor = color(61,61,115);
    }
    if(tipo===4){
      this.miColor = color(254,110,171);
    }
  }
  
  dibujar(){
    fill(this.miColor);
    rectMode(CORNER);
    rect(this.posX,this.posY,70,30);
  }
  
  //activacion(baldosa,enemigo){
  //  return dist((baldosa.posX,baldosa.posY,enemigo.posX, enemigo.posY) < 15);
  //}
}
