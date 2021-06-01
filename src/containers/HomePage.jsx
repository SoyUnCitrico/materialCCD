import React from "react";
import parallaxImage from "../assets/img/comp/mensajesSonoros_00.jpg";
import CarouselMain from "../components/CarouselMain/CarouselMain";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer.js";
import GridItem from "components/Grid/GridItem.js";
import Container from "@material-ui/core/Container";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Colores
import Primary from "components/Typography/Primary.js";
// import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Parallax from "../components/Parallax/Parallax";

import styles from "../assets/jss/containers/HomePageStyle.js";
import GridContainer from "components/Grid/GridContainer";

const useStyles = makeStyles(styles);

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <Header color="warning" brand={"ccdtecno"} rightLinks={<HeaderLinks />} />
      <Parallax image={parallaxImage}>
        <Container>
          <Success>
            <h3>¡Bienvenido! </h3>
          </Success>
          <Primary>
            <h2>Laboratorio de Tecnologías Compartidas</h2>
          </Primary>
        </Container>
      </Parallax>
      <GridContainer>
        <GridItem xs={12} className={classes.carousel__container}>
          <CarouselMain></CarouselMain>
        </GridItem>
      </GridContainer>
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
