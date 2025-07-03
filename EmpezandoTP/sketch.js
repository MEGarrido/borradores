
let trazos = []; //arreglo de trazos
let canT = 83; //cantidad de trazos

let numT = 8;
let margenAncho, margenAlto;

let paleta;
let sorteo;

let AMP_MIN = 0.002;
let AMP_MAX = 0.025;

let estado = 0; //estado del sketch


function preload(){

  paleta = new Paleta ('data/paleta0.jpg');

  for(let i=0; i<canT; i++){
    trazos[i] = loadImage('data/trazo'+ i +'.png' ); //cargamos una por una los trazos al sketch
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

  sorteo = int(random(1,12));

  print (sorteo);
}

function draw() {

  //image(paleta[1],windowWidth/2, windowHeight/2);

  if(estado == 0){
    dibujarFondo();
  }else if(estado == 1){
    dibujarTrazos(); 
  }

  amp = mic.getLevel(); // devuelve el valor de amplitud de la señal de entrada de audio

  /*push();

  textSize(20);
  fill(255);
  let texto = "Amplitud: " + nfc(amp, 3);
  text(texto, 50, 50);

  noStroke();
  fill(255, 0, 0);
  let posY = map(amp, AMP_MIN, AMP_MAX, height, 0);
  ellipse(width/2, posY, 30, 30);

  pop();*/
}


function dibujarFondo(){

  for(let m = 0; m < 27; m++){
    push();
    tint(paleta.darUnColor());
    translate(windowWidth/2, windowHeight/2);
    scale(0.84);
    image(trazos[int(random(73,83))],0,0);
    pop();
  }
  print('termino de dibujar');
  estado = 1;//cambiamos el estado del sketch
  print('estado:'+ estado);
}

function dibujarTrazos(){
  let cual = int(random (canT));

if(numT>0){
  for(let n = 0; n < 5; n++){
    push();
    let cual = int(random (0,72));
    let x = random(150, margenAncho);
    let y = random(0, margenAlto);
    
    tint(paleta.darUnColor());

    translate(x,y);
    scale(random(0.8,1.5));
    image(trazos[cual],0,0);
    pop();
  }
  numT = numT - 1;
}
}