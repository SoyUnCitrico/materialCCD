/*eslint-disable*/
export default function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(600, 400);
    p5.background(240);
    // colorMode(HSB);
    p5.rectMode(p5.CENTER);

    let centerX = p5.width/2;
    let centerY = p5.height/2;
    p5.noStroke();

    p5.fill(0);
    p5.rect(centerX,centerY, 100,200);

    p5.fill(40);
    p5.rect(centerX - 110 ,centerY, 80,160);
    p5.fill(80);
    p5.rect(centerX - 190 ,centerY, 60,120);
    p5.fill(150);
    p5.rect(centerX - 250 ,centerY,40,80);

    p5.fill(40);
    p5.rect(centerX + 110 ,centerY, 80,160);
    p5.fill(80);
    p5.rect(centerX + 190 ,centerY, 60,120);
    p5.fill(150);
    p5.rect(centerX + 250 ,centerY,40,80);



  }
}