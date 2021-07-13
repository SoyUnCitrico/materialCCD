/*eslint-disable*/
import "../globals";
import "p5/lib/addons/p5.sound";
import myRadius from "./assets/radius1.mp3";

export default function sketch2(s) {
  let sonido;
  let player;
  let plotter;
  
  s.preload = () => {
    sonido = s.loadSound(myRadius,()=>{
      console.log("Canción cargada");
    });
  }
  
  s.setup = function() {
    s.createCanvas(800,450);
    s.background(138,161,191);
    player = new PlayerWave(400, 100, myRadius);
    plotter = new PolarPlotter(0,0);
  }
    
  s.draw = function() { 
    s.background(138,161,191);
    player.drawPlayer();
    plotter.draw();
  }
  
  class PlayerWave{
    constructor(x,y) {
      this.pos = s.createVector(x,y);
      this.size = s.createVector(350,100);
      this.finalPlot = p5.Vector.add(this.size, this.pos);
      this.isLog = true;
      this.transformada;
      this.botonPlay;
      this.botonStop;
      this.botonRandom;
      this.sliderVol; 
      this.sliderRate;
      this.sliderPan;
      this.onda; 
      this.amplitud;
      this.espectro;
      this.posInicialY;
      this.bandas;
      this.init();
    }

    init() {
      console.log("iniciando");
      console.log(sonido);
      this.botonPlay = s.createButton('Play / Pause').mousePressed(this.toggle).position(500,250);
      this.botonStop = s.createButton('Stop').mousePressed(this.alto).position(620,250);
      this.botonRandom = s.createButton('Random').mousePressed(this.aleatorio).position(700,250);
      this.sliderVol = s.createSlider(0, 0.7, 0.25, 0.001).position(580,300);
      this.sliderRate = s.createSlider(0, 2, 1, 0.001).position(580,340);
      this.sliderPan = s.createSlider(0, 1.5, 1, 0.01).position(580,380);
      
      this.bandas = 1024;
      this.transformada = new s.constructor.FFT(.8,this.bandas);
      this.amplitud = new s.constructor.Amplitude();
      this.posInicialY = this.size.y - this.pos.y / 2;
    }

    drawBack(){
      s.push();
      s.noStroke()
      s.fill(88, 70, 187) 
      s.rect(this.pos.x,this.pos.y, this.size.x, this.size.y);
      s.pop();
    }

    drawPlayer() {
      this.drawBack();
      sonido.amp(this.sliderVol.value());
      sonido.rate(this.sliderRate.value());
      sonido.pan(this.sliderPan.value())
      // Dibuja la forma de onda con una linea
      s.push();
      this.onda = this.transformada.waveform();
      s.stroke(244, 247, 149);
      s.noFill();
      s.beginShape();
      for(let i = 2; i < this.onda.length; i++) {
        let x = s.map(i, 0, this.onda.length, this.pos.x, this.pos.x + this.size.x);
        let y = s.map(this.onda[i], -1, 1, -s.height, s.height)
        y += this.posInicialY + this.pos.y;
        s.curveVertex(x, y);
      }
      s.endShape();
      s.pop();
      
      // Dibuja el espectro de frecuencias del sonido
      this.plotFFT();
    }

    plotFFT() {
      this.espectro = this.transformada.analyze(1024);
      let long = this.espectro.length / 24;
      s.noStroke();
      for (let i = 0; i< this.espectro.length; i++){
      // let c = map(i,0, spectrum.length, 0,255)
      s.fill(149, 247, 184);
  
      if(this.isLog) {
          let a = s.map(s.log(i), 0, s.log(this.espectro.length), this.pos.x, this.finalPlot.x) 
          let b = s.map(this.espectro[i], 0, 255, 0, this.size.y)
          s.rect(a, this.finalPlot.y, (this.size.x / long) -2, -b)
          // fill(textColor);
          // text('LOG',width*3/4,50);
  
      } else {
          let a = s.map(i, 0, this.espectro.length, this.pos.x, this.finalPlot.x);
          let b = s.map(this.espectro[i], 0, 255, 0, this.size.y);
          s.rect(a, this.finalPlot.y, (this.size.x / long) -2, -b )
          // fill(textColor);
          // text('LIN',width*3/4,50);
          } 
      }
    } 

    alto() {   
      sonido.stop();
    }

    toggle() {
      if(sonido.isPlaying()) {
        sonido.pause();
        // s.print('Pausa')
      } else {
        sonido.play();
        // s.print('Play')
      }      
    }

    aleatorio() {
      let duracion = sonido.duration();
      let t = s.random(duracion);
      sonido.jump(t);
    }
  }

  class PolarPlotter{
    constructor(x,y) {
      this.pos = s.createVector(x,y);
      this.size = s.createVector(350,350);
      this.finalPos = p5.Vector.add(this.pos,this.size);
      this.sliderAlpha = s.createSlider(0, 100, 90, 0.1).position(150,400);
      this.fft = new s.constructor.FFT();
      
      this.amp;
      this.value = 0;
      this.op = false;
    }
    
    draw() {
      // s.noStroke();    
      if (this.op) {
        s.fill(1, 22, 39);
      } else {
        s.fill(1, 22, 39, this.sliderAlpha.value());
      }
  
      s.rect(this.pos.x, this.pos.y, this.finalPos.x, this.finalPos.y);
      s.translate(this.size.x/2,this.size.y/2);
      let onda = this.fft.waveform();
      let n = onda.length;
      let r0 = 50;
    
      s.push()
      s.blendMode(s.ADD)
      for (let i = 0; i < n; i++) {
        let theta = 1 * s.TAU / n * i ;
        let r = r0 //+ i/n*200
        let R = s.map(onda[i], -1, 1, -r0, r0) * 5;
        let x = 1*(R + r) * s.cos(theta) + (R + r) * s.cos(20 * theta)
        let y = 1*(R + r) * s.sin(theta) - (R + r) * s.sin(20 * theta)
        s.push()
        if (i % 3 == 0) {
          s.stroke(177, 77, 197 )
        } else {
          if (i % 3 == 1) {
            s.stroke(77, 197, 144 )
          } else {
            s.stroke(177, 77, 197 );
          }
        }
        s.strokeWeight(3)
        s.point(x, y);
        s.pop()
      }
      s.pop()
    }
    
    keyPressed() {
      if (this.value === 0) {
          this.value = 1;
      } else {
        this.value = 0;
      }
      this.op = !this.op;
    }
  }

}
