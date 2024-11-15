let punio,fondo,ganar,perder;
let arrayImagen = [];
let arraySprites = [];
let arrayTexto = [];
let objPrograma;

function preload(){
  soundFormats('mp3', 'ogg');
  fondo = loadSound('/data/sonidoFondo.mp3');
  sonido = loadSound('data/sonidoMouse.mp3');
  punio = loadSound('/data/sonidoPunio.mp3');
  ganar = loadSound('/data/sonidoGanar.mp3');
  perder = loadSound('/data/sonidoPerder.mp3');
  for(i = 0; i < 4; i++){
    arrayImagen[i] = loadImage("data/imagen"+i+".jpg");
  }
  for(i = 4; i < 11; i++){
    arraySprites[i] = loadImage("data/imagen"+i+".png");
  }
  for(i = 0; i < 4; i++){
    arrayTexto[i] = loadStrings("data/texto"+i+".txt");
  } 
}

function setup() {
  createCanvas(640,480);
  rectMode(CENTER);
  textAlign(CENTER);
  punio.setVolume(1);
  objPrograma = new programa();
}

function draw() {
  objPrograma.reproducir();
  
  print(pmouseX + "/" + pmouseY);  
}

function keyPressed(){
  objPrograma.juego.teclaPresionadaPersonaje(key);
}

function mousePressed(){
  objPrograma.interacciones();
}
