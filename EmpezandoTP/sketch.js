
let trazos = []; //arreglo de trazos
let canT = 73; //cantidad de trazos
let obras = [];
let cantP = 4;

let numT = 25;
let margenAncho, margenAlto;

let paleta1, paleta2, paleta3, paleta4;
let sorteo;



function preload(){

  paleta1 = new Paleta ('data/paleta0.jpg');
  //paleta2 = new Paleta ('data/obra1.jpg');
  //paleta3 = new Paleta ('data/obra2.jpg');
  //paleta4 = new Paleta ('data/obra3.jpg');

  for(let i=0; i<canT; i++){
    trazos[i] = loadImage('data/trazo'+ i +'.png' ); //cargamos una por una los trazos al sketch
  }

  //for(let i = 0; i < cantP; i++){
  //  obras[i] = loadImage('data/obra'+ i +'.jpg' ); //cargamos una por una los trazos al sketch
  //}

}


function setup() {
  createCanvas(windowWidth, windowHeight);

  background(255);

  imageMode(CENTER);
  colorMode(RGB);


  margenAncho = windowWidth + 50;
  margenAlto = windowHeight + 50;

  sorteo = int(random(1,12));

  //sorteada = random(0,3);

  //paleta = new Paleta (obras[sorteada]);
  print (sorteo);
}

function draw() {
  //image(paleta[1],windowWidth/2, windowHeight/2);

  let cual = int(random (canT));
  let x = random(-50, margenAncho);
  let y = random(-50, margenAlto);

if(numT>0){
  for(let n = 0; n < 5; n++){
    push();
    let cual = int(random (canT));
    let x = random(width);
    let y = random(height);
    //tint(random(255), random(255), random(255));
    //definoPaleta();
    
    tint(paleta1.darUnColor());
    stroke(255);
    strokeWeight(5);

    translate(x,y);
    scale(random(0.5,1.5));
    image(trazos[cual],0,0);
    pop();
  }
  numT = numT - 1;
}
}

//function definoPaleta(){
  //if (sorteo <= 3){
    //tint(paleta1.darUnColor());
  //}else if (sorteo <= 6){
    //tint(paleta2.darUnColor());
  //}else if (sorteo <= 9){
    //tint(paleta3.darUnColor());
  //}else{
    //tint(paleta4.darUnColor());
  //}
//}
