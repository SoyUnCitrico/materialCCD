/*eslint-disable*/
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers"
import App from "./routes/App";
import "assets/scss/material-kit-react.scss?v=1.10.0";

const initialState = {
  "intro": [
    {
      "id": 1,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Introducción a p5.js",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
    "nav_instructions": "P5.js es una librería y entorno de programación que utiliza el lenguaje de programación Javascript.     En este podemos crear formas complejas a través de código, programar interacciones de usuario y brindar animación a los elementos. ",
      "nav_code": [
        {
          "title": "Copia el código",
          "url": "https://github.com/ccdtecno/Talleres2021-CC1/blob/main/Ejemplos/CC1_ejemplo1_cuadradoCirculos.js"
        },
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/UKIpL_pE2"
        }
      ]
    },
    {
      "id": 2,
      "url": "./components/SketchContainer/scripts/CC1/script/CC1_taller2.1_posicionYMovimiento.js",
      "name": "Similitudes con otros programas",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "p5.js posee semejanzas con Adobe Photoshop o Adobe Illustrator. Ambos cuentan con una mesa de trabajo, lienzo o canvas que permite desplegar elementos gráficos como formas, colores, texturas y modificar sus dimensiones o propiedades.",
      "nav_code": [
        {
          "title": "Copia el código",
          "url": "https://github.com/ccdtecno/Talleres2021-CC1/blob/main/Ejemplos/CC1_ejemplo1_tonosGris.js"
        },
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/KSBVuHCFr"
        }
      ]
    },
    {
      "id": 3,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Animación y Movimiento",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "A partir de la creación de formas simples, se puede animar el comportamiento de los gráficos. En este ejemplo, vemos como el crecimiento en el tamaño del circulo y el cambio de posicion en el circulo y cuadrado generan la sensación de movimiento",
      "nav_code": [
        {
          "title": "Copia el código",
          "url": "https://github.com/ccdtecno/Talleres2021-CC1/blob/main/script/CC1_taller2.2.js"
        },
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/3cPuth9fL"
        }
      ]
    },
    {
      "id": 4,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Tipos de movimiento",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "En este ejemplo las elipses aumentan de tamaño de diversas maneras. Algunas tienen incrementos de forma lineal o exponencial, otras varian de tamaño imitando al ruido o por medio del generador Perlin Noise.",
      "nav_code": [
        {
          "title": "Copia el código",
          "url": "https://github.com/ccdtecno/Talleres2021-CC1/blob/main/script/CC1_taller2.3_tiposDeMovimiento.js"
        },
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/Pshg0-VJr"
        }
      ]
    },
    {
      "id": 5,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Interacción con el teclado",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "En p5.js se pueden agregar diferentes interacciones con mouse, teclado, cámara web y sensores externos como Kinect o Leap Motion. Ahora vamos, escribe algo con el teclado. Utiliza ‘Del’ o ‘delete’ para borrar el texto y cambiar su color.",
      "nav_code": [
        {
          "title": "Copia el código",
          "url": "https://github.com/ccdtecno/Talleres2021-CC1/blob/main/script/CC1_taller3_keyIF.js"
        },
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/rDYdd40bz"
        }
      ]
    },
    {
      "id": 6,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Interaccion con el mouse",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "De nuevo sucede algo aquí, presiona click con los botones del mouse y mira los cambios.",
      "nav_code": [
        {
          "title": "Copia el código",
          "url": "https://github.com/ccdtecno/Talleres2021-CC1/blob/main/script/CC1_taller3_MouseElse.js"
        },
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/eA9cNLtFo"
        }
      ]
    },
    {
      "id": 7,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Mejorando <-- Paint --> con pinceles",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "Dibuja sobre el lienzo con el mouse. Para generar una animación es necesario actualizar constantemente el fondo del lienzo. Sin embargo, podemos crear otro tipo de interacciones con ayuda de las funcionalidades básicas de p5. En este ejemplo, se recrea de manera simple la interactividad del popular programa < Paint > y se añade un pincel dinámico que varía segun el estado del mouse",
      "nav_code": [
        {
          "title": "Copia el código",
          "url": "https://github.com/ccdtecno/Talleres2021-CC1/blob/main/Ejemplos/CC1_ejemplo3_mousePaint.js"
        },
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/gD4DtjtDx"
        }
      ]
    },
    {
      "id": 8,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Iteración y loops. Instrucción FOR",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "La creación de formas complejas o infinitas en p5.js es posible gracias a la iteración. En programación se logra iterar sobre el codigo a través del ciclo FOR, que nos permite dibujar 10, 100 o 1000 elipses, rectas u otras formas con una línea breve de código",
      "nav_code": [
        {
          "title": "Copia el código",
          "url": "https://github.com/ccdtecno/Talleres2021-CC1/blob/main/Ejemplos/CC1_ejemplo4_Movbolita_loopAnidado_aros.js"
        },
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/XcjuTi_Si"
        }
      ]
    },
    {
      "id": 9,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Un comportamiento, repetido multiples veces",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "Esta animación se compone de un objeto que repite su comportamiento multiples veces dentro de una cuadricla. La instrucción FOR ayuda a generar de manera sencilla esta estructura sin tener que repetir numerosas líneas de código.",
      "nav_code": [
        {
          "title": "Copia el código",
          "url": "https://github.com/ccdtecno/Talleres2021-CC1/blob/main/script/CC1_taller4_Movbolita_loopAnidado.js"
        },
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/5PwLzsOie"
        }
      ]
    },
    {
      "id": 10,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Condicionales y decisiones. Instrucción IF",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "Cambia la visualización con BARRA ESPACIADORA. Las condicionales permiten crear límites o definir acciones si sucede algo o no. En este ejemplo, las elipses han sido programadas para cambiar de dirección, sí la posición de las elipses sale de los límites definidos en el código. La visualización de esos límites NO determina el comportamineto de las elipses y los límites pueden o no estar visibles.",
      "nav_code": [
        {
          "title": "Copia el código",
          "url": "https://github.com/ccdtecno/Talleres2021-CC1/blob/main/Ejemplos/CC1_ejemplo2.5._Bolita_vectores_Muchos.js"
        },
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/bj3cbYZur"
        }
      ]
    }
  ],
  "audio": [
    {
      "id": 1,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Comandos básicos",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "---",
      "nav_code": [
        {
          "title": "Copia el código",
          "url": "https://www.github.com/ccdtecno"
        },
        {
          "title": "Edita el código",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
        }
      ]
    }
  ],
  "dataCode": [
    {
      "id": 1,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Manejando datos",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "La visualización de diferentes tipos de datos se puede expresar a través de elementos visuales como el color, tamaño, posición o animaciones. En el siguiente ejemplo se representa el número de asistentes por día al taller de <- Introducción a Código y Datos ->. El número de asistentes cambia el tamaño de la elipse. ",
      "nav_code": [
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/-lOqQRfA9"
        }
      ]
    },
    {
      "id": 2,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Arreglo de colores",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "Además de visualizar datos fijos, se puede navegar a través de la web para obtener cualquier conjunto de datos y procesarlos para visualizar su informacion. En este caso podemos ver diferentes códigos de color extraidos de una base de datos en Github.",
      "nav_code": [
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/mVKQmUm7d"
        },
        {
          "title": "Revisa la base de datos",
          "url": "https://github.com/dariusk/corpora"
        }
      ]
    },
    {
      "id": 3,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Colores de crayola",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "El conjunto de datos se puede visualizar de forma simultánea. Te invitamos a interactuar con el mouse. Selecciona un círculo y conoce el nombre del color. ",
      "nav_code": [
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/U96i7BFox"
        },
        {
          "title": "Revisa la base de datos",
          "url": "https://github.com/dariusk/corpora"
        }
      ]
    },
    {
      "id": 4,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Leyendo Temperatura",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "A través de una API  key en  OpenWeatherMap.org, se obtiene la información de la temperatura actual en la Ciudad de México. El color del canvas cambiará si el clima es frío o caliente.",
      "nav_code": [
        {
          "title": "Edita el código",
          "url": "https://editor.p5js.org/ccdtecno/sketches/vPIbvnhEl"
        },
        {
          "title": "Revisa el proyecto OpenWeatherMap",
          "url": "https://openweathermap.org/"
        }
      ]
    },
    {
      "id": 5,
      "url": "./components/SketchContainer/scripts/CC1/script/CC_taller1_Basicos.js",
      "name": "Un satelite por el espacio",
      "autor": "ccdtecno",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/ccdtecno"
        },
        {
        "title": "Github",
        "url": "https://www.github.com/ccdtecno"
        }
      ],
      "nav_instructions": "La visualización de datos en tiempo real a través de una API también puede generar animaciones como esta, en la que los datos obtenidos del movimiento de la Estación Espacial Internacional modifican la posicion del objeto dentro del canvas.",
      "nav_code": [
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/ccdtecno/sketches/G6LheBjzE"
        },
        {
          "title": "Visita el canal de Daniel Shiffman en Youtube",
          "url": "https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw"
        }
      ]
    }
  ],
  "gallery": [
    {
      "id": 1,
      "url": "---",
      "name": "Glitch cassette",
      "autor": "Luis Tonalli Olvera Torres",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/tonalli_o"
        },
        {
        "title": "Spacehey ",
        "url": "https://spacehey.com/profile?id=98737"
        }
      ],
      "nav_instructions": "Para que comience el audio se debe subir o bajar el volumen con el controlador que se encuentra debajo de la animación",
      "nav_code": [
        {
          "title": "Prueba el código",
          "url": "https://editor.p5js.org/lutonalli/sketches/pQeYdrOEN"
        }
      ]
    },
    {
      "id": 2,
      "url": "---",
      "name": "Suspiros",
      "autor": "Jesus Ivan Rivera Ramirez",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/hunahpu_18"
        },
        {
        "title": "Twitter",
        "url": "https://www.twitter.com/hunahpu_18"
        }
      ],
      "nav_instructions": "Mueva el mouse sobre los distintos círculos blancos para escuchar los suspiros. De click sobre la pantalla para cargar un nuevo escenario.",
      "nav_code": [
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/hunahpu/sketches/YPrPLI2k0"
        }
      ]
    },
    {
      "id": 3,
      "url": "---",
      "name": "Neuronas",
      "autor": "Jesus Ivan Rivera Ramirez",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/hunahpu_18"
        },
        {
        "title": "Twitter",
        "url": "https://www.twitter.com/hunahpu_18"
        }
      ],
      "nav_instructions": "¿Como activará la música nuestro cerebro?. De click sobre la pantalla para cargar un nuevo escenario.",
      "nav_code": [
        {
          "title": "Edita el código y pruebalo ahora",
          "url": "https://editor.p5js.org/hunahpu/sketches/w4hfLjvRi"
        }
      ]
    },
    {
      "id": 4,
      "url": "---",
      "name": "k=R/r Star",
      "autor": "Gabriela Nájera Lagunas",
      "nav_contact": [
        {
        "title": "Instagram",
        "url": "https://www.instagram.com/fugitiva_esperando_quellueva"
        },
        {
        "title": "Github",
        "url": "https://github.com/fugitiva1996"
        }
      ],
      "nav_instructions": "k=R/r Star es un poema y un reproductor de música en línea. Dentro de la página se puede interactuar con botones que aumentan o reducen la velocidad de la onda del sonido, al modificar algún valor también afecta al dibujo, así cada usuario construye su dibujo. Utilicé p5.js para conectar el audio a un patrón matemático con el fin de dibujar una figura paramétrica similar a una estrella, al reproducir el audio este es emulado con el movimiento de partículas. El audio fue creado por supercollider jugando con el código.",
      "nav_code": [
        {
          "title": "Prueba este reproductor aqui",
          "url": "https://fugitiva1996.github.io/K-k-r/"
        }
      ]
    }
  ]
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
