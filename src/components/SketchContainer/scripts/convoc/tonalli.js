/*eslint-disable*/
// import * as p5 from "p5";
// window.p5 = p5;
// import "../libraries/p5.sound";
// import mySong from "../../assets/audio/nena.mp3";
// const Sketch = (p5) => {
export default function sketch(p5) {
  let color1, color2, aumento, aumento1, r,b,g, m;
  let angulo = 0;
  let song;
  let slider;
  let diametro;
  let size;
  let a, c,d;

  // p5.preload = () => {
  //   song = p5.loadSound(url("../audio/nena.mp3"), () =>{
  //     console.log("La canción ha sido cargada");
  //   });
  // }

  p5.setup = () => {
    p5.createCanvas(800, 800);
    slider = p5.createSlider(0,1,0.5,0.01);
    slider.style("display", "grid");
    color1= p5.color(200,10,210)
    color2= p5.color(50,255,180)
    aumento = 1
    r =200
    b=250
    g=0
    m=100
    p5.angleMode(p5.DEGREES)
    aumento1 =5
    diametro = 100
    size = 0
    a=220
    c=250
    d=200
  }

  // function loaded() {
  //   song.play();
  // }

  p5.draw = () => {
    p5.background(color1);
    // song.setVolume(slider.value());
    p5.fill(color2);
    p5.noStroke();
    p5.rect(0,600,800,200);
  
    triangulos();
  
    p5.fill(r,b,m);
    p5.rect(150,250,500,400);
    m+=aumento;
    if(m > 255 || m < 0)
      aumento *=-1;
    cassette();
    
    p5.push();
    circulo1();
    p5.pop();
    // puntos();
    circulos();
  }

function circulos() {
  p5.fill(a,c,d);
  p5.strokeWeight(diametro/2);
  p5.stroke(d,0,a);
  p5.circle(0,800, diametro + size);
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
  
  p5.fill(a,c,d);
  p5.strokeWeight(diametro/2);
  p5.stroke(d,0,a);
  p5.circle(800,800, diametro + size);
  
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
  p5.noStroke()  
  p5.fill(r,g,b)
  p5.triangle(0,0,400,200,0,400)
  p5.fill(r,g,b)
  p5.triangle(800,0,400,200,800,400)
  
  p5.fill(r,g,b)
  p5.triangle(200,600,400,200,600,600)
  
  p5.fill (r,g,b)
  p5.triangle (300,0,400,200,500,0)
  
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
    p5.fill(185)
    p5.strokeWeight(1)
    p5.stroke(0)
    p5.rect(200,300,400,250,10)
    
    p5.fill(155)
    p5.strokeWeight(1)
    p5.stroke(0)
    p5.quad(255,550,290,510,510,510,545,550)
    
    p5.fill(255)
    p5.rect(220,320,360,180,10)
    
    p5.strokeWeight(8)
    p5.stroke(255,0,0)
    p5.line(500,410,577,410)
    
    p5.strokeWeight(8)
    p5.stroke(0,0,255)
    p5.line(500,420,577,420)
    
    p5.strokeWeight(8)
    p5.stroke(0,255,0)
    p5.line(500,430,577,430)
    
    p5.strokeWeight(2)
    p5.stroke(0)
    p5.fill(200)
    p5.rect(260,385,280,80,10)
    
    p5.strokeWeight(2)
    p5.stroke(0)
    p5.line(260,350,540,350)
    
    p5.strokeWeight(2)
    p5.stroke(0)
    p5.line(260,370,540,370)
  }

  function circulo1() {
    p5.push()
    p5.translate(330,425)
    p5.rotate(angulo)
    p5.stroke(0)
    p5.strokeWeight(6)
    p5.fill(87,35,m)
    p5.circle(0,0,50)
    p5.stroke(255)
    p5.strokeWeight(5)
    p5.point(25,0)
    p5.pop();

    p5.translate(470,425)
    p5.rotate(angulo)
    p5.stroke(0)
    p5.strokeWeight(6)
    p5.fill(87,35,m)
    p5.circle(0,0,50)
    p5.stroke(255)
    p5.strokeWeight(5)
    p5.point(25,0)
    angulo = angulo + 1
    m+=aumento;
    if(m > 255 || m < 0)
      aumento *=-1;
  }
}
