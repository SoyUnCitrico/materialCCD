import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import CarouselCard from "../CarouselCard/CarouselCard";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import CodeIcon from "@material-ui/icons/Code";
// import GraphicEqIcon from "@material-ui/icons/GraphicEq";
// import StorageIcon from "@material-ui/icons/Storage";
// import PermMediaIcon from "@material-ui/icons/PermMedia";

import image1 from "../../assets/img/sections/gallery2.png";
import image2 from "../../assets/img/sections/intro2.png";
import image3 from "../../assets/img/sections/audio2.png";
import image4 from "../../assets/img/sections/datos.png";
import styles from "../../assets/jss/components/carouselMainStyle";

const useStyles = makeStyles(styles);

const CarouselMain = () => {
  const classes = useStyles();
  const settings = {
    centerMode: true,
    // centerPadding: "30px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
  };
  // const title1 = "no hay";
  return (
    <Carousel {...settings} className={classes.carousel_container}>
      <CarouselCard
        imagen={image2}
        title={"Introducción"}
        alt={"Imagen_01"}
        link={"/CCD1/1"}
      ></CarouselCard>
      <CarouselCard
        imagen={image3}
        title={"Audio y web"}
        alt={"Imagen_02"}
        link={"/CCD1/1"}
        colorText={"white"}
      ></CarouselCard>
      <CarouselCard
        imagen={image4}
        title={"Datos"}
        alt={"Imagen_03"}
        link={"/CCD1/1"}
      ></CarouselCard>
      <CarouselCard
        imagen={image1}
        title={"Galería"}
        alt={"Imagen_04"}
        link={"/gallery"}
      ></CarouselCard>
    </Carousel>
  );
};
export default CarouselMain;
