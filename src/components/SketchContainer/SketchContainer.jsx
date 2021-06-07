import React from "react";
// import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import PropTypes from "prop-types";
// import sketch2 from "./scripts/sketch.js";
// import sketch from "./scripts/convoc/tonalli.js";
//import sketch2 from "./scripts/sketch2.js";
// import Button from "../CustomButtons/Button";

const sketchContainerStyle = {
  display: "grid",
  justifyItems: "center",
  paddingTop: "16px",
  border: "0",
  borderRadius: "3px",
};

// const SketchContainer = () => {
const SketchContainer = (props) => {
  // const [state, setState] = useState({ sketch });
  const { sketch } = props;

  return (
    <div style={sketchContainerStyle}>
      {/* <P5Wrapper sketch={state.sketch} /> */}
      <P5Wrapper sketch={sketch} />
      {/* <input
        type="range"
        defaultValue={state.rotation}
        min="0"
        max="360"
        step="1"
        onChange={(event) =>
          setState({ ...state, rotation: event.target.value })
        }
      /> */}
      {/* <Button
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
SketchContainer.propTypes = {
  sketch: PropTypes.string,
};
export default SketchContainer;
