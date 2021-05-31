import React from "react";
import Header from "../components/Header/Header";
import HeaderMenu from "../components/Header/HeaderMenu";
import Footer from "../components/Footer/Footer";
import GridItem from "../components/Grid/GridItem";
import GridContainer from "../components/Grid/GridContainer";
import Container from "@material-ui/core/Container/Container";
import Paper from "@material-ui/core/Paper";
import Carousel from "../components/CarouselCard/CarouselCard";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";

import { cardTitle } from "assets/jss/material-kit-react.js";
import { makeStyles } from "@material-ui/core/styles";
const styles = {
  cardTitle,
};

const useStyles = makeStyles(styles);

const AboutPage = () => {
  const classes = useStyles();
  return (
    <>
      <Header brand="ccdtecno" color="warning" rightLinks={<HeaderMenu />} />
      <Paper>
        <Container>
          <GridContainer>
            <GridItem xs={12}>
              <h2>Laboratorio de Tecnologías Compartidas</h2>
            </GridItem>
            <GridItem xs={8} justify="stretch">
              <Carousel></Carousel>
            </GridItem>
            <GridItem xs={4} justify="center">
              <Card>
                <h3>Un espacio del Centro de Cultura Digital</h3>
                <p>
                  Es un laboratorio para abrir cajas negras, pasar del consumo a
                  la producción de tecnologías: Tecnologías creativas, críticas,
                  sustentables, sociales, accesibles, incluyentes y
                  reutilizables. Aquí se diseñan y manufacturan prototipos de
                  software y hardware, todo lo que se hace se comparte,
                  incluyendo los procesos, código, esquemas, bocetos y planos.
                  Realizamos asesorías, talleres, conferencias y conciertos,
                  acercando conceptos a la gente para desmitificar tecnología, y
                  esta misma sea transformada por los visitantes del CCD para
                  aplicarla dentro de su entorno.
                </p>
                <div>Aqui van a ir unos botones</div>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12}>
              <h3>Aquí va el título de la sección</h3>
            </GridItem>
            <GridItem xs={6}>
              <Card style={{ width: "95%" }}>
                {/* <Card style={{ width: "20rem" }}>
                <CardHeader color="warning">Featured</CardHeader> */}
                <CardBody>
                  <h4 className={classes.cardTitle}>Special title treatment</h4>
                  <p>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Button color="info">Do something</Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={6}>
              <Card style={{ width: "95%" }}>
                {/* <Card style={{ width: "20rem" }}>
                <CardHeader color="warning">Featured</CardHeader> */}
                <CardBody>
                  <h4 className={classes.cardTitle}>Special title treatment</h4>
                  <p>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Button color="info">Do something</Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </Container>
      </Paper>
      <Footer />
    </>
  );
};
export default AboutPage;
