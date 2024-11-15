class juego {
  constructor(){
    this.crearPersonaje();
    this.crearBaldosas();
    this.crearEnemigo();
    this.crearPuño();
  }
  
  crearPuño(){
    this.arma = new arma();
  }
  
  crearEnemigo(){
    this.enemigo = new enemigo();
  }
  
  crearPersonaje(){
    this.personaje = new personaje();
  }
  
  crearBaldosas(){
    this.baldosas = [];
    for(let i=0; i<5; i++){
      this.baldosas[i] = new baldosa(i*130,i);
    }
  }
  
  dibujar(){
    background(arraySprites[4]);
    this.arma.contador();
    this.personaje.dibujar();
    for(let i=0; i<5; i++){
      this.baldosas[i].dibujar();
    }
    this.enemigo.actualizar();
    this.enemigo.dibujar();
    this.controlarArma();
    //this.estaActivada();
  }
  
  controlarArma(){
    if(this.personaje.arma.lanzada){
      this.enemigo.golpeado(this.personaje.arma);
    } 
  }
  
  iniciar(){
  }
  
  personajeGano(){
  }
  
  teclaPresionadaPersonaje(tecla){
    this.personaje.movimiento(tecla);
  }
  
  //filtro(fondo){
  //  fill(fondo);
  //  rect(0,0,width,height);
  //}
  
  //estaActivada(){
  //  for(let p=0; p < 5; p++){
  //    let siOno = this.baldosas[p].activacion(this.baldosas[p],this.enemigo); 
  //    if(siOno){
  //      this.filtro(this.baldosas[p].miColor);
  //    }
  //  }
  //}
}
