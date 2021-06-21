/*eslint-disable*/
export default function sketch(p5) {
  //En este ejercicio se  mapea la localización de la Estación Espacial Internacional al canvas
  //Basado en el ejemplo de Daniel Schiffman en The coding train https://www.youtube.com/watch?v=UNtqhnhD-wo&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=7
  let data;
  //URL para petición a la API, me regresa un JSON con información sobre la ISS(International Space Station)
  let url = 'https://api.wheretheiss.at/v1/satellites/25544'
  //Variable para guardar los datos
  let estacion;
  //Valores de laitud y longitud
  let lat,lon;
  //Multiplicador para suavizar movimiento
  let easing = 0.01;
  //Puntos iniciales para la elipse(puede mejorarse está implementación)
  let x =0,y=0;
  let objX,objY;
  //Variable para alojar imagen
  let space;
  //Debemos preargar la imagen antes de usarla en el sketch, aquí estamos usando una en internet
  p5.preload = () => {
    space = p5.loadImage('https://media.giphy.com/media/xUn3CdoxxuzV5J6X5u/source.gif');
  }


  p5.setup = () => {
    p5.createCanvas(800, 600);
    p5.loadJSON(url,bajarDatos);
    //Esta función ejecuta la función cada cierto tiempo
    setInterval(dondeEsta,1000);
  }

  p5.draw = () => {
    p5.background(220);
    //Aquí dibujamos la imagen
    p5.image(space,0,0,p5.width,p5.height);
    if(estacion){
      
      //Aplicamos un algoritmo para suavizar el movimiento
      
      
      let dx = objX-x;
      x+= dx * easing;
      
    
      let dy = objY-y;
      y+= dy * easing;
      
      //Dibujamos elipse
      p5.ellipse(x,y,50,20);
    }

  }
  function dondeEsta(){
    p5.loadJSON(url,bajarDatos);
  }

  function bajarDatos(data){
    estacion = data;
    lat = estacion.latitude;
    lon = estacion.longitude;
  //Mapeamos la posición de la estación al canvas
  //Aquí se encuentra todo el rango y puede ser lenta su visualización
      
    objX = p5.map(lat,-90,90,p5.width,0);
    objY = p5.map(lon,-180,180,p5.height,0);
    console.log("Estoy en:"+lat+","+lon);
    console.log(objX+" "+objY)
  }
}