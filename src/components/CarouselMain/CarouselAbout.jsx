import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import CarouselCard from "../CarouselCard/CarouselCard";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import image1 from "../../assets/img/sections/gallery2.png";
import image2 from "../../assets/img/sections/intro2.png";
import image3 from "../../assets/img/sections/audio2.png";
import image4 from "../../assets/img/sections/datos.png";
import styles from "../../assets/jss/components/CarouselAboutStyle";

const useStyles = makeStyles(styles);

const CarouselAbout = () => {
  const classes = useStyles();

  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
  };
  // const title1 = "no hay";
  return (
    <Carousel {...settings} className={classes.carousel_container}>
      <CarouselCard
        imagen={image1}
        // title={"Hola"}
        // text={"Esta es una imagen"}
        alt={"imagen_01"}
        className={classes.carousel_card}
      ></CarouselCard>
      <CarouselCard
        imagen={image2}
        // title={"Hola"}
        // text={"Esta es una imagen"}
        alt={"imagen_02"}
      ></CarouselCard>
      <CarouselCard
        imagen={image3}
        // title={"Hola"}
        // text={"Esta es una imagen"}
        alt={"imagen_03"}
      ></CarouselCard>
      <CarouselCard
        imagen={image4}
        // title={"Hola"}
        // text={"Esta es una imagen"}
        alt={"imagen_04"}
      ></CarouselCard>
    </Carousel>
  );
};
export default CarouselAbout;
