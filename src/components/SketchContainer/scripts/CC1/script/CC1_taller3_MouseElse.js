/*eslint-disable*/
export default function sketch(p5) {
  let ancho = 200;
  let valor = 255;
  p5.setup = () => {
    p5.createCanvas(600,600);
    // cnv.parent('main__sketch');
    p5.rectMode(p5.CENTER);
    
  }

  p5.draw = () => {
    p5.background(150);
    p5.fill(valor);
    p5.rect(p5.width/2, p5.height/2, ancho/2); 
    
    // boton Push (Solo funciona si es presionado activamente)
    
    // Si la variable 'mouseIsPressed' es verdadera entonces:
    if (p5.mouseIsPressed == true) {
      // Imprime en consola que boton se pulso
      p5.print(p5.mouseButton);  
      // IF ANIDADO
      // si el boton pulsado es el derecho:
      if (p5.mouseButton === p5.RIGHT) {
        // cambia la forma a circulo
        p5.ellipse(p5.width/2,p5.height/2,ancho)
      }
    }

  }

  // boton Toggle (switch ON/OFF)

  // Esta funcion se ejecuta cada que el mouse es clickado sin importar la tecla
  p5.mouseClicked = () => {
    // Si el valor actual del color en la figura es 0 (negro), entonces:
    if (valor === 0) {
      // cambia el calor a blanco
      valor = 255;
      
    // Sin embargo, si el valor actual del color NO es 0 (negro), entonces: 
    } else {
      // cambia el color a negro
      valor = 0;
    }
  }
}