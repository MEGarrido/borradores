//Aprendiendo a usar sonidosss
//https://thecodingtrain.com/tracks/sound/sound/1-loading-and-playing

let song;

function preload(){
  soundFormats('mp3', 'ogg');
  song = loadSound('/data/sonido1.mp3');
}

function setup() {
  createCanvas(400,400);
  background(230);
  song.setVolume(0.5);
}


function draw() {
  song.play();

}
