import React from "react";
import Header from "../components/Header/Header";
import HeaderAboutLinks from "../components/Header/HeaderLinks";
// import HeaderAboutLinks from "../components/Header/HeaderAboutLinks";
// import HeaderAboutLinks from "../components/Header/HeaderGalleryLinks";
import Footer from "../components/Footer/Footer";
import GridItem from "../components/Grid/GridItem";
import GridContainer from "../components/Grid/GridContainer";
// import Container from "@material-ui/core/Container/Container";
import Paper from "@material-ui/core/Paper";
import Carousel from "../components/CarouselMain/CarouselAbout";
// Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";

import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/containers/AboutPageStyle";

const useStyles = makeStyles(styles);
const AboutPage = () => {
  const classes = useStyles();
  return (
    <>
      <Header
        brand="ccdtecno"
        color="primary"
        rightLinks={<HeaderAboutLinks />}
      />
      <Paper className={classes.main_Container}>
        <GridContainer>
          <GridItem xs={12} className={classes.mainTitle}>
            <h2>Laboratorio de Tecnologías Compartidas</h2>
          </GridItem>
          <GridItem
            sm={12}
            lg={7}
            justify="center"
            className={classes.mainCarousel}
          >
            <Carousel className={classes.carouselContainer}></Carousel>
          </GridItem>
          <GridItem
            sm={12}
            lg={5}
            justify="center"
            className={classes.mainDescription}
          >
            <Card className={classes.mainDescription_card}>
              {/* <h3>FAQ</h3> */}
              <h3>¿Qué es el laboratorio?</h3>
              <p>
                Es un laboratorio para abrir cajas negras, pasar del consumo a
                la producción de tecnologías: Tecnologías creativas, críticas,
                sustentables, sociales, accesibles, incluyentes y reutilizables.
              </p>
              <p>
                Aquí se diseñan y manufacturan prototipos de software y
                hardware, todo lo que se hace se comparte, incluyendo los
                procesos, código, esquemas, bocetos y planos.
              </p>
              {/* <h4>¿Qué hacemos?</h4> */}
              <p>
                Realizamos asesorías, talleres, conferencias y conciertos,
                acercando conceptos a la gente para desmitificar tecnología, y
                esta misma sea transformada por los visitantes del CCD para
                aplicarla dentro de su entorno.
              </p>
              <div className={classes.mainDescription_buttons}>
                <h5>Ponte en contacto:</h5>
                <div>
                  <Button
                    href="https://www.facebook.com/CentroCulturaDigital"
                    target="_blank"
                    justIcon
                    round
                    size="sm"
                    color="facebook"
                    className={classes.icon_description}
                  >
                    <FacebookIcon />
                  </Button>
                  <Button
                    href="https://www.instagram.com/ccdtecno"
                    target="_blank"
                    justIcon
                    round
                    size="sm"
                    color="primary"
                    className={classes.icon_description}
                  >
                    <InstagramIcon />
                  </Button>
                  <Button
                    href="https://www.github.com/ccdtecno"
                    target="_blank"
                    justIcon
                    round
                    color="github"
                    size="sm"
                    className={classes.icon_description}
                  >
                    <GitHubIcon />
                  </Button>
                  <Button
                    href="mailto:tecnologia.ccd@gmail.com"
                    target="_blank"
                    justIcon
                    round
                    color="google"
                    size="sm"
                    className={classes.icon_description}
                  >
                    <MailIcon />
                  </Button>
                </div>
              </div>
            </Card>
          </GridItem>
        </GridContainer>
      </Paper>
      {/* <GridContainer>
        <GridItem xs={12}>
          <h3>Aquí va el título de la sección</h3>
        </GridItem>
        <GridItem xs={6}>
          <Card style={{ width: "95%" }}>
            <CardBody>
              <h4 className={classes.cardTitle}>Special title treatment</h4>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button color="info">Do something</Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6}>
          <Card style={{ width: "95%" }}>
            <CardBody>
              <h4 className={classes.cardTitle}>Special title treatment</h4>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button color="info">Do something</Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer> */}
      <Footer />
    </>
  );
};
export default AboutPage;
