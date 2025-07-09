
let cargaTrazos = []; //arreglo de trazos
let canT = 83; //cantidad de trazos

let numT = 15;
let margenAncho, margenAlto;

let paleta;
let trazos = [];
let sorteo;

let AMP_MIN = 0.002;
let AMP_MAX = 0.025;

let volumenMIN = 0.015;
let volumenMAX = 0.025;

let estado = 0; //estado del sketch

let amp;


function preload(){

  paleta = new Paleta ('data/paleta0.jpg');

  for(let i=0; i<canT; i++){
    cargaTrazos[i] = loadImage('data/trazo'+ i +'.png' ); //cargamos una por una los trazos al sketch
  }

}


function setup() {

  createCanvas(windowWidth, windowHeight);

  background(255);//fondo blanco

  imageMode(CENTER);
  colorMode(RGB);

  margenAncho = windowWidth - 150;
  margenAlto = windowHeight;

  mic = new p5.AudioIn(); // toma el audio de la entrada de sonido y la carga en la variabble mic
  mic.start(); // inicializa en micrófono

}

function draw() {
  background(255);


  /*for(let i=0; i<72; i++){
    let x = random(150, margenAncho);
    let y = random(0, margenAlto);
    trazos[i] = new Trazo(x,y,cargaTrazos[i],paleta.darUnColor()); //cargamos una por una los trazos al sketch
  }



  if(estado == 0){
    dibujarFondo();
  }else if(estado == 1){
    dibujarTrazos(); 
  }else if(estado==2){
    interacciones();
  }
  */

  amp = mic.getLevel(); // devuelve el valor de amplitud de la señal de entrada de audio

  push();

  textSize(20);
  fill(0);
  let texto = "Amplitud: " + nfc(amp, 3);
  text(texto, 50, 50);

  noStroke();
  fill(255, 0, 0);
  let posY = map(amp, AMP_MIN, AMP_MAX, height, 0);
  ellipse(width/2, posY, 30, 30);

  pop();
}

function dibujarFondo(){

  for(let m = 0; m < 27; m++){
    push();
    tint(paleta.darUnColor());
    translate(windowWidth/2, windowHeight/2);
    scale(0.84);
    image(cargaTrazos[int(random(73,83))],0,0);
    pop();
  }
  print('termino de dibujar');
  estado = 1;//cambiamos el estado del sketch
  print('estado:'+ estado);
}

function dibujarTrazos(){
  let cual = int(random (0,72));
  if(numT>0){
   for(let n = 0; n < 5; n++){
     trazos[cual].dibujar();
   }
  numT = numT - 1;
  }
  print('termino de trazear');
  estado = 2;//cambiamos el estado del sketch
  print('estado:'+ estado);
}

function interacciones(){
  for(let a = 0; a < 72; a++){
    if((amp > volumenMAX) && (a%2 == 0)){
      trazos[a].moverDerecha();
    }else if(amp < volumenMIN){
      trazos[a].moverIzquierda();
    }
  }
}