/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import Paper from "@material-ui/core/Paper";
import NavPills from "../NavPills/NavPills";
import Paginations from "../Pagination/Pagination.js";
// import PaginationCCD from "../Pagination/PaginationCCD.jsx";

import PetsIcon from "@material-ui/icons/Pets";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";

import styles from "../../assets/jss/containers/GalleryPageStyle";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

import P5Wrapper from "react-p5-wrapper";
// import sketch from "./scripts/convoc/tonalli.js";

// import sketch from "./scripts/CC1/script/CC_taller1_Basicos";
// import sketch2 from "./scripts/CC1/script/CC1_taller2.1_posicionYMovimiento";
import sketch3 from "./scripts/CC1/script/CC1_taller2.2";
import sketch4 from "./scripts/CC1/script/CC1_taller2.3_tiposDeMovimiento";
// import sketch from "./scripts/CC1/script/CC1_taller3_keyIF";
// import sketch from "./scripts/CC1/script/CC1_taller3_MouseElse";
// import sketch from "./scripts/CC1/script/CC1_taller4_while";
// import sketch from "./scripts/CC1/script/CC1_taller4_baseMovbolita";
// import sketch from "./scripts/CC1/script/CC1_taller4_MultipleMovbolita";
// import sketch from "./scripts/CC1/script/CC1_taller4_Movbolita_loopAnidado";

// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo1_fondoFigura";
import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo1_cuadradoCirculos";
import sketch2 from "./scripts/CC1/Ejemplos/CC1_ejemplo1_tonosGris";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo2_BolitaBasico ";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo2_BolitaFronteraBasico";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo2.5_Bolita_vectores";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo2.5._Bolita_vectores_Muchos";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo3_mousePaint";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo3_Bolita_mouseInt";
// import sketch from "./scripts/CC1/Ejemplos/CC1_ejemplo4_Movbolita_loopAnidado_aros";

import readState from "../../hooks/readState";
const API = "http://localhost:3000/sketchsInfo";

const GalleryContainer = (props) => {
  const { title, color, type } = props;
  const [page, setPage] = useState(1);
  const [state, setState] = useState({ sketch });
  const [info, setInfo] = useState({
    name: "",
    autor: ""
  });
  const classes = useStyles();
  const actualState = readState(API);
  const infoIntro = Array.from(actualState.intro);

  function selectSketch(number) {
    switch(number) {
      case 1:
        setState({  sketch: state.sketch = sketch })
        break;
      case 2:
        setState({  sketch: state.sketch = sketch2 })
        break;
      case 3:
        setState({  sketch: state.sketch = sketch3 })
        break;
      case 4:
        setState({  sketch: state.sketch = sketch4 })
        break;
      default:
        setState({  sketch: state.sketch = sketch })
        break;
    }
  }
  
  function getInfo() {
    let data = infoIntro[page-1]
    setInfo(data=>{
      name: info.name = data.name.toString();
    })
  }

  function paginationArray() {
    let pages = []
    let newPage;
    let arrow = {text: "PREV"};
    pages.push(arrow);
    for(let i = 0; i<infoIntro.length; i++) {
      if(page == i+1)
        newPage = {active: true, text: (i+1), onClick: (() => {
        })};
      else
        newPage = {active: false, text: (i+1), onClick: (() => {
          selectSketch(i+1);
          // getInfo();
          setPage(page=>page=i+1);
        }
      )}
      console.log("To page: ", page);
      pages.push(newPage);
    }
    arrow = {text: "SIG"}
    pages.push(arrow);
    return pages;
  }

  
  return (
    <GridContainer>
      <GridItem lg={12} md={12} sm={12} className={classes.main_title}>
        <h2>{title}</h2>
      </GridItem>
      <GridItem sm={12} lg={8} className={classes.paper_container}>
        <Paper className={classes.sketchStyle} >
          <P5Wrapper sketch={state.sketch} />
        </Paper>
      </GridItem>
      <GridItem sm={12} lg={4} className={classes.control_container}> 
        <Paginations
          pages={paginationArray()}
          color={color}
          className={classes.main_pageNumber_container}
        />
        <Paper className={classes.navpills_container}>
          <NavPills
            color={color}
            tabs={[
              {
                tabButton: "Información",
                tabIcon: InfoIcon,
                tabContent: (
                  <div className={classes.text_container}>
                    <em>Título:</em>
                    {/* <p>{`${(infoIntro[page-1].name)}`}</p> */}
                    {/* <p>{{info.name}}</p> */}
                    <br />
                    <em>Autor:</em>
                    {/* <p>{`${(infoIntro[page-1].autor)}`}</p> */}
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
  color: PropTypes.string,
  type: PropTypes.number,
};
export default GalleryContainer;
