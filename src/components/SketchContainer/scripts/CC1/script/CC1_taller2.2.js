/*eslint-disable*/

// Declaracion de variables 
export default function sketch(p5) {
  let xBolita;
  let yBolita;
  let xCuadrito;
  let yCuadrito;
  let frame;
  let angle;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    // Inicializacion de variables
    xBolita = 0; 
    yBolita = 0;
    xCuadrito = 0;
    yCuadrito = 0;
    // Configuracion para la referencia de los rectangulos
    p5.rectMode(p5.CENTER);
    p5.angleMode(p5.DEGREES);
    frame = 0;
    angle = 0;
  }

  p5.draw = () => {
    //Cada que se reinicia el codigo se vuelve a pintar el lienzo del mismo color, logrando el efecto de animación
    p5.background(0);
    // Dibuja un circulo y cada vez que se repita el codigo suma 1 a la posicion en X y Y del circulo 
    p5.ellipse(xBolita + frame, yBolita + frame, 50);
    // Llamado a ejecucion de la funcion cuadrito
    cuadrito(frame);
    // Llamado a ejecucion de la funcion circool
    circool(frame);
    // Incremento del frame como referencia para la animación
    frame++;
  }

  function cuadrito(frame){
    // Bloqueo de la matriz de dibujo, con esto se aplican las opciones de estilo solo a las instrucciones que estes dentro de push y pop
    angle += 3;
    p5.push();
    p5.noStroke();
    p5.fill(0,255,0);
    // Transformacion de posicion en el canvas
    p5.translate(400-frame,frame);
    // transformacion de rotacion 
    p5.rotate(angle);
    p5.rect(xCuadrito, yCuadrito, 50);
    // Imprime el angulo en consola
    // console.log(angle);
    p5.pop();
  }
     
  function circool(frame){
    p5.push();
    p5.noFill();
    p5.strokeWeight(5);
    p5.stroke(0,100,200);
    // Transformacion de tamaño del circulos central, cada nuevo frame se actualiza el tamaño del circulo
    p5.ellipse(p5.width/2, p5.height/2, 50 + frame);
    p5.pop();
  }

}

