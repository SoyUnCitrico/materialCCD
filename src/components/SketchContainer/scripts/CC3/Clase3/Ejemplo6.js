/*eslint-disable*/
export default function sketch(p5) {  
  //Para este ejemplo es necesaria una cuenta en OpenWeatherMap.org y obtener la API KEY
  let key = '7c59ef7f3557f92679933dafa19e09fd';//Sustituir por API Key
  //URL para descargar clima actual en Ciudad de México
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=Mexico&appid='+key+'&units=metric'; 
  //Crear variables para guardar datos
  let data;
  let clima;
  //Variable para texto
  let texto;

  p5.setup = () => {
    p5.createCanvas(800, 600);
    //Cargo información y una vez cargada ejecuto la función pedirClima()
    p5.loadJSON(url,pedirClima);
    //Formato de texto
    p5.textAlign(p5.CENTER,p5.CENTER);

  }

  p5.draw = () => {
    p5.background(220);
    //Texto al centro de la pantalla
    p5.textSize(38);
    p5.text(texto,p5.width/2,p5.height/2);
  }

  //Esta función se ejecuta una vez que se cargan los datos
  function pedirClima(data){
    clima = data;
    console.log(clima);
    //Acceder a la información de temperatura
    let temperatura = clima.main.temp;
    //Concateno el texto a mostrar
    texto = "La temperatura en CDMX es: \n\n";
    texto += temperatura+"°C";
  }
}