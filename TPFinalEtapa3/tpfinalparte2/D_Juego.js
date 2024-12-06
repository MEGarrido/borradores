//Clase juego, se encarga de la reproduccion del juego y la colision con el enemigo e interaccion del personaje

class juego {
  constructor(){
    this.crearPersonaje();
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
  
  //Método que dibuja el juego y sus diversos componentes
  dibujar(){
    background(arraySprites[4]);
    this.personaje.dibujar();
    this.enemigo.actualizar();
    this.enemigo.dibujar();
    this.controlarArma();
  }
  
  //Método para la colision del arma(puño) con el enemigo
  controlarArma(){
    if(this.personaje.arma.lanzada){
      this.enemigo.golpeado(this.personaje.arma);
    } 
  }
  
  //Método utilizado para el movimiento del personaje
  teclaPresionadaPersonaje(tecla){
    this.personaje.movimiento(tecla);
  }
  
}
