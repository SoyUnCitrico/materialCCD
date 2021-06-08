import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";

import sketch from "./scripts/convoc/tonalli.js";

// import sketch from "./scripts/CC1/script/CC_taller1_Basicos";
// import sketch from "./scripts/CC1/script/CC1_taller2.1_posicionYMovimiento";
// import sketch from "./scripts/CC1/script/CC1_taller2.2";
// import sketch from "./scripts/CC1/script/CC1_taller2.3_tiposDeMovimiento";
// import sketch from "./scripts/CC1/script/CC1_taller3_keyIF";
// import sketch from "./scripts/CC1/script/CC1_taller3_MouseElse";
// import sketch from "./scripts/CC1/script/CC1_taller4_while";
// import sketch from "./scripts/CC1/script/CC1_taller4_baseMovbolita";
// import sketch from "./scripts/CC1/script/CC1_taller4_MultipleMovbolita";
// import sketch from "./scripts/CC1/script/CC1_taller4_Movbolita_loopAnidado";

// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo1_fondoFigura";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo1_cuadradoCirculos";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo1_tonosGris";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo2_BolitaBasico ";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo2_BolitaFronteraBasico";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo2.5_Bolita_vectores";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo2.5._Bolita_vectores_Muchos";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo3_mousePaint";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo3_Bolita_mouseInt";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo4_Movbolita_loopAnidado_aros";

const SketchContainer = () => {
  const [state] = useState({ rotation: 160, sketch });
  const sketchStyle = {
    display: "grid",
    justifyContent: "center",
    paddingTop: "16px",
    textAlign: "center",
  };
  return (
    <div style={sketchStyle}>
      <P5Wrapper sketch={state.sketch} rotation={state.rotation} />
      {/* <input
        type="range"
        defaultValue={state.rotation}
        min="0"
        max="360"
        step="1"
        onChange={(event) =>
          setState({ ...state, rotation: event.target.value })
        }
      />
      <Button
        onClick={() =>
          setState({
            ...state,
            sketch: state.sketch === sketch ? sketch2 : sketch,
          })
        }
      >
        Change Sketch
      </Button> */}
    </div>
  );
};
export default SketchContainer;
