import React from "react";
import parallaxImage from "../assets/img/comp/figmaNeon_00.JPG";
import CarouselMain from "../components/CarouselMain/CarouselMain";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer.js";
import Paper from "@material-ui/core/Paper/Paper.js";
import Container from "@material-ui/core/Container";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
// import GridCon 2222um from "components/Grid/GridItem.js";

// Colores
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
//import Success from "components/Typography/Success.js";
import Parallax from "../components/Parallax/Parallax";

import styles from "../assets/jss/containers/HomePageStyle.js";

const useStyles = makeStyles(styles);

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <Header color="primary" brand={"ccdtecno"} rightLinks={<HeaderLinks />} />
      <Parallax image={parallaxImage}>
        <Container>
          <Info>
            <h3>¡Bienvenido! estas en el</h3>
          </Info>
          <Primary>
            <h2>Laboratorio de Tecnologías Compartidas</h2>
          </Primary>
        </Container>
      </Parallax>
      <Paper className={classes.home__carousel}>
        <CarouselMain></CarouselMain>
      </Paper>
      {/* <GridContainer>
        <GridItem xs={12} className={classes.home__carousel}>
          <CarouselMain></CarouselMain>
        </GridItem>
      </GridContainer> */}
      <Footer />
    </>
  );
};
export default HomePage;
