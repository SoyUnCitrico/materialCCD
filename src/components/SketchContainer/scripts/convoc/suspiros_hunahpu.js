/*eslint-disable*/
// import "../globals";
// import "p5/lib/addons/p5.sound";
// import mySong from "./assets/nena.mp3";

function Sketch (p5){
  let nSpaces = 30
  let spaces = []
  let nWalkers = 1
  let walkers = []
  let frequencies = [392, 164.81, 220, 587.33]
  let types = ['sine', 'triangle', 'sawtooth', 'square']

  let start = false

  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.background(11, 11, 11);
  }


  p5.draw = () => {
    p5.background(0);
    if (start) {
      if (walkers.length >= 1) {
        walkers[0].x = p5.constrain(p5.mouseX, walkers[0].r, p5.width - walkers[0].r)
        walkers[0].y = p5.constrain(p5.mouseY, walkers[0].r, p5.height - walkers[0].r)
      }
      for (let s of spaces)
        s.update()
      for (let w of walkers)
        w.draw()
      for (let s of spaces)
        s.draw()
    } else {
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.textSize(p5.max(10, p5.height / 15));
      p5.fill(255);
      p5.text("click para iniciar", p5.width / 2, p5.height / 2);
    }
  }

  p5.mousePressed = () => {
    init()
  }

  function init() {
    walkers = []
    for (let i = 0; i < nWalkers; i++)
      walkers.push(new Walker())
    if (spaces.length > 0)
      for (let s of spaces)
        s.close()
    spaces = []

    for (let i = 0; i < nSpaces; i++)
      spaces.push(new Space(i + 1))

    start = true
  }

  function inter(a, b) {
    return p5.dist(a.x, a.y, b.x, b.y) < a.r + b.r
  }

  class Space {
    constructor(mx) {
      this.r = p5.int(p5.random(20, 100))
      this.x = p5.random(this.r, p5.width - this.r)
      this.y = p5.random(this.r, p5.height - this.r)
      this.inside = false
      // this.voice = new p5.Oscillator()
      // this.voice1 = new p5.Oscillator(types[int(random(4))])
      // this.voice.start()
      // this.voice.freq(int(random(1, mx)) * 50)
      // this.voice1.freq(int(random(1, mx)) * 49.99999999)
      // this.voice1.start()

      // this.voice.amp(0)
      // this.voice1.amp(0)
      this.amp = p5.random()
      this.insiders = 0
      this.dr = p5.random(0.1, 0.6)
      this.d = p5.random(p5.TWO_PI)
      this.dx = p5.cos(this.d)
      this.dy = p5.sin(this.d)
      this.speed = p5.random(2)
    }
    update() {
      if (p5.random() > 0.99) {
        this.d = p5.random(p5.TWO_PI)
        this.dx = p5.cos(this.d)
        this.dy = p5.sin(this.d)
      }
      this.x += this.dx * this.speed
      this.y += this.dy * this.speed
      if (this.x < this.r) {

        this.dx *= -1
        this.x += this.r - this.x
      }
      if (this.x > p5.width - this.r) {

        this.dx *= -1
        this.x -= this.x - (p5.width - this.r)
      }
      if (this.y < this.r) {
        this.dy *= -1

        this.x += this.r - this.y
      }
      if (this.y > p5.height - this.r) {

        this.dy *= -1
        this.x -= this.y - (p5.height - this.r)
      }

      let t = 0.5
      let count = 0
      for (let w of walkers)
        if (this.ins(w.x, w.y, w.r))
          count++
      if (count != this.insiders) {
        if (this.insiders == 0) {
          this.inside = true
          // this.voice.amp(this.amp, 0.2)
          // this.voice1.amp(this.amp, 0.2)
        } else if (count == 0) {
          this.inside = false
          // this.voice.amp(0, t)
          // this.voice1.amp(0, t)
        }
      }
      if (count > 0)
        this.r -= 1 * this.dr
      if (this.life < 0) {
        this.r = 0

      }
      this.insiders = count
      //if(inside)
    }

    ins(x, y, r) {
      return p5.sqrt(p5.pow(x - this.x, 2) + p5.pow(y - this.y, 2)) < this.r + r
    }

    draw() {
      if (this.inside) {
        p5.stroke(0, 255, 0)
        p5.strokeWeight(3)
        p5.fill(255, 0, 0)
        p5.noFill()
      } else {
        p5.stroke(255)
        p5.fill(255)
      }
      if (this.r > 0)
      p5.ellipse(this.x, this.y, this.r * 2, this.r * 2)
    }
    close() {
      p5.print('bye')
      // this.voice.stop(0.1)
    }
  }

  class Walker {
    constructor() {
      this.x = p5.random(p5.width)
      this.y = p5.random(p5.height)
      this.d = p5.random(p5.TWO_PI)
      this.dx = p5.cos(this.d)
      this.dy = p5.sin(this.d)
      this.speed = 2
      this.r = 10
    }
    update() {
      this.x += this.dx * this.speed
      this.y += this.dy * this.speed
      if (this.x < this.r) {

        this.dx *= -1
        this.x += this.r - this.x
      }
      if (this.x > width - this.r) {

        this.dx *= -1
        this.x -= this.x - (width - this.r)
      }
      if (this.y < this.r) {
        this.dy *= -1

        this.x += this.r - this.y
      }
      if (this.y > height - this.r) {

        this.dy *= -1
        this.x -= this.y - (height - this.r)
      }
    }

    draw() {
      p5.push()
      p5.noStroke()
      p5.fill(132, 151, 196)
      //fill(255)
      p5.ellipse(this.x, this.y, this.r * 2, this.r * 2)
      p5.pop()
    }
  }

}
export default Sketch;