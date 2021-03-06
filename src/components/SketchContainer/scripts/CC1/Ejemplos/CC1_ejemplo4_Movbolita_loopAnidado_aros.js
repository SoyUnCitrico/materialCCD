/*eslint-disable*/
export default function sketch(p5) {
  // Variables globales 
  let diametro, x,y,aumento, vel, xInicial, yInicial;
  let size1, size2;

  p5.setup = () => {
    p5.createCanvas(600, 600);
    // cnv.parent('main__sketch');
    p5.background(220);
    p5.rectMode(p5.CENTER);
    // diametro inicial de las figuras
    diametro = 30;
    // posicion de la esquina superior izuiqerda de la figura
    xInicial = diametro*2.75;
    yInicial = diametro*2.75;
    // Variables que sirven para animar las figuras
    size1 = 0;
    size2 = 0;
    aumento = 0.075;
  }

  p5.draw = () => {
    p5.background(10);
    
    // Este for se utiliza para dibujar las figuras a lo largo del eje vertical
    for(let j = 0; j < diametro*16; j+= diametro*2.5){
      
      // Este for se utiliza para dibujar las figuras a lo largo del eje horizontal
      for(let i = 0; i < diametro*16; i += diametro*2.5){
        
        // dibuja un circulo blanco pequeño
        p5.fill(255);
        p5.noStroke();
        p5.ellipse(xInicial + i , yInicial + j, 10) ;   
        // dibuja un circulo azul
        p5.noFill();
        p5.strokeWeight(3);
        p5.stroke(0,120,255);
        p5.ellipse(xInicial + i , yInicial + j, diametro*2 + size1) ;      
        // dibuja un cuadrado rojo
        p5.stroke(255,0,0);
        p5.strokeWeight(5);
        p5.rect(xInicial + i, yInicial + j, diametro + size2)
        // aumenta la variable que aumenta el tamaño del circulo rojo
        size1+=aumento;
        
      } 
      // aumenta la variable que aumentael tamaño del cuadrado azul
      size2+=aumento;
    }
    // condicional que cambia la direccion del aumento
    // si la variable de aumento de la figura 2 es mayor a 50 o menor a 0 la variable de aumento cambia de direccion(aumento o disminucion)
    if (size2 > 30 || size2 < 0) {
      aumento *= -1;
    }
  }
}