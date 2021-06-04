import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SketchContainer = (props) => {
  const { ligaUrl } = props;
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const newScript = document.createElement("script");
    newScript.src = ligaUrl;
    newScript.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(newScript);
  }, []);
  useEffect(() => {
    if (!loaded) return;
  }, [loaded]);
  return <>{loaded ? "Script loaded" : "Script NOT loaded"} </>;
};
SketchContainer.propTypes = {
  ligaUrl: PropTypes.string,
};
export default SketchContainer;
