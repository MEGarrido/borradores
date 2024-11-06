//Trabajo Práctico FINAL (parte 1)
//Comisión 2
//Equipo:

//  •  Maria Emilia Garrido: 120315/6

//  •  Yesica Lorena Correa: 119001/3 

//Videojuego: Scott Pilgrim: Takes Off

//Video Youtube (Emilia):

let arrayImagen = [ ];
let arrayTexto = [ ];
let ancho = 640;
let alto = 480;
let estado;
let sonido, fondo;

let colorRestart, colorStart, colorCreditos, colorAtras, colorSiguiente, colorDecision, colorExtra;

function preload() {
  soundFormats('mp3', 'ogg');
  fondo = loadSound('/data/sonidoFondo.mp3');
  sonido = loadSound('/data/sonidoMouse.mp3');
  for(i = 0; i < 41; i++){
    arrayImagen[i] = loadImage("data/imagen"+i+".jpg");
  }
  
 for(i = 0; i < 41; i++){
    arrayTexto[i] = loadStrings("data/texto"+i+".txt");
  } 
  
}

function setup() {
  createCanvas(640,480);
  background(0);
  textAlign(LEFT);
  textSize(15);
  colorRestart = color(0, 255, 0);
  colorStart = color(255, 215, 0);
  colorCreditos = color(0, 255, 255);
  colorAtras = color(155);
  colorSiguiente = color(200, 0, 0);
  colorDecision = color(255, 165, 0);
  colorExtra = color(255, 0, 255);
  fondo.setVolume(0.1);
  sonido.setVolume(0.5);
  estado=0;
}

function draw() {
  //Reproducción de la aventura
  aventura(estado);
  
  //ayudas
  print(pmouseX + "/" + pmouseY);  
  print("estado:" + estado);
}

function mousePressed(){
  
  musica();
  
  logicaAtras();
  
  logicaStart();
  
  logicaCreditos();
  
  logicaSiguiente();
  
  logicaRestart();
  
  logicaDecidir();
  
}
