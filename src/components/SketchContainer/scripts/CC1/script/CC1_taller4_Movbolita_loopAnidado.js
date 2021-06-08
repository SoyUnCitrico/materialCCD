/*eslint-disable*/
export default function sketch(p5) {
  // Declaracion de variables
  let separacion, x,y,ref, nZ, xVar;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    // cnv.parent('sketch');
    p5.background(0);
    // Separacion entre los circulos
    separacion = 40;
    // posicion del primer circulo de la matriz(superior izquierda)
    x = separacion;
    y = separacion;
    xVar = 0;
    ref = 0;
    
    nZ = p5.random(100);
    p5.frameRate(30);  
  }

  p5.draw = () => {
    // p5.background(0);
    
    for(let j = 0; j < (p5.height - separacion*1.5); j += separacion*2){
      for(let i = 0; i < (p5.width - separacion*1.5); i += separacion*2){
        // Instrucciones de dibujo
        
        // Hace un circulo blanco
        p5.noStroke();
        p5.fill(255);
        // Cada que se repite el codigo se modifica la posicion en 'x' y 'y', en trayectoria circular
        // ellipse(x, y, 15);      
        // ellipse(x + i, y + j, 15);      
        p5.ellipse(x + i + 20*Math.cos(ref), y + j + 20*Math.sin(ref), 15);      
        
        // Hace un ellipse 
        p5.noStroke();
        // fill(255*noise(nZ));
        p5.fill(50,255*p5.noise(nZ),0);
        
        nZ += .05;
        // ellipse(x,y,10,5);
        // ellipse(x + i - 10*cos(ref), y + j,10,5); 
        // ellipse(x + i, y + j - 10*sin(ref),10,5); 
        p5.ellipse(x + i - 10*Math.cos(ref), y + j - 10*Math.sin(ref),10,5);   
        
        // aumento de la variable para posicion circular
        ref += 0.01;  
        
      }
      
    }
    
  }
  }