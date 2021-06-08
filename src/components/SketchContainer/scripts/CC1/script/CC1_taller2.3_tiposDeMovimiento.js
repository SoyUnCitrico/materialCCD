/*eslint-disable*/

export default function sketch(p5) {
    // Declaracion de refencias para la animacion 
  let frame1;
  let frame2;
  let frame3;
  let frame4;
  // Variable para el PerlinNoise
  let noize = 0;

  p5.setup = () => {
    p5.createCanvas(600, 600);
    frame1 = 0;
    frame2 = 0;
    frame3 = 0;
    frame4 = 0;
  }

  p5.draw = () => {
    p5.background(0);
    
    // Dibuja un circulo rojo que aumenta linealmente de 1 e 1
    p5.push();
    p5.noFill();
    p5.strokeWeight(5);
    p5.stroke(255,50,50);
    circool(frame1);
    p5.pop();
    frame1++;
    
    // Dibuja un circulo verde que aumenta linealmente por un factor de 4 respecto a la animacion anterior
    p5.push();
    p5.noFill();
    p5.strokeWeight(5);
    p5.stroke(50,150,0);
    circool(frame2);
    p5.pop();
    frame2 = frame1 * 4;
    
    // Dibuja un circulo azul que varia su tamaño en un valor completamente aleatorio entre 50 y 250
    p5.push();
    p5.noFill();
    p5.strokeWeight(5);
    p5.stroke(80,180,255);
    circool(frame3);
    p5.pop();
    frame3 = p5.random(0,200);
    
    
    // Dibuja un circulo rosa que varia su tamaño de forma aleatoria entre 50 y 250 pero siguiendo el algoritmo de Perlin Noise
    p5.push();
    p5.noFill();
    p5.strokeWeight(5);
    p5.stroke(255,80,200);
    circool(frame4);
    p5.pop();
    frame4 = 200 * p5.noise(noize);
    // control de variacion en perlin noise
    noize += 0.1;
  }

      
  function circool(frame){
    p5.ellipse(p5.width/2, p5.height/2, 50 + frame);
  }
}