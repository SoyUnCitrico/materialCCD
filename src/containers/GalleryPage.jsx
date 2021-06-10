import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridItem from "../components/Grid/GridItem";
import GridContainer from "../components/Grid/GridContainer";
import Paper from "@material-ui/core/Paper";
import NavPills from "../components/NavPills/NavPills";
import Paginations from "../components/Pagination/Pagination.js";
import PaginationCCD from "../components/Pagination/PaginationCCD.jsx";
import SketchContainer from "../components/SketchContainer/SketchContainer.jsx";

import PetsIcon from "@material-ui/icons/Pets";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";
import HeaderGalleryLinks from "../components/Header/HeaderGalleryLinks";

import styles from "../assets/jss/containers/GalleryPageStyle";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

const GalleryPage = () => {
  const classes = useStyles();
  return (
    <>
      <Header
        color="danger"
        brand={"ccdtecno"}
        rightLinks={<HeaderGalleryLinks />}
      />
      <GridContainer>
        <GridItem lg={12} md={12} sm={12} className={classes.main_title}>
          <h2>Galería</h2>
        </GridItem>
        {/* <GridItem lg={8} md={6} sm={12} className={classes.main_pageNumber}>
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
        </GridItem> */}
        <GridItem xs={12} lg={8}>
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
          <PaginationCCD />
          <Paper className={classes.main_sketch}>
            <SketchContainer className={classes.main_sketch_container} />
          </Paper>
        </GridItem>
        <GridItem xs={12} lg={4}>
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
                      <br />
                      {/* <em>Software:</em>
                      <p>Animación en p5.js.</p> */}
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
      <Footer />
    </>
  );
};
export default GalleryPage;
