/*eslint-disable*/
import "../globals";
import "p5/lib/addons/p5.sound";
import myRadius from "./assets/radius1.mp3";

export default function sketch2(s){
    s.sonido;
    s.transformada;
    s.botonPlay;
    s.botonStop;
    s.botonRandom;
    s.sliderVol; 
    s.sliderRate;
    s.onda; 
    s.amplitud;
    s.espectro;
    s.posInicialY;
    s.bandas;
      
    s.preload = function(){  
      s.sonido = s.loadSound(myRadius);
      s.print('El sonido ha sido cargado');    
    }
      
    s.setup = function() {
      s.createCanvas(350, 100);
      // Canvas1.position(450,260);
      s.botonPlay = s.createButton('Play / Pause').mousePressed(s.toggle);
      // s.botonPlay.position(500,420);
      s.botonStop = s.createButton('Stop').mousePressed(s.alto);
      // s.botonStop.position(600,420);
      s.botonRandom = s.createButton('Random').mousePressed(s.aleatorio);
      // s.botonRandom.position(540,390);
      s.sliderVol = s.createSlider(0, 1, 0.5, 0.001);
      // s.sliderVol.position(70,500);
      s.sliderRate = s.createSlider(0, 2, 1, 0.001);
      // s.sliderRate.position(70,540);
      s.bandas = 1024;
      s.transformada = new s.constructor.FFT(.8,s.bandas);
      s.amplitud = new s.constructor.Amplitude();
      s.posInicialY = s.height/2;
    }
    
    s.draw = function(){
      
      s.background(88, 70, 187 );
      s.sonido.amp(s.sliderVol.value());
      s.sonido.rate(s.sliderRate.value());
      // Dibuja un cuadrado en el centro del canvas
     
      
      // Dibuja la forma de onda con una linea
      s.push();
      s.onda = s.transformada.waveform();
      s.stroke(244, 247, 149 );
      s.noFill();
      s.beginShape();
      for(s.i = 2; s.i < s.onda.length; s.i++) {
        s.x = s.map(s.i,0,s.onda.length,0,s.width);
        s.y = s.map(s.onda[s.i],-1,1,-s.height,s.height)
        s.y += s.posInicialY;
        s.curveVertex(s.x,s.y);
       
      }
      s.endShape();
      s.pop();
      
      
      // Dibuja el espectro de frecuencias del sonido
      s.push()
      s.noStroke()
      s.fill(149, 247, 184 );
      s.w = s.width / 24;
      s.h = s.height/2
      s.espectro = s.transformada.analyze() 
      for(s.i = 0; s.i < s.espectro.length; s.i++) {
        s.amp = s.espectro[s.i];
        s.y = s.map(s.amp,0,255,0,-s.h) 
        s.rect(s.i*s.w,s.height,s.w-2,s.y)
        // point(x,y) 
      }
      s.pop();
      
    }
    
    s.toggle = function(){
        if(s.sonido.isPlaying()) {
        s.sonido.pause();
        s.print('Pausa')
      } else {
        s.sonido.play();
        s.print('Play')
      }      
    }
      
    s.alto = function(){   
      s.sonido.stop();
    }
      
    s.aleatorio = function(){
      s.duracion = s.sonido.duration();
      s.t = s.random(s.duracion);
      s.sonido.jump(s.t);      
      s.print(s.onda);
    }
  }   

  // export default function sketch1(w) {
  //   let Canvas2;
  //   w.song;
    
  //   w.sliderRate;
  //   w.sliderPan;
  //   w.sliderAlpha;
    
  //   w.stopButton;
    
  //   w.onda;
  //   w.fft;
  //   w.amp;
    
  //   w.value = 0
  //   w.op = w.false
      
  //   w.preload = function() {
        
  //       // w.song = w.loadSound("../assets/audio/radius1.mp3");
        
  //   }
       
  //   w.setup = function(){
  //     Canvas2=w.createCanvas(350,350);
  //     Canvas2.position(50,150)
        
  //     //song.play()
  //     // w.fft = new p5.FFT()
  //     // w.amp = new p5.Amplitude()
  //     // w.song.setVolume(0.1)
    
  //     w.sliderRate = w.createSlider(0, 1.5, 1, 0.01)
  //     //Posición slider rate
  //     w.sliderRate.position(500,520)
  //     w.sliderPan = w.createSlider(-1, 1, 0, 0.01)
  //     //Posición slider Pan
  //     w.sliderPan.position(500,450)
  //     w.sliderAlpha = w.createSlider(0, 100, 90, 0.1)
  //     // Posición slider Alpha
  //     w.sliderAlpha.position(500,500)
    
  //     // w.stopButton = w.createButton("Stop")
  //     // w.stopButton.mousePressed(w.toggleSong)
    
  //     w.noStroke()    
  //     } 
    
  //     w.draw = function()
  //     {
  //       if (w.op) {
  //       w.fill(1, 22, 39)
  //     } else {
  //       w.fill(1, 22, 39, w.sliderAlpha.value())
  //     }
    
  //     w.rect(0, 0, w.width, w.height)
  //     w.translate(w.width / 2, w.height / 2)
  //     // w.song.rate(w.sliderRate.value())
  //     // w.song.pan(w.sliderPan.value())
    
  //     // w.onda = w.fft.waveform();
    
  //     // w.n = w.onda.length
  //     w.r0 = 100;
    
  //     w.push()
  //     w.blendMode(w.ADD)
  //     for (w.i = 0; w.i < w.n; w.i++) {
  //       w.theta = 1 * w.TAU / w.n * w.i ;
  //       // w.alpha = 1 * w.PI / w.n * w.i
  //       w.r = w.r0 //+ i/n*200
  //       w.R = w.map(w.onda[w.i], -1, 1, -w.r0, w.r0) * 5;
        
  //       // w.k = (w.r / w.R)
  //       w.x = 1*(w.R+w.r)*w.cos(w.theta) + (w.R+w.r)*w.cos(20*w.theta)
  //       w.y = 1*(w.R+w.r)*w.sin(w.theta)-(w.R+w.r)*w.sin(20*w.theta)
  //       w.push()
  //       if (w.i % 3 == 0) {
  //         w.stroke(177, 77, 197 )
  //       } else {
  //         if (w.i % 3 == 1) {
  //           w.stroke(77, 197, 144 )
  //         } else {
  //           w.stroke(177, 77, 197 );
  //         }
  //       }
  //       w.strokeWeight(3)
  //       w.point(w.x, w.y);
  //       w.pop()
  //     }
  //     w.pop()
  //     }
    
  //   w.keyPressed = function(){
  //       if (w.value === 0) {
  //       w.value = 1;
  //     } else {
  //       w.value = 0;
  //     }
  //     w.op = !w.op
  //   }
    
  //   w.jumpSong = function(){
     
  //     // w.len = w.song.duration()
  //     // w.t = w.random(w.len)
  //     // w.song.jump(w.t)
      
  //   }
    
  //   w.toggleSong = function(){
      
  //     // w.status = w.song.isPlaying();
  //     // w.song.isPlaying() == w.true ? w.song.pause() : w.song.play();
  //   }
  //   }
