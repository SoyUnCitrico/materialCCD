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
    },
    {
      "id": 2,
      "url": "./components/SketchContainer/scripts/CC1/script/CC1_taller2.1_posicionYMovimiento.js",
      "name": "Posicion y movimiento",
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
          "title": "Edita el código código",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
        }
      ]
    },
    {
      "id": 3,
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
          "title": "Edita el código código",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
        }
      ]
    },
    {
      "id": 4,
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
          "title": "Edita el código código",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
        }
      ]
    },
    {
      "id": 5,
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
          "title": "Edita el código código",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
        }
      ]
    },
    {
      "id": 6,
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
          "title": "Edita el código código",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
        }
      ]
    },
    {
      "id": 7,
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
          "title": "Edita el código código",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
        }
      ]
    },
    {
      "id": 8,
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
          "title": "Edita el código código",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
        }
      ]
    },
    {
      "id": 9,
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
          "title": "Edita el código código",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
        }
      ]
    },
    {
      "id": 10,
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
          "title": "Edita el código código",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
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
  "gallery": [
    {
      "id": 1,
      "name": "tvshow-2",
      "url": "In the Dark",
      "nav_title": "Scripted",
      "nav_autor": "English",
      "nav_contact": [
        {
          "title": "Instagram",
          "url": "https://www.github.com/ccdtecno"
        },
        {
          "title": "Facebook",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
        }
      ],
      "nav_instructions": "Para que comience el audio se debe subir o bajar el volumen con el controlador que se encuentra debajo de la animación",
      "nav_code": [
          {
            "title": "Copia el código",
            "url": "https://www.github.com/ccdtecno"
          },
          {
            "title": "Edita el código código",
            "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
          }
        ],
    },
    {
      "id": 2,
      "name": "tvshow-2",
      "url": "In the Dark",
      "nav_title": "Scripted",
      "nav_autor": "English",
      "nav_contact": [
        {
          "title": "Instagram",
          "url": "https://www.github.com/ccdtecno"
        },
        {
          "title": "Facebook",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
        }
      ],
      "nav_instructions": "Para que comience el audio se debe subir o bajar el volumen con el controlador que se encuentra debajo de la animación",
      "nav_code": [
          {
            "title": "Copia el código",
            "url": "https://www.github.com/ccdtecno"
          },
          {
            "title": "Edita el código código",
            "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
          }
        ],
    },
    {
      "id": 3,
      "name": "tvshow-2",
      "url": "In the Dark",
      "nav_title": "Scripted",
      "nav_autor": "English",
      "nav_contact": [
        {
          "title": "Instagram",
          "url": "https://www.github.com/ccdtecno"
        },
        {
          "title": "Facebook",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
        }
      ],
      "nav_instructions": "Para que comience el audio se debe subir o bajar el volumen con el controlador que se encuentra debajo de la animación",
      "nav_code": [
          {
            "title": "Copia el código",
            "url": "https://www.github.com/ccdtecno"
          },
          {
            "title": "Edita el código código",
            "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
          }
        ],
    },
    {
      "id": 4,
      "name": "tvshow-2",
      "url": "In the Dark",
      "nav_title": "Scripted",
      "nav_autor": "English",
      "nav_contact": [
        {
          "title": "Instagram",
          "url": "https://www.github.com/ccdtecno"
        },
        {
          "title": "Facebook",
          "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
        }
      ],
      "nav_instructions": "Para que comience el audio se debe subir o bajar el volumen con el controlador que se encuentra debajo de la animación",
      "nav_code": [
          {
            "title": "Copia el código",
            "url": "https://www.github.com/ccdtecno"
          },
          {
            "title": "Edita el código código",
            "url": "https://editor.p5js.org/ccdtecno/sketches/ABTLxL-YC"
          }
        ],
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
