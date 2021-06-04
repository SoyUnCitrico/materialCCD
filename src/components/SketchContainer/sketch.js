export default function sketch(p5) {
  let rotation = 0;

  p5.setup = () => p5.createCanvas(300, 300, p5.WEBGL);

  p5.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (props.rotation) {
      rotation = (props.rotation * Math.PI) / 180;
    }
  };

  p5.draw = () => {
    p5.background(100);
    p5.normalMaterial();
    p5.noStroke();

    p5.push();
    p5.translate(-40, 50);
    p5.rotateY(rotation);
    p5.rotateX(-0.9);
    p5.box(100);
    p5.pop();

    p5.noFill();
    p5.stroke(255);
    p5.push();
    p5.translate(400, p5.height * 0.35, -200);
    p5.sphere(300);
    p5.pop();
  };
}
// var backColor;
// var campo;
// var bolitas = [];
// var numBolitas = 10;
// var asteroids = []
// var numAsteroids = 20;

// let dir = false;

// function setup() {
//   createCanvas(600, 600).parent();
//   backColor = color('#00010D');
//   background(backColor);
//   campo = new FlowField(10,0.035);
//   // campo.mostrarCampo();
//   for(let i = 0; i < numAsteroids; i ++) {
//     let size = int(random(10,30));
//     asteroids[i] = new Asteroids(random(width),random(height), size,size);
//     let asteroidColor = color('#D9D9D9');
//     asteroidColor.setAlpha(random(200));
//     asteroids[i].setColor(asteroidColor);
//   }
//   for(let i = 0; i < numBolitas; i ++) {
//     bolitas[i] = new Bolita(random(width),random(height), 10,10);
//     let newColor = color(80,random(70,190),150);
//     bolitas[i].setColor(newColor);
//   }
//   console.log(asteroids);
//   // let vectors = campo.getVectors();
//   // console.log(vectors);
// }
// function  draw() {
//   drawBackground();
//   // Movimiento del campo
//   // campo.girarCampo(dir);
//   campo.randomCampo(dir);
//   // campo.mostrarCampo();
//   let vectors = campo.getVectors();
//   // Movimiento de las bolitas
//   for(let i = 0; i < numBolitas; i ++) {
//     bolitas[i].followField(vectors[i],5);
//     bolitas[i].dibujar();
//     bolitas[i].dibujarTrail();
//   }
//   // Mostrar info en el canvas
//   // push();
//   // noStroke();
//   // fill(255);
//   // text(str(campo.field[0].v),100,100);
//   // text(str(campo.field.length),100,150);
//   // let v = campo.getVectors();
//   // text(str(v),100,200);
//   // pop();
// }
// function drawBackground() {
//   push();
//   background(backColor);
//   for(let i = 0; i < numAsteroids; i ++) {
//     asteroids[i].dibujar();
//   }
//   pop();
// }
// const changeDirection = setInterval( () => {
//   dir = !dir;
// },10000);
