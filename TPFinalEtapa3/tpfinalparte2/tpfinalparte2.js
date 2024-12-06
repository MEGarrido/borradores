//Trabajo Práctico FINAL (parte 2)
//Comisión 2
//Equipo:

//  •  Maria Emilia Garrido: 120315/6

//  •  Yesica Lorena Correa: 119001/3 

//Videojuego: Scott Pilgrim: Takes Off

//Video Youtube (Emilia): https://youtu.be/JSVRmOaaSrY

let punio,fondo,ganar,perder;
let arrayImagen = [];
let arraySprites = [];
let arrayTexto = [];
let objPrograma;

function preload(){
  soundFormats('mp3', 'ogg');
  sonido = loadSound('data/sonidoMouse.mp3');
  punio = loadSound('data/sonidoPunio.mp3');
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
  punio.setVolume(0.3);
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
