let arrayImagen = [ ];
let arrayTexto = [ ];
let ancho = 640;
let alto = 480;

function preload() {
  for(i = 0; i < 41; i++){
    arrayImagen[i] = loadImage("data/imagen"+i+".jpg");
  }
  
 for(i = 0; i < 41; i++){
    arrayTexto[i] = loadStrings("data/texto"+i+".txt");
  } 
  
}
//Trabajo Práctico FINAL (parte 1)
//Comisión 2
//Equipo:

//  •  Maria Emilia Garrido: 120315/6

//  •  Yesica Lorena Correa: 119001/3 

//Videojuego: Scott Pilgrim: Takes Off

//Video Youtube: 


function setup() {
  createCanvas(640,480);
  background(0);
  textAlign(LEFT);
  textSize(15);
  estado=0;
}

function draw() {
  
  //Pantalla Menú
  let botónCréditos = ((mouseY >= 440) && (mouseY <= 460) && (mouseX >= 280) && (mouseX <= 365));
  if (estado===0){
    menu();
    if ((mouseIsPressed)&&(botónCréditos)){
      creditos();
    }
  }
  
  //Inicio de la aventura
  if ((estado>0) && (estado<11)){
    cambioEstado(1,estado,11);
  }
  
  //Desición de poder
  if (estado===10){
    desicion(estado);
  }
  
  //Continúa la aventura
  if ((estado>10)&&(estado<15)){
    cambioEstado(11,estado,15);
  }
  
  //Decision ACEPTAR o NEGARSE
  if(estado===14){
    desicion(estado);
  }
  
  //Primera rama (aceptar)
  if ((estado>14)&&(estado<17)){
    cambioEstado(15,estado,17);
  }
  
  //Decisión ir SOLO o en GRUPO
  if(estado===16){
    desicion(estado);
  }
  
  //Rama ir SOLO
  if ((estado>16)&&(estado<23)){
    cinematica(17,estado,23);
  }
  
  //Final rama ir SOLO
  if (estado===22){
    dibujaRestart();
  }
  
  //Rama ir en GRUPO
  if ((estado>22)&&(estado<29)){
    cinematica(23,estado,29);
  }
  
  //Final ir en GRUPO
  if (estado===28){
    dibujaRestart();
  }
  
  //Rama NEGARSE
  if ((estado>=29)&&(estado<31)){
    cambioEstado(29,estado,31);
  }
  
  //Decision CUEVA o IRSE
  if(estado===31){
    desicion(estado);
  }
  
  //Rama desicion IRSE
  if ((estado>31)&&(estado<35)){
    cinematica(32,estado,35);
  }
  //Final de IRSE
  if (estado===34){
    dibujaRestart();
  }
  
  //Rama decision CUEVA
  if ((estado>34)&&(estado<41)){
    cinematica(35,estado,41);
  }
  //Final decision CUEVA
  if (estado===40){
    dibujaRestart();
  }
  
  //ayudas
  print(pmouseX + "/" + pmouseY);  
  print("estado:" + estado);
}

function mousePressed(){
  //Definición limitación de botones
  let botónSiguiente = ((mouseY >= 440) && (mouseY <= 460) && (mouseX >= 550) && (mouseX <= 600));
  let botónStart = ((mouseY >= 373) && (mouseY <= 413) && (mouseX >= 280) && (mouseX <= 365));
  let botónCréditos = ((mouseY >= 440) && (mouseY <= 460) && (mouseX >= 280) && (mouseX <= 365));
  let botónRestart = ((mouseY >= 373) && (mouseY <= 413) && (mouseX >= 280) && (mouseX <= 365));
  let botónDerecha = ((mouseY >= 390) && (mouseY <= 430) && (mouseX >= 480) && (mouseX <= 565));
  let botónIzquierda = ((mouseY >= 390) && (mouseY <= 430) && (mouseX >= 280) && (mouseX <= 365));
  
  //Definición PREGUNTAS LÓGICAS
  let = sePuedeReiniciar = ((estado===22)||(estado===28)||(estado===34)||(estado===40)); 
  let = sePuedeComenzar = (estado===0);
  let = sePuedeSeguir = !((estado==10)||(estado===14)||(estado===16)||(estado===31));
  
  if ((botónStart)&&(sePuedeComenzar)){
    estado=1;
  }
  
  //Activación de botón siguiente
  if ((botónSiguiente) && (sePuedeSeguir)){
    estado++;
  }
  
  //Activación de botones - Elección de poder
  if (((botónDerecha)||(botónIzquierda)) && (estado===10)){
    estado=11;
  }
  
  //Activación de botones - Elección ACEPTAR 
  if ((botónDerecha)&&(estado===14)){
    estado=15;
  }
  //Activación de botones - Elección NEGARSE
  if ((botónIzquierda)&&(estado===14)){
    estado=29;
  }
  
  //Activación de botones - Pelear SOLO
    if ((botónDerecha)&&(estado===16)){
    estado=17;
  }
  //Activación de botones - Pelear en GRUPO
  if ((botónIzquierda)&&(estado===16)){
    estado=23;
  }
  
  //Activación de botones - Elección IRSE 
  if ((botónDerecha)&&(estado===31)){
    estado=32;
  }
  //Activación de botones - Elección CUEVA
  if ((botónIzquierda)&&(estado===31)){
    estado=35;
  }
  
  //Activación de botones - Reinicio
  if ((botónRestart)&&(sePuedeReiniciar)){
    estado=0;
  }
}
