/*eslint-disable*/
export default function sketch(p5) {
  ///Este código genera una retícula de objetos cada uno relacionado a un elemento de color
  //en una lista descargada de un repositorio

  //Creo variable para descargar datos
  let data;
  //La dirección de donde obtendré mi archivo JSON, aquí está alojada en un servidor externo
  let url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json';
  //En esta variable guardaré la información descargada
  let colores;

  //Crearé una reticula de 12x10
  let columnas = 12;
  let filas = 10;
  //Variables para guardar el tamaño de cada retpicula
  let ancho,alto;

  //Un arreglo para guardar los objetos de la Clase que crearé
  let bolitas =[];
  //Variable de texto para guardar la etiqueta del fondo, por ahora vacía
  let nombre="";


  p5.setup = () => {
    p5.createCanvas(800, 600);
    //Descargo la información con el método loadJSON()
    //Utilizo una función Callback que se ejecutará una vez descargados los datos
    data = p5.loadJSON(url,obtenerDatos);
    //Cálculos de cada  espacio en la retícula
    ancho = p5.width/columnas;
    alto =  p5.height/filas;
    //Quitar contorno a los dibujos
    p5.noStroke();
  
  }

  p5.draw = () => {
    p5.background(220);
    //Formato del texto
    p5.fill(255);
    p5.textSize(50);
    p5.textAlign(p5.CENTER);
    p5.text(nombre,p5.width/2,p5.height/2);
    
    //Este pedazo de código se ejecuta solamente si existe información en mi arreglo colores
    if(colores){
        //Para cada elemento del arreglo "bolitas" donde b es mi contador
      for(let b in bolitas){
      //Ejecuta la función dibujar de cada bolita
        bolitas[b].dibujar();
        //bolitas[b].mover();
      }
      
    }
  
  }
  //Función que se ejecuta cuando la información está lista
  function obtenerDatos(data){
    console.log(data);
    //Guardo en mi variable colores la información descargada
      colores =  data;
      //Generar un contador para cada elemento del arreglo
      let contador = 0;
      //Primer loop para las columnas 
      for(let i = 0; i<columnas;i++){
    //Segundo loop para las filas
          for(let j = 0; j<filas;j++){
              //Genero un objeto en cada repetición cada uno tiene su posición en x,y, diametro, color y nombre
              bolitas.push(new Bolita(i*ancho+15,j*alto+15,25,colores.colors[contador].hex, colores.colors[contador].color),
    ); 
      //Incrementar contador
      contador++;
        
      }
    }
  }

  //Aquí defino mi clase Bolita, que propiedades tendrá
  class Bolita{
      //El constructor será donde inicio las variables a usar, dentro del paréntesis los argumentos
      //de entrada que podré utilizar
    constructor(_x,_y,_d,_color,_nombre){
      //Esta es la sintáxis para definir cada variable dentro de mi clase
      this.x = _x;
      this.y = _y;
      this.diametro = _d;
      this.color = _color;
      this.nombre = _nombre
      
    }
    //Puedo generar nuevas funciones para cada uno de mis objetos
    //en este caso esta sera utilizada para mostrar en pantalla
    dibujar(){
      //Colorear con la información de color
      p5.fill(this.color);
      //Crear una elipse en cierta posición
      p5.ellipse(this.x,this.y,this.diametro); 
      //Realizo una comparación con dos argumentos, el primero revisa si el mouse está siendo presionado
      //el segundo la distancia entre el mouse y la posición del objeto, si es menor al diámetro.
      //Cuando ambas condiciones se cumplen significa que la bolita está siendo presionada.
      if(p5.mouseIsPressed&&p5.dist(p5.mouseX,p5.mouseY,this.x,this.y)<this.diametro){
          //Si la bolita fue presionada, el nombre en pantalla cambia al de esta bolita
        nombre = this.nombre;
      }
      
    }
    mover(){
      this.x = this.x+p5.random(1);
      this.y = this.y+p5.random(1);
    }
    
  }


}