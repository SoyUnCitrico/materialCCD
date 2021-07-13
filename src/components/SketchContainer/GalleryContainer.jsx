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

import sketch from "./scripts/convoc/tonalli.js";
import sketch2 from "./scripts/convoc/suspiros_hunahpu";
import sketch3 from "./scripts/convoc/neuron_hunahpu";
import sketch4 from "./scripts/convoc/fugitiva96";
import "./scripts/globals";
import "p5/lib/addons/p5.sound";

const GalleryContainer = (props) => {
  const { title, color, gallery } = props;
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
                <p>{gallery[page-1].name}</p>
                <br />
                <em>Autor:</em>
                <p>{gallery[page-1].autor}</p>
                <br />
                <em>Contacto:</em>
                {gallery[page-1].nav_code.length > 0 && 
                  <ul>
                    {gallery[page-1].nav_contact.map(item => 
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
                <p>{ gallery[page-1].nav_instructions }</p>
                </div>
              ),
            },
            {
              tabButton: "Código",
              tabIcon: CodeIcon,
              tabContent: (
                <div div className={classes.text_container}>
                  {gallery[page-1].nav_code.length > 0 && 
                  <ul>
                    {gallery[page-1].nav_code.map(item => 
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
    console.log(gallery)
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
        case 6:
          setState({  sketch: state.sketch = sketch6 })
          break;
        case 7:
          setState({  sketch: state.sketch = sketch7 })
          break;
        case 8:
          setState({  sketch: state.sketch = sketch8 })
          break;
        case 9:
          setState({  sketch: state.sketch = sketch9 })
          break;
        case 10:
          setState({  sketch: state.sketch = sketch10 })
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
        if((actualPage <= 1)) setPage(page=>page=gallery.length);
        else setPage(page-1);
        // console.log(p5.getAudioContext().state);
      }
    )};
    pages.push(arrow);
    for(let i = 0; i<gallery.length; i++) {
        if(page == i+1)
          newPage = {active: true, text: (i+1), onClick: (() => {
            // console.log(getAudioContext());
          })};
        else
          newPage = {active: false, text: (i+1), onClick: (() => {
            setPage(page=>page=i+1);
            // console.log(getAudioContext());
          }
        )}
        console.log("To page: ", page);
        pages.push(newPage);
      }
    arrow = { text: "SIG", onClick: (() => {
      
      if(actualPage >= gallery.length) setPage(page=>page=1);
      else setPage(page+1);
      // console.log(getAudioContext().state);
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
GalleryContainer.propTypes =  {
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
export default connect(mapStateToProps, null)(GalleryContainer);