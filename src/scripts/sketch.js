var cnv;
var numBolas = 5;
var bolas = [];
var professions = ['músico', 'programador', 'diyer', 'electrónico'];

var state = 0;
var angulo = 0;

let colorBg;
let targetPos;
let center;
let radio = 100;

function setup() {
    if (innerWidth > 805) {
        cnv = createCanvas(800,600);
    } else if( innerWidth > 505 && innerWidth < 805) {
        let ancho = innerWidth - 5
        let alto = ancho*3/4; 
        cnv = createCanvas(ancho,alto);
    } else {
        let ancho = innerWidth - 5
        let alto = ancho*4/3; 
        cnv = createCanvas(ancho,alto);
    }
    cnv.parent('main-gallery__sketch--container');
    cnv.id('main__canvas');
    cnv.class('main__canvas--class');

    angleMode(DEGREES);
    colorBg = color(150,55,230);
    center = createVector(width/2, height/2);
    background(colorBg);

    for(let i = 0; i < numBolas; i++) {
        let size = ((numBolas - i) * .8 * 5) + 15;
        bolas[i] = new Bolita(random(width),random(height), size,size);
    }
    

}

function draw() {
    background(colorBg);
    for(let i = 0; i < bolas.length; i++) {
        bolas[i].dibujar();
        bolas[i].dibujarTrail();
        // let target = moveInCircle(center,radio);
        // let target = createVector(mouseX,mouseY);
        
        // bolas[i].seguir(target);
        // bolas[i].huir(target);
        // bolas[i].arrive(target);
        bolas[i].fronteras(100);
        bolas[i].mover();
    }


    if(mouseIsPressed) {
        angulo ++;
    }
    // drawText(state);
}

// const interval = setInterval( () => {
//     state ++;
//     if(state >= professions.length) {
//         state = 0;
//     }
// },1000);


function moveInCircle(center,radius) {
    let x = center.x + (radius * cos(1 * angulo));
    let y = center.y + (radius * sin(3 * angulo));
    let pos = createVector(x, y);
    return pos;
 }
function drawText(state) {
    push();
    noStroke();
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text('Hola soy Emme y soy:', width/2, height * 2 / 5);
    text(professions[state], width/2, height * 2.5 / 5);
    pop();
}


function windowResized() {
    if (innerWidth < 820) {
        let ancho = innerWidth - 10
        let alto = ancho*3/4;
        if(ancho <  500) {
            alto = ancho  * 4 / 3; 
        }
        resizeCanvas(ancho, alto);
    } else {
        resizeCanvas(800,600);
    }
    
}