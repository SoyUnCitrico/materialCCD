/*eslint-disable*/
import * as p5 from "p5";
window.p5 = p5;

// import  mySong from "./assets/nena.mp3";
// console.log(mySong);

export default function sketch(p5basic) {
  let color1, color2, aumento, aumento1, r,b,g, m;
  let angulo = 0;
  let song;
  let slider;
  let diametro;
  let size;
  let a, c,d;

  p5basic.preload = () => {
    console.log("PRECARGANDO");
    song = 0;
    console.log(song);
  }

  p5basic.setup = () => {
    p5basic.createCanvas(800, 800);
    slider = p5basic.createSlider(0,1,0.5,0.01);
    slider.style("display", "grid");
    color1= p5basic.color(200,10,210)
    color2= p5basic.color(50,255,180)
    aumento = 1
    r =200
    b=250
    g=0
    m=100
    p5basic.angleMode(p5basic.DEGREES)
    aumento1 =5
    diametro = 100
    size = 0
    a=220
    c=250
    d=200
  }

  p5basic.mousePressed = () => {
    console.log("Activando cancion");
  }

  p5basic.draw = () => {
    p5basic.background(color1);
    // song.setVolume(slider.value());
    p5basic.fill(color2);
    p5basic.noStroke();
    p5basic.rect(0,600,800,200);
  
    triangulos();
  
    p5basic.fill(r,b,m);
    p5basic.rect(150,250,500,400);
    m+=aumento;
    if(m > 255 || m < 0)
      aumento *=-1;
    cassette();
    
    p5basic.push();
    circulo1();
    p5basic.pop();
    // puntos();
    circulos();
  }

function circulos() {
  p5basic.fill(a,c,d);
  p5basic.strokeWeight(diametro/2);
  p5basic.stroke(d,0,a);
  p5basic.circle(0,800, diametro + size);
  a+=aumento;
  if(a > 255 || a < 0)
    aumento *=-1;
  c += aumento;
  if(c > 255 || c < 0) 
    aumento *=-1;
  d += aumento;
  if(d > 255 || d < 0) 
    aumento *=-2;
  size+=aumento1;
  if(size > 550 || size < 0)
    aumento1 *=-1;
  
  p5basic.fill(a,c,d);
  p5basic.strokeWeight(diametro/2);
  p5basic.stroke(d,0,a);
  p5basic.circle(800,800, diametro + size);
  
  a+=aumento;
  if(a > 255 || a < 0)
    aumento *=-1;
  c += aumento;
  if(c > 255 || c < 0)
    aumento *=-1;
  d += aumento;
  if(d > 255 || d < 0 )
    aumento *=-2;
  size+=aumento1;
  if(size > 550 || size < 0)
      aumento1 *=-1;
  }
  

function triangulos() {  
  p5basic.noStroke()  
  p5basic.fill(r,g,b)
  p5basic.triangle(0,0,400,200,0,400)
  p5basic.fill(r,g,b)
  p5basic.triangle(800,0,400,200,800,400)
  
  p5basic.fill(r,g,b)
  p5basic.triangle(200,600,400,200,600,600)
  
  p5basic.fill (r,g,b)
  p5basic.triangle (300,0,400,200,500,0)
  
   r+=aumento;
  if(r > 255 || r < 0)
    aumento *=-1;
  
  g+=aumento;
  if(g > 255 || g < 0)
    aumento *=-1;
  
   b+=aumento;
  if(b > 255 || b < 0)
    aumento *=-1;
}
  
  function cassette() {
    p5basic.fill(185)
    p5basic.strokeWeight(1)
    p5basic.stroke(0)
    p5basic.rect(200,300,400,250,10)
    
    p5basic.fill(155)
    p5basic.strokeWeight(1)
    p5basic.stroke(0)
    p5basic.quad(255,550,290,510,510,510,545,550)
    
    p5basic.fill(255)
    p5basic.rect(220,320,360,180,10)
    
    p5basic.strokeWeight(8)
    p5basic.stroke(255,0,0)
    p5basic.line(500,410,577,410)
    
    p5basic.strokeWeight(8)
    p5basic.stroke(0,0,255)
    p5basic.line(500,420,577,420)
    
    p5basic.strokeWeight(8)
    p5basic.stroke(0,255,0)
    p5basic.line(500,430,577,430)
    
    p5basic.strokeWeight(2)
    p5basic.stroke(0)
    p5basic.fill(200)
    p5basic.rect(260,385,280,80,10)
    
    p5basic.strokeWeight(2)
    p5basic.stroke(0)
    p5basic.line(260,350,540,350)
    
    p5basic.strokeWeight(2)
    p5basic.stroke(0)
    p5basic.line(260,370,540,370)
  }

  function circulo1() {
    p5basic.push()
    p5basic.translate(330,425)
    p5basic.rotate(angulo)
    p5basic.stroke(0)
    p5basic.strokeWeight(6)
    p5basic.fill(87,35,m)
    p5basic.circle(0,0,50)
    p5basic.stroke(255)
    p5basic.strokeWeight(5)
    p5basic.point(25,0)
    p5basic.pop();

    p5basic.translate(470,425)
    p5basic.rotate(angulo)
    p5basic.stroke(0)
    p5basic.strokeWeight(6)
    p5basic.fill(87,35,m)
    p5basic.circle(0,0,50)
    p5basic.stroke(255)
    p5basic.strokeWeight(5)
    p5basic.point(25,0)
    angulo = angulo + 1
    m+=aumento;
    if(m > 255 || m < 0)
      aumento *=-1;
  }
}
