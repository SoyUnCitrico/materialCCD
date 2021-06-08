/*eslint-disable*/
export default function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(500,500);
    p5.background(255);
    // noFill();
    p5.strokeWeight(2);
    p5.stroke(0);
    p5.fill(0);
    p5.circle(p5.width/8,p5.height/8,50)
    p5.circle(p5.width/8,p5.height*7/8,50)
    p5.circle(p5.width*7/8,p5.height/8,50)
    p5.circle(p5.width*7/8,p5.height*7/8,50)
    
    p5.rectMode(p5.CENTER);
    
    p5.translate(p5.width/2,p5.height/2);
    p5.rotate(p5.PI/4);
    p5.noStroke();
    p5.fill(200,0,100)
    p5.rect(0,0,200);
    
    // p5.fill(0,178,0,105)
    // p5.circle(0,0,100)
  }
  
}