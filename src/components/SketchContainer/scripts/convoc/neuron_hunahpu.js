/*eslint-disable*/
import miFuente from "./assets/FiraCode-Regular.ttf";
export default function sketch(p5) {


let neurons, connexions;
let pot = 7
let M = Math.pow(2, pot)
let n = Math.pow(2, pot)
let dM = 150
let r = 20
let r2 = 10
let k = 3
let song
let onda;
let fft;
let spectrum;
let myFont
let start = false

p5.preload = () => {
  // song = loadSound("../assets/audio/temyst.mp3");
  myFont = p5.loadFont(miFuente, () =>{
    console.log("fuente cargada")
  });
}


p5.setup = () => {
  p5.createCanvas(800, 800, p5.WEBGL);
  p5.colorMode(p5.HSB, 360, 100, 100)
  // fft = new p5.FFT()
  p5.background(11, 11, 11);
  p5.textAlign(p5.CENTER, p5.CENTER);
  p5.textSize(200);
  p5.textFont(myFont)
  p5.text("click para iniciar", 0, 0);

}

function init() {
  // p5.background(11, 11, 11);

  neurons = []
  connexions = []

  for (let i = 0; i < M; i++) {
    neurons.push(new Neuron(i))
  }

  for (let neuron of neurons)
    neuron.find_nh()

}

function d(x, y, a, z, w, b) {
  return Math.sqrt((x - z) * (x - z) + (y - w) * (y - w) + (a - b) * (a - b))
}

let a = 0
let b = 0
//let t = 0


p5.draw = () => {
  p5.background(0, 0, 0, 30);
  if (start) {
    p5.camera(0, 0, p5.width * 1.5, 0, 0, 0, 0, 1, 0);
    p5.rotateX(+b)
    p5.rotateY(+a)
    // spectrum = fft.analyze();
    // onda = fft.waveform(n)
    for (let neuron of neurons) {
      neuron.draw_connections()
    }

    for (let neuron of neurons) {
      neuron.glow()
    }

    // let c = 0
    for (let neuron of neurons) {
      // console.log(neuron)
      let R = 8/255;
      // let R = spectrum[neuron.id] / 255
      // for (let v of neuron.connexions) {
        // R += spectrum[v] * onda[v] / 100
      // }
      if (p5.abs(R) > 0.43) {
        neuron.active = true
      }
      neuron.draw(r + 2 * (r * R / 5))

    }
    a += 0.01
    b += 0.009
  } else {
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textSize(50);
    p5.textFont(myFont)
    p5.text("click para iniciar", 0, 0);
  }
}

p5.mousePressed = () => {
  init()
  p5.loop()
  // song.stop()
  // song.play(0.01)
  start=true
}

p5.keyPressed = () => {
  // toggleSong()
}

// function toggleSong() {
  // let status = song.isPlaying();
  // song.isPlaying() == true ? song.pause() : song.play();
// }


class Neuron {
    constructor(id) {
      let px
      let py
      let pz
      let intersected;
      do {
        intersected = 0;
        px = p5.random(-p5.width/2+r, p5.width/2 - r)
        py = p5.random(-p5.height/2+r, p5.height/2 - r)
        pz = p5.random(-p5.height/2+r, p5.height/2 - r)
        for (let neuron of neurons) {
          if (d(px, py, pz, neuron.x, neuron.y,neuron.z) < (2.7)*r) {
            intersected = 1;
            break;
          }
        }
      } while (intersected);
      this.x = px;
      this.y = py;
      this.z = pz;
      this.color = p5.random() * 360
      this.connections = []
      this.active = false
      this.v = p5.random(0.01)
      this.a=0
      this.id = id
    }
  
    find_nh() {
      let nh = []
      for (let j = 0; j < M; j++) {
        let neuron = neurons[j]
        if (d(this.x, this.y,this.z, neuron.x, neuron.y,neuron.z) < dM) {
          nh.push((j))
        }
        if(nh.length > k)
          break
      }
      this.connections = nh
    }
  
    glow() {
      if(!this.active)
        return
      let nh = this.connections
      let t = (1-p5.cos(this.a*p5.PI))
      for (let i = 0; i < nh.length; i++) {
        let v = neurons[nh[i]]
        let px = p5.map(t, 1, 0, this.x, v.x, true)
        let py = p5.map(t, 1, 0, this.y, v.y, true)
        let pz = p5.map(t, 1, 0, this.z, v.z, true)
        p5.push()
        p5.translate(px,py,pz)
        p5.rotateY(-a)
        p5.rotateX(-b)
        p5.fill(this.color,100,p5.map(d(px,py,pz,0,0,p5.width*1.5),p5.height/2-r+p5.width*1.5,-p5.height/2+r+p5.width*1.5,40,100))
        p5.noStroke()
        p5.ellipse(0, 0, 2*r2)
        p5.pop()
      }
      this.a += this.v
      if(t>=1){
        this.active = false
        this.a = 0
      }
      
    }
    draw(r){
      p5.push()
      p5.translate(this.x, this.y,this.z)
      p5.rotateY(-a)
      p5.rotateX(-b)
      p5.fill(this.color,100,p5.map(d(this.x,this.y,this.z,0,0,p5.width*1.5),p5.height/2-r+p5.width*1.5,-p5.height/2+r+p5.width*1.5,40,100))
      p5.strokeWeight(2)
      p5.noStroke()
      p5.ellipse(0,0,r)
      p5.pop()
    }
    draw_connections(){
      let nh = this.connections
      let t = (1 + p5.cos(p5.PI * a + this.color)) / 2 //sin(a * PI) * sin(a * PI)
      for (let i = 0; i < nh.length; i++) {
        let v = neurons[nh[i]]
        p5.push()
        p5.stroke(255)
        p5.strokeWeight(5)
        p5.line(this.x,this.y,this.z,v.x,v.y,v.z)
        p5.pop()
      }
    }
    
  }
}