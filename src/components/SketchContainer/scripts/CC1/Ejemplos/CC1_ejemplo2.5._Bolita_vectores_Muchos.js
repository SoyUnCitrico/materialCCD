/*eslint-disable*/
export default function sketch(p5) {
  // Caracteristicas de la bolita 1
  let sizeBol, posBolita, velBolita;
  // Caracteristicas de la bolita 2
  let sizeBol2, posBolita2, velBolita2;
  // Caracteristicas de la bolita 3
  let sizeBol3, posBolita3, velBolita3;
  // Caracteristicas de la frontera
  let initFrontera, finFrontera;
  let bolCol, bolCol2, bolCol3;


  p5.setup = () => {
    p5.createCanvas(600,600);
    // cnv.parent('main__sketch');
    p5.background(220);
    
    // Inicialización de variables
    sizeBol = 50;
    posBolita = p5.createVector(p5.width/4 + 10, 10);
    velBolita = p5.createVector(1, 2);
    
    sizeBol2 = 20;
    posBolita2 = p5.createVector(p5.width/4 + 10, p5.height/100);
    velBolita2 = p5.createVector(-5, -1);
    
    sizeBol3 = 10;
    posBolita3 = p5.createVector(p5.width/4 + 80, 10);
    velBolita3 = p5.createVector(5, 7);
    
    initFrontera = p5.createVector(p5.width/4,0);
    finFrontera = p5.createVector(p5.width*3/4, p5.height);
    
    // Colores de bolitas
    bolCol = p5.color(30,200,220);
    bolCol2 = p5.color(30,200,30);
    bolCol3 = p5.color(200,30,180);
    
  }

  p5.draw = () => {
    p5.background(220);
    dibujaBolita(posBolita.x,posBolita.y,sizeBol,bolCol);
    dibujaBolita(posBolita2.x,posBolita2.y,sizeBol2,bolCol2);
    dibujaBolita(posBolita3.x,posBolita3.y,sizeBol3,bolCol3);
    mueveBolitas();
    frontera(initFrontera, finFrontera);
  }

  function dibujaBolita(posX,posY,sz,col) {
    p5.push();
    p5.noFill();
    p5.stroke(col);
    p5.strokeWeight(2);
    p5.ellipse(posX,posY,sz);
    p5.pop();
  }

  function mueveBolitas() {
    posBolita.add(velBolita);
    posBolita2.add(velBolita2);
    posBolita3.add(velBolita3);
  }

  function frontera(frontIni, frontFin) {
    let inicio = frontIni.copy();
    let final = frontFin.copy();
    
    // Bolita 1
    if(posBolita.x < inicio.x || posBolita.x > final.x) {
      velBolita.x *= -1;
    }
    if(posBolita.y < inicio.y || posBolita.y > final.y) {
      velBolita.y *= -1;
    }
    
    // Bolita 2
    if(posBolita2.x < inicio.x || posBolita2.x > final.x) {
      velBolita2.x *= -1;
    }
    if(posBolita2.y < inicio.y || posBolita2.y > final.y) {
      velBolita2.y *= -1;
    }
    
    // Bolita 1
    if(posBolita3.x < inicio.x || posBolita3.x > final.x) {
      velBolita3.x *= -1;
    }
    if(posBolita3.y < inicio.y || posBolita3.y > final.y) {
      velBolita3.y *= -1;
    }
    
    // Dibujar frontera
    p5.push();
    p5.noFill();
    p5.rectMode(p5.CORNERS);
    p5.rect(inicio.x, inicio.y, final.x, final.y);
    p5.pop();
    
  }
}

