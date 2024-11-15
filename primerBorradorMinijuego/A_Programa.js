class programa {
  constructor(){
    this.crearPantalla();
    this.crearJuego();
    this.crearBoton();
    this.estado = 0;
  }
  
  crearPantalla(){
    this.pantalla = new pantalla();
  }
  
  crearJuego(){
    this.juego = new juego();
  }
  
  crearBoton(){
    this.boton = new botones();
  }
  
  reproducir(){
    if(this.estado === 0){
      this.pantalla.menu(); 
    }
    
    if(this.estado === 1){
      this.pantalla.creditos();
    }
    
    if(this.estado === 2){
      this.pantalla.instrucciones();
    }
    
    if(this.estado === 3){
      this.juego.dibujar();
    }
    
    if(this.estado === 4){
      this.pantalla.ganador();
    }
    
    if(this.estado === 5){
      this.pantalla.perdedor();
    }
  }
  
  //Función para resumir la logica de cambios de estados realizados por el uso de los distintos botones
  preguntaEstadoLogica(pregunta,pregunta2,resultado){
    if ((pregunta)&&(pregunta2)){
      this.boton.sonidoBoton();
      this.estado = resultado;
    }
  }
  

  logicaAtras(estado){
  // Botón Atrás - su definición y lógica de activación
    let botónAtrás= this.boton.delimitarBotones(40,70,40,82);
    let sePuedeVolverAtras = (estado===1)||(estado===2);
    this.preguntaEstadoLogica(sePuedeVolverAtras,botónAtrás,0);
  }  
  
  logicaStart(estado){
  //Botón Start - su definición y lógica de activación
    let botónStart = this.boton.delimitarBotones(362,400,281,346);
    let sePuedeComenzar = (estado===0);
    this.preguntaEstadoLogica(botónStart,sePuedeComenzar,3);
  }
  
  logicaCreditos(estado){
    //Botón Créditos - su definición y lógica de activación
    let botónCréditos = this.boton.delimitarBotones(420,458,201,294);
    this.preguntaEstadoLogica(estado===0,botónCréditos,1);
  }
  
  logicaRestart(estado){
    //Botón Restart - su definición y lógica de activación
    let sePuedeReiniciar = ((estado===4)||(estado===5));
      
    let botónRestart = this.boton.delimitarBotones(430,470,280,368);
      
    this.preguntaEstadoLogica(botónRestart,sePuedeReiniciar,0);
  }
    
  logicaInstrucciones(estado){
    //Botón Instrucciones - su definición y lógica de activación
    let botónInstrucciones = this.boton.delimitarBotones(420,458,321,463);
    this.preguntaEstadoLogica(estado===0,botónInstrucciones,2);
  }
  
  mousePresionadoEnJuego(estado){
    if(estado===3){
      this.juego.personaje.ataque();
      punio.play();
    }
  }
  
  mousePresionado(estado){
    this.logicaAtras(estado);
    this.logicaStart(estado);
    this.logicaCreditos(estado);
    this.logicaInstrucciones(estado);
    this.logicaRestart(estado);
  }
  
  interacciones(){
    this.mousePresionadoEnJuego(this.estado);
    this.mousePresionado(this.estado);
  }
}
