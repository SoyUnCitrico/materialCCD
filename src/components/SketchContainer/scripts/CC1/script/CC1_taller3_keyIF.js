/*eslint-disable*/
export default function sketch(p5) {
  let x, y, yVar; 

  p5.setup = () => {
    p5.createCanvas(600,600);
    // cnv.parent('main__sketch');
    p5.fill(100, 245, 158);
    p5.textSize(50);
    p5.background(10);
    x = 0; 
    y = 50;
    yVar = 0;
  }
  p5.draw = () => {
  }

  p5.keyPressed = (e) => {
    p5.text(p5.key, x, y + 20 * Math.sin(yVar)); 
    // La variable 'key' esta definida en p5 y devulve la tecla presionada
    p5.print(p5.key);  
    
    // La variable 'keyCode' devuelve el nombre de algunas teclas especiales
    // Si la tecla presionada es 'Backspace', dibuja el fonodo de negro y cambia el color del texto
    if(p5.key == "Backspace")
      {
        p5.background(10);
        p5.fill(100, p5.random(245), p5.random(158));
      }
    
    // Variables de aumento para la posicion de las letras
    x+=10;
    yVar += 0.5;
    
    // Si la poscion de las letras en el eje X es mayor al ancho del lienzo regresa al princio del eje horizontal y baja 50px mas en el eje vertical
    if(x>p5.width) {
      x = 0;
      y += 50;
    }
    // Si la poscion de las letras en el eje Y es mayor al alto del lienzo regresa a la posicion original  
    if(y>p5.height) {
      x = 0; 
      y = 50;
    }
}

}
