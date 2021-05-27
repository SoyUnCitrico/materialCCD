import React from "react";
import parallaxImage from "../assets/img/profile-bg.jpg";
import Carousel from "react-slick";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer.js";
import Container from "@material-ui/core/Container";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

// Colores
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
//import Success from "components/Typography/Success.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import Parallax from "../components/Parallax/Parallax";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

const HomePage = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <>
      <Header
        color="primary"
        brand={"Laboratorio de Tecnologías Compartidas"}
        leftLinks={<HeaderLinks />}
      />
      <Parallax image={parallaxImage}>
        <Container>
          <Primary>
            <h2>¡Hola! estas en</h2>
          </Primary>
          <Info>
            <h1>ccdtecno</h1>
          </Info>
        </Container>
      </Parallax>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
          <Card carousel>
            <Carousel {...settings}>
              <div>
                <img src={image1} alt="First slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <LocationOn className="slick-icons" />
                    Yellowstone National Park, United States
                  </h4>
                </div>
              </div>
              <div>
                <img src={image2} alt="Second slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <LocationOn className="slick-icons" />
                    Somewhere Beyond, United States
                  </h4>
                </div>
              </div>
              <div>
                <img src={image3} alt="Third slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <LocationOn className="slick-icons" />
                    Yellowstone National Park, United States
                  </h4>
                </div>
              </div>
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
      <Footer />
    </>
  );
};
export default HomePage;
