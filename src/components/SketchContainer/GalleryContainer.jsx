import React, { useState } from "react";
import PropTypes from "prop-types";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import Paper from "@material-ui/core/Paper";
import NavPills from "../NavPills/NavPills";
import Paginations from "../Pagination/Pagination.js";

import PetsIcon from "@material-ui/icons/Pets";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";

import styles from "../../assets/jss/containers/GalleryPageStyle";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

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

const GalleryContainer = (props) => {
  const { title } = props;
  const [state] = useState({ rotation: 160, sketch });
  const classes = useStyles();
  const sketchStyle = {
    display: "grid",
    justifyContent: "center",
    paddingTop: "16px",
    textAlign: "center",
  };
  return (
    <GridContainer>
      <GridItem lg={12} md={12} sm={12} className={classes.main_title}>
        <h2>{title}</h2>
      </GridItem>
      <GridItem xs={12} lg={8}>
        <Paper style={sketchStyle}>
          <P5Wrapper sketch={state.sketch} rotation={state.rotation} />
        </Paper>
      </GridItem>
      <GridItem xs={12} lg={4}>
        <Paginations
          pages={[
            { text: "PREVIO" },
            { active: true, text: 1 },
            { text: 2 },
            { text: 3 },
            { text: 4 },
            { text: 5 },
            { text: "..." },
            { text: "SIGUIENTE" },
          ]}
          color="danger"
          className={classes.main_pageNumber_container}
        />
        <Paper className={classes.navpills_container}>
          <NavPills
            color="danger"
            tabs={[
              {
                tabButton: "Información",
                tabIcon: InfoIcon,
                tabContent: (
                  <div className={classes.text_container}>
                    <em>Título:</em>
                    <p>Glitch cassette</p>
                    <br />
                    <em>Autor:</em>
                    <p>Luis Tonalli Olvera Torres</p>
                    <br />
                    <em>Contacto:</em>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/tonalli_o"
                    >
                      <p>Instagram</p>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://spacehey.com/profile?id=98737"
                    >
                      <p>Spacehey</p>
                    </a>
                  </div>
                ),
              },
              {
                tabButton: "Instrucciones",
                tabIcon: PetsIcon,
                tabContent: (
                  <div div className={classes.text_container}>
                    <p>
                      Para que comience el audio se debe subir o bajar el
                      volumen con el controlador que se encuentra debajo de la
                      animación
                    </p>
                  </div>
                ),
              },
              {
                tabButton: "Código",
                tabIcon: CodeIcon,
                tabContent: (
                  <div div className={classes.text_container}>
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://editor.p5js.org/lutonalli/present/pQeYdrOEN"
                        >
                          Live
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://editor.p5js.org/lutonalli/sketches/pQeYdrOEN"
                        >
                          Link al código
                        </a>
                      </li>
                    </ul>
                  </div>
                ),
              },
            ]}
          />
        </Paper>
      </GridItem>
    </GridContainer>
  );
};
GalleryContainer.propTypes = {
  title: PropTypes.string,
};
export default GalleryContainer;
