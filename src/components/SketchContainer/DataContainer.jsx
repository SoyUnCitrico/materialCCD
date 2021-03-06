/*eslint-disable*/
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import Paper from "@material-ui/core/Paper";
import NavPills from "../NavPills/NavPills";
import Paginations from "../Pagination/Pagination.js";;

import PetsIcon from "@material-ui/icons/Pets";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";

import styles from "../../assets/jss/containers/GalleryPageStyle";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

import P5Wrapper from "react-p5-wrapper";

import sketch from "./scripts/CC3/Clase1/Ejemplo2";
import sketch2 from "./scripts/CC3/Clase2/Ejemplo4";
import sketch3 from "./scripts/CC3/Clase3/Ejemplo5";
import sketch4 from "./scripts/CC3/Clase3/Ejemplo6";
import sketch5 from "./scripts/CC3/Clase4/Ejemplo8";

const DataContainer = (props) => {
  const { title, color, dataCode } = props;
  const [page, setPage] = useState(1);
  const [state, setState] = useState({ sketch });
  const classes = useStyles();

  const renderNav = () => {
      return (
        <NavPills
          color={color}
          tabs={[
            {
              tabButton: "Información",
              tabIcon: InfoIcon,
              tabContent: (
                <div className={classes.text_container}>
                <em>Título:</em>
                <p>{dataCode[page-1].name}</p>
                <br />
                <em>Autor:</em>
                <p>{dataCode[page-1].autor}</p>
                <br />
                <em>Contacto:</em>
                {dataCode[page-1].nav_code.length > 0 && 
                  <ul>
                    {dataCode[page-1].nav_contact.map(item => 
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={item.url}
                        >
                          {item.title}
                        </a>
                    </li>
                    )}
                  </ul>
                  }
              </div>
              ),
            },
            {
              tabButton: "Instrucciones",
              tabIcon: PetsIcon,
              tabContent: (
                <div div className={classes.text_container}>
                <p>{ dataCode[page-1].nav_instructions }</p>
                </div>
              ),
            },
            {
              tabButton: "Código",
              tabIcon: CodeIcon,
              tabContent: (
                <div div className={classes.text_container}>
                  {dataCode[page-1].nav_code.length > 0 && 
                  <ul>
                    {dataCode[page-1].nav_code.map(item => 
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={item.url}
                        >
                          {item.title}
                        </a>
                    </li>
                    )}
                  </ul>
                  }
                </div>
              ),
            },
          ]}
        />
      )
  };

  const renderPagination = () => {
    console.log(dataCode)
    return(
      <Paginations
        pages={paginationArray()} 
        color={color}
        className={classes.main_pageNumber_container}
      />
    );
  }

  const selectSketch = (number) => {
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
        case 5:
          setState({  sketch: state.sketch = sketch5 })
          break;
        default:
          setState({  sketch: state.sketch = sketch })
          break;
      }
  };

  function paginationArray() {
    let actualPage = page;
    let pages = []
    let newPage;
    let arrow = {text: "PREV", onClick: (()=>{
        if((actualPage <= 1))
        setPage(page=>page=dataCode.length);
        else
          setPage(page-1);
      }
    )};
    pages.push(arrow);
    for(let i = 0; i<dataCode.length; i++) {
        if(page == i+1)
          newPage = {active: true, text: (i+1), onClick: (() => {})};
        else
          newPage = {active: false, text: (i+1), onClick: (() => {
            setPage(page=>page=i+1);
          }
        )}
        console.log("To page: ", page);
        pages.push(newPage);
      }
    arrow = { text: "SIG", onClick: (() => {
      
      if(actualPage >= dataCode.length)
        setPage(page=>page=1);
      else
        setPage(page+1);
      }
    )};
    pages.push(arrow);
    return pages;
  };

  useEffect(()=>selectSketch(page),[page]);
    
  return (
    <Fragment>
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
            {renderPagination()}
            <Paper className={classes.navpills_container}>
              {renderNav()}
            </Paper>
          </GridItem>
        </GridContainer>
      </Fragment>
  );
};
DataContainer.propTypes =  {
  title: PropTypes.string,
  color: PropTypes.string,
};
const mapStateToProps = state => {
  return {
    intro: state.intro,
    audio: state.audio,
    dataCode: state.dataCode,
    gallery: state.gallery
  };
};
export default connect(mapStateToProps, null)(DataContainer);