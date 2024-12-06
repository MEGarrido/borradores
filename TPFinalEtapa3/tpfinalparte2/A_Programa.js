//Clase en donde se desarrolla todo el programa principal

class programa {
  constructor(){
    this.crearPantalla();
    this.crearJuego();
    this.crearBoton();
    this.estado = 0; //variable para avanzar en las pantallas
    this.ataques = 10; //variable para el contador de ataques
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
  
  //Método que resetea las variables necearias a sus valores iniciales
  reseteoVariables(){
    this.ataques = 10;
    this.juego.enemigo.vida = 70;
    this.juego.enemigo.posX = 270;
    this.juego.enemigo.velocidad = 1;
    this.juego.personaje.posX = 270;
    this.juego.personaje.sprite = 6;
    this.juego.personaje.arma.lanzada = false;
  }
  
  //Método que dibuja el contador de ataques
  contador(){
    strokeWeight(2);
    stroke(0);
    fill(color(255, 215, 0));
    rect(50,30,180,35);
    textSize(15);
    fill(255);
    text("Ataques disponibles: " + this.ataques,140,47);
  }
  
  
  //Método que reproduce el tp en sí, llama métodos de pantalla y dibuja el juego mediante la logica de estados
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
      this.contador();
    }
    
    //Lógica perder (si no quedan ataques y la vida del enemigo es mayor a 0)
    if((this.estado === 3)&&(this.juego.enemigo.vida > 0)&&(this.ataques === 0)){
      this.estado = 5;
    }
    
    //Lógica ganar (si quedan ataques y la vida del enemigo esta en 0)
    if((this.estado === 3)&&(this.juego.enemigo.vida === 0)&&(this.ataques > 0)){
      this.estado = 4;
    }
    
    if(this.estado === 4){
      this.pantalla.ganador();
    }
    
    if(this.estado === 5){
      this.pantalla.perdedor();
    }
  }
  
  //Método para resumir la logica de cambios de estados realizados por el uso de los distintos botones
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
      
    let botónRestart = this.boton.delimitarBotones(400,440,280,368);
    
    if((botónRestart)&&(sePuedeReiniciar)){
      this.reseteoVariables();
    }
      
    this.preguntaEstadoLogica(botónRestart,sePuedeReiniciar,0);
  }
    
  logicaInstrucciones(estado){
    //Botón Instrucciones - su definición y lógica de activación
    let botónInstrucciones = this.boton.delimitarBotones(420,458,321,463);
    this.preguntaEstadoLogica(estado===0,botónInstrucciones,2);
  }
  
  
  //Método que activa los ataques, su sonido y su movimiento, cuando el juego esta siendo reproducido y se hace click
  mousePresionadoEnJuego(estado){
    if(estado===3){
      this.juego.personaje.ataque();
      punio.play();
      if(this.ataques > 0){
        this.ataques = this.ataques - 1;
      }
    }
  }
  
  //Método que activa los botones al hacer click
  mousePresionado(estado){
    this.logicaAtras(estado);
    this.logicaStart(estado);
    this.logicaCreditos(estado);
    this.logicaInstrucciones(estado);
    this.logicaRestart(estado);
  }
  
  
  //Método que se llama en el mousePressed para hacer funcionar las interacciones
  interacciones(){
    this.mousePresionadoEnJuego(this.estado);
    this.mousePresionado(this.estado);
  }
}
