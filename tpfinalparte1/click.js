function musica(){
  if (!(fondo.isPlaying())) {
    fondo.play();
  }
}

function sonidoBoton(){
  if (mouseIsPressed){
    sonido.play();
  }
}

//Función para resumir la declaración de variables booleanas utilizadas para las delimitaciones de los botones
function delimitarBotones(mayorY,menorY,mayorX,menorX){
  return ((mouseY >= mayorY) && (mouseY <= menorY) && (mouseX >= mayorX) && (mouseX <= menorX));
}

//Función para resumir la logica de cambios de estados realizados por el uso de los distintos botones
function preguntaEstadoLogica(pregunta,pregunta2,resultado){
  if ((pregunta)&&(pregunta2)){
    sonidoBoton();
    estado=resultado;
  }
}


function logicaAtras(){
  // Botón Atrás - su definición y lógica de activación
  let botónAtrás= delimitarBotones(40,70,40,82);
  preguntaEstadoLogica(estado===41,botónAtrás,0);
}  

function logicaStart(){
  //Botón Start - su definición y lógica de activación
  let botónStart = delimitarBotones(372,410,280,345);
  let sePuedeComenzar = (estado===0);
  preguntaEstadoLogica(botónStart,sePuedeComenzar,1);
}

function logicaCreditos(){
  //Botón Créditos - su definición y lógica de activación
  let botónCréditos = delimitarBotones(430,470,265,360);
  preguntaEstadoLogica(estado===0,botónCréditos,41);
}

function logicaSiguiente(){
  //Botón Siguiente - su definición
  let = sePuedeSeguir = !((estado==10)||(estado===14)||(estado===16)||(estado===31));
  let botónSiguiente = delimitarBotones(435,600,575,618);
  //Lógica de activación de botón siguiente
  if ((botónSiguiente) && (sePuedeSeguir) && (!(sePuedeReiniciar))){
    sonidoBoton();
    estado++;
  }
}

function logicaRestart(){
  //Botón Restart - su definición y lógica de activación
  let = sePuedeReiniciar = ((estado===22)||(estado===28)||(estado===34)||(estado===40));
  
  let botónRestart = delimitarBotones(430,470,280,368);
  
  preguntaEstadoLogica(botónRestart,sePuedeReiniciar,0);
}

function logicaDecidir(){
  //Botones Decisiones - sus definiciones y activaciones
  let botónDerecha = delimitarBotones(390,430,480,620);
  let botónIzquierda = delimitarBotones(390,430,280,400);
  
  //Lógica de activación de boton - Elección de poder
  if (((botónDerecha)||(botónIzquierda)) && (estado===10)){
    sonidoBoton();
    estado=11;
  }
  
  //Lógica de activación de boton - Elección ACEPTAR
  preguntaEstadoLogica(botónDerecha,estado===14,15);

  //Lógica de activación de boton - Elección NEGARSE
  preguntaEstadoLogica(botónIzquierda,estado===14,29);
  
  //Lógica de activación de boton - Pelear SOLO
  preguntaEstadoLogica(botónDerecha,estado===16,17);
  
  //Lógica de activación de boton - Pelear en GRUPO
  preguntaEstadoLogica(botónIzquierda,estado===16,23);
  
  //Activación de botones - Elección IRSE
  preguntaEstadoLogica(botónDerecha,estado===31,32);

  //Activación de botones - Elección CUEVA
  preguntaEstadoLogica(botónIzquierda,estado===31,35);
}
