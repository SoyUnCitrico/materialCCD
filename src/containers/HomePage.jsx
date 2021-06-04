import React from "react";
import parallaxImage from "../assets/img/comp/mensajesSonoros_00.jpg";
import CarouselMain from "../components/CarouselMain/CarouselMain";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer.js";
import GridItem from "components/Grid/GridItem.js";
// import Container from "@material-ui/core/Container";
import Parallax from "../components/Parallax/Parallax";
import GridContainer from "components/Grid/GridContainer";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/containers/HomePageStyle.js";
const useStyles = makeStyles(styles);

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <Header color="primary" brand={"ccdtecno"} rightLinks={<HeaderLinks />} />
      <Parallax image={parallaxImage}>
        <GridContainer lg={12} className={classes.hero}>
          <GridItem lg={5} className={classes.hero_text}>
            <h3>¡Bienvenido!</h3>
            <p>estás en el</p>
            <h2>Laboratorio de Tecnologías Compartidas</h2>
          </GridItem>
        </GridContainer>
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
