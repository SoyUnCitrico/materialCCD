var cnv;
var professions = ['músico', 'programador', 'diyer', 'electrónico'];
var profSpell = 0;
var direccion = 1;
var isOn = true;
var state = 0;

var bolas;
var colorBg;

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
    colorBg = color(0,0,30,5);
    background(colorBg);
    bolas = new GridBolitas(5,5);

}

function draw() {
    background(colorBg);
    bolas.displayGrid();
    // drawText(state);    
    // spellText(professions[state],profSpell,isOn);

}


 
 function drawText(state) {
    push();
    noStroke();
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(`¡ Hola !

Mi nombre es Emme y soy:`, width/2, height / 3);
    pop();
}

function spellText(texto, pos, encendido) {
    let transformText = texto.slice(0,pos);
    push();
    noStroke();
    fill(255);
    textSize(30);
    textAlign(CENTER);
    if(encendido) {
        text(transformText + '|', width/2, height / 2);
    } else if (encendido ==false) {
        text(transformText, width/2, height / 2);
    }
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


const spellInterval = setInterval( () => {
    profSpell += direccion;
    if(profSpell > professions[state].length)  {
        direccion = -1;
    } else if (profSpell <= 0){
        direccion = 1;
        state ++;
        if(state >= professions.length) {
            state = 0;
        }
    }
},400);

const blinkInterval = setInterval( () => {
    isOn =! isOn;
},402);

