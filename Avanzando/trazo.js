class Trazo {

    constructor(x,y,obra, tinte){
        this.x = x;
        this.y = y;
        this.imagen = obra;
        this.color = tinte;
        this.velocidad = 2;
    }


    dibujar() {
        push();
            tint(this.color);
            translate(this.x,this.y);
            scale(random(0.8,1.5));
            image(this.imagen,0,0);
        pop();
    }

    moverDerecha(){
        this.x += this.velocidad;
        if (this.x > width) {
          this.x = -40; // reinicia fuera de pantalla a la izquierda
        }
    }

    moverIzquierda(){
        this.x -= this.velocidad;
        if (this.x > width) {
          this.x = windowWidth + 40; // reinicia fuera de pantalla a la derecha
        }
    }
}
