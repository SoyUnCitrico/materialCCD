/*eslint-disable*/
export default function sketch(p5) {
  let hueZ, angCuadrado, hue;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.background(0);
    p5.colorMode(p5.HSB);
    hueZ = 0;
    angCuadrado = 0;
  }
  
  p5.draw = () => {
    // background(0);
    
    if(p5.mouseIsPressed) {
      p5.push();
      p5.rectMode(p5.CENTER);
      p5.strokeWeight(2);
      p5.stroke(200,20,220);
      p5.noFill();
      p5.translate(p5.mouseX,p5.mouseY);
      p5.rotate(angCuadrado);
      p5.rect(0,0,10);
      p5.pop();
      angCuadrado += 0.05;
   }  
     
  }
  
  // Funcion que se ejecuta al presionar algún boton del mouse
  p5.mousePressed = () => {
    p5.fill(255);
    p5.noStroke();
    p5.ellipse(p5.mouseX,p5.mouseY,50);
  }
  
  // Funcion que se ejecuta al soltar el mouse
  p5.mouseReleased = () => {
    p5.stroke(120,10,255);
    p5.strokeWeight(5);
    p5.point(p5.mouseX,p5.mouseY);
  }
  
  
  p5.mouseDragged = () => {
    p5.push();
    p5.noStroke();
    p5.fill(hueZ,360,360);
    p5.ellipse(p5.mouseX,p5.mouseY, 30);
    hueZ += 2;
    if(hueZ > 360) {
      // reinicio de la variable de color al llegar a 360
      hueZ = 0; 
    }
    p5.pop();
    // console.log(hue);
  }
  
}