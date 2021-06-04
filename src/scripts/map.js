const key = 'pk.eyJ1IjoibWFwcGF1c2VyIiwiYSI6ImNqNXNrbXIyZDE2a2cyd3J4Ym53YWxieXgifQ.JENDJqKE1SLISxL3Q_T22w';

// Options for map
const options = {
  // lat: 19.314274781228306, 
  // lng: -98.240442677285,
  lat: 19.436598297936722,
  lng: -99.12021364796331,
  zoom: 11,
  studio: true, 
  style: 'mapbox://styles/mapbox/traffic-night-v2',
  // style: 'mapbox://styles/mapbox/satellite-v9',
  // style: 'mapbox://styles/mapbox/streets-v11',
  // style: 'mapbox://styles/mapbox/navigation-day-v1',
  // style: 'mapbox://styles/mapbox/outdoors-v11',
  // style: 'mapbox://styles/mapbox/satellite-streets-v11',
};


// Create an instance of Leaflet
// Create an instance of Mapboxgl
const mappa = new Mappa('Mapbox', key);
let myMap;
let angulo = 0;
var canvas;
var clima;
var puntos = [];
var moving = false;
var arrayData;

let keyAPI = '7c59ef7f3557f92679933dafa19e09fd';
// let url2 = 'https://api.openweathermap.org/data/2.5/find?lat=19.314274781228306&lon=-98.240442677285&cnt=50&appid='+keyAPI;
let url2 = 'https://api.openweathermap.org/data/2.5/find?lat=19.436598297936722&lon=-99.12021364796331&cnt=50&appid='+keyAPI;

function preload() {
  clima = loadJSON(url2);
}

function setup() {
    angleMode(DEGREES);
    canvas = createCanvas(800, 600);
    canvas.parent('main-gallery__sketch--container');
    canvas.id('main__canvas');
    canvas.class('main__canvas--class');
    
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);
    arrayData = getData(clima);

    for(let j = 0; j < arrayData.length; j++) {
      let size = arrayData[j].temp;
      let temp = arrayData[j].temp;
      let b = new Bolita(0,0,size,size,temp);
      
      puntos.push(b);
    }
    
    myMap.onChange(drawClima);
    
  }
  
function draw() {
  clear();
  let target;
  if(moving){
    // console.log('dibujando');
    target = createVector(mouseX,mouseY);
    for (let j = 0; j < puntos.length; j++) {
      puntos[j].arrive(target);
      puntos[j].mover();
      puntos[j].dibujar();
    }
  } else {
    for (let j = 0; j < puntos.length; j++) {
      target = puntos[j].getOrigin()
      // console.log(target);
      puntos[j].arrive(target);
      puntos[j].mover();
      puntos[j].dibujar();
      puntos[j].verNombre(str(arrayData[j].name));
      // puntos[j].verNombre(str(arrayData[j].temp));
    }
    // console.log(puntos[0].getOrigin());
  }
  
  
}
  
function drawClima() {
    // Clear the canvas
    clear();
    for (let j = 0; j < puntos.length; j++) {
      let pos = myMap.latLngToPixel(arrayData[j].lat, arrayData[j].lon);
      puntos[j].setPos(createVector(pos.x,pos.y));
      let newOrigin = puntos[j].getPos();
      puntos[j].setOrigin(newOrigin);
    }
  
  }


  //Esta función se ejecuta una vez que se cargan los datos
function getData(data){
  let c = data.list;
  let dataArray = [];
  for(let i = 0; i < c.length; i++){
    let name = c[i].name;
    let lat = c[i].coord.lat;
    let lon = c[i].coord.lon;
    let temp = (c[i].main.temp - 273.15);
    dataArray.push({name,lat,lon,temp});
  }  
  return dataArray;
}

function keyPressed() {
  let k = this.key.toLowerCase();

  if(k == 'm') {
    moving = !moving;
    moving ? console.log('Moving') : console.log('NO moving');
  }

}