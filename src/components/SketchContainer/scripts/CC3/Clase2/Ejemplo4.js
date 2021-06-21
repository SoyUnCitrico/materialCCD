/*eslint-disable*/
import data from "../data/data.json";
import fuente from "./LEMONMILK-Bold.otf"

export default function sketch(p5) {
  //Creamos variable global para contener la información
  // let data;
  let contador = 0;
  let myFont;
  //El archivo puede tardar en cargar poniéndolo en el método preload
  //aseguramos que  nuestro programa comience una vez que lo cargamos
  p5.preload = () => {
    console.log(data);
    myFont = p5.loadFont(fuente);
  }

  p5.setup = () => {
    p5.createCanvas(800, 600);
    p5.textFont(myFont);
    p5.textStyle(p5.BOLD);
    p5.textAlign(p5.CENTER);
  }

  p5.draw = () => {
      //Disminuimos la velocidad de draw a 1 frame por segundo
      p5.frameRate(1);
    //Si nuestro contador alcanza el final de elementos, se reinicia
    if(contador>=data.colors.length){
      contador = 0;
    }
    
    p5.fill(255);
    p5.textSize(40);
    //Pintamos el fondo con el color de la base de datos
    p5.background(data.colors[contador].hex);
    
    //Utilizamos el texto con el color de la base de datos
    p5.text(data.colors[contador].color,p5.width/2,p5.height/2)
    
    contador++;
    
    p5.noStroke();
    p5.fill(p5.random(200,250),80);
    p5.rect(p5.random(160,200),90,40,120);
    p5.rect(p5.width/2,p5.height/2 + p5.random(100,150), 300, 20);
  }

}