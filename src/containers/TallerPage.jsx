import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridItem from "../components/Grid/GridItem";
import GridContainer from "../components/Grid/GridContainer";
import Paper from "@material-ui/core/Paper";
import NavPills from "../components/NavPills/NavPills";
import Paginations from "../components/Pagination/Pagination.js";
import SketchContainer from "../components/SketchContainer/SketchContainer.jsx";

import PetsIcon from "@material-ui/icons/Pets";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";
import HeaderGalleryLinks from "../components/Header/HeaderGalleryLinks";

import styles from "../assets/jss/containers/TallerPageStyle";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

const TallerPage = () => {
  const classes = useStyles();
  return (
    <>
      <Header
        color="warning"
        brand={"Talleres"}
        rightLinks={<HeaderGalleryLinks />}
      />
      <GridContainer>
        <GridItem xs={12} className={classes.main_pageNumber}>
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
            color="warning"
          />
        </GridItem>
        <GridItem xs={12} lg={8}>
          <Paper className={classes.main_sketch}>
            <SketchContainer className={classes.main_sketch_container} />
          </Paper>
        </GridItem>
        <GridItem xs={12} lg={4}>
          <Paper className={classes.navpills_container}>
            <NavPills
              color="warning"
              tabs={[
                {
                  tabButton: "Instrucciones",
                  tabIcon: PetsIcon,
                  tabContent: (
                    <div className={classes.text_container}>
                      <p>
                        Hola, bienvenidx a la galería de ccdtecno. Aquí todxs
                        colaboramxs para generar contenido de interes para la
                        comunidad.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                    </div>
                  ),
                },
                {
                  tabButton: "Información",
                  tabIcon: InfoIcon,
                  tabContent: (
                    <div div className={classes.text_container}>
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas.
                      </p>
                      <br />
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas.
                      </p>
                    </div>
                  ),
                },
                {
                  tabButton: "Código",
                  tabIcon: CodeIcon,
                  tabContent: (
                    <div div className={classes.text_container}>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
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
export default TallerPage;
