/*eslint-disable*/
export default function(p5) {
  let asistentes = [15,13,10,12];
  //Declaro una variable para mi boton
  let boton;
  //Declaro una variable para usar como contador
  //Inicializa en 0
  let contador = 0;
  let col = [[150,200, 56], [50,150,84], [0,120,230], [80,80,80]];


  p5.setup = () => {
    p5.createCanvas(800, 600);
    //Creo un boton e inserto el texto que va en su interior
    boton = p5.createButton('Cambiar Día');
    boton.style('background-color', '#5eb475');
    boton.style('border', 'none');
    boton.style('border-radius', '8px');
    boton.style('padding', '0.6rem');
    boton.style('color', 'white');
    // boton.style('position', 'absolute');
    boton.style('margin', '1rem');
    boton.style('box-shadow', '1px 1px 2px #4e9561, -1px -1px 2px #6ed389');
    
    boton.mouseMoved(() => {
      boton.style('box-shadow', 'inset 1px 1px 2px #4e9561, inset -1px -1px 2px #6ed389');
    });
    boton.mouseOut(() => {
      boton.style('box-shadow', '1px 1px 2px #4e9561, -1px -1px 2px #6ed389');
    });
    //Cada que el boton sea presionado voy a ejecutar una funcion
    //llamada cambiarDia
    boton.mousePressed(cambiarDia);
  }

  p5.draw = () => {
    p5.background(34, 129, 144 ); 
    
    //Aqui mi círculo y texto toman el valor del arreglo
    //en que se encuentre mi variable contador 

    p5.fill(col[contador]);
    p5.stroke(255);
    p5.strokeWeight(2);
    p5.ellipse(p5.width/2,p5.height/2,asistentes[contador]*10);
    p5.fill(255);
    p5.textSize(20);
    p5.text(asistentes[contador],p5.width/2,p5.height/2);
  }
  //Esta es una función que estoy creando, es la que se va a llamar
  //cuando presiono el boton
  function cambiarDia(){
    
  //Empleo una condicional, si el contador es menor al tamaño del arreglo asistentes
  //El contador incrementará en uno
    if(contador<asistentes.length - 1){
      contador = contador + 1 ;
  //De no cumplirse la condición anterior el contador reinicia en 0
    } else {
      contador = 0;
    }
  
  //Imprimir en consola el valor actual de contador.
    console.log(contador);
  }

}