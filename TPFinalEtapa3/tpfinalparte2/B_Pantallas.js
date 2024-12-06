//Clase pantallas, definicion de las distintas pantallas y cómo se dibujan

class pantalla {
  constructor(){
    this.posX = 0;
    this.posY = 0;
    this.crearBoton();
  }
  
  crearBoton(){
    this.boton = new botones();
  }
  
  cargarImagen(imagen){
    image(imagen,0,0,width,height);
  }
  
  dibujar(escena,tipo){
    this.cargarImagen(arrayImagen[escena]);
    if(tipo===1){
      this.boton.dibujaStart();
      this.boton.dibujaCreditos();
      this.boton.dibujaInstruc();
    }
    if(tipo===2){
      this.boton.dibujaAtras();
      strokeWeight(3);
      stroke(0);
      fill(color (226, 108, 96));
      if(escena===0){
        rectMode(CORNER);
        rect(60,90,500,360);
        fill(255);
        text(arrayTexto[escena],70,115,480,300);
      }
      if(escena===1){
        rectMode(CORNER);
        rect(60,90,500,220);
        fill(255);
        text(arrayTexto[escena],70,55,480,300);
      }
    }
    if(tipo===3){
      this.boton.dibujaRestart();
      stroke(0);
      textSize(30);
      fill(255);
      text(arrayTexto[escena],45,30,560,110); 
    }
  }
  
  menu(){
    this.dibujar(0,1);
  }
  
  creditos(){
    this.dibujar(0,2);
  }
  
  instrucciones(){
    this.dibujar(1,2);
  }
  
  perdedor(){
    this.dibujar(2,3);
  }
  
 ganador(){
    this.dibujar(3,3);
  }
}
