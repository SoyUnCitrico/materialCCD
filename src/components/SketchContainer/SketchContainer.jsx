import React, { Fragment, useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import sketch2 from "./scripts/sketch.js";
import sketch from "./scripts/convoc/tonalli.js";
//import sketch2 from "./scripts/sketch2.js";
import Button from "../CustomButtons/Button";

const SketchContainer = () => {
  const [state, setState] = useState({ rotation: 160, sketch });

  return (
    <Fragment>
      <P5Wrapper sketch={state.sketch} rotation={state.rotation} />
      <input
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
      </Button>
    </Fragment>
  );
};
export default SketchContainer;
