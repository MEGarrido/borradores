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
      strokeWeight(5);
      stroke(0);
      fill(255);
      if(escena===0){
        rectMode(CORNER);
        rect(60,90,500,360);
        text(arrayTexto[escena],70,115,480,300);
      }
      if(escena===1){
        rectMode(CORNER);
        rect(60,90,500,220);
        text(arrayTexto[escena],70,115,480,300);
      }
    }
    if(tipo===3){
      this.boton.dibujaRestart();
      strokeWeight(5);
      stroke(0);
      fill(255);
      rect(20,355,600,110);
      text(arrayTexto[escena],25,360,560,110); 
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
  
  ganador(){
    this.dibujar(2,3);
  }
  
  perdedor(){
    this.dibujar(3,3);
  }
}
