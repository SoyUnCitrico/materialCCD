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

// const image1 = "../../assets/img/sections/gallery2.png";
// const image2 = "../../assets/img/sections/intro2.png";
// import image3 from "../../assets/img/sections/audio2.png";
// import image4 from "../../assets/img/sections/datos.png";
import styles from "../../assets/jss/components/carouselMainStyle";

const useStyles = makeStyles(styles);

const CarouselMain = () => {
  const classes = useStyles();
  const settings = {
    centerMode: false,
    centerPadding: "30px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  // const title1 = "no hay";
  return (
    <Carousel {...settings} className={classes.carousel_container}>
      <CarouselCard></CarouselCard>
      <CarouselCard></CarouselCard>
      <CarouselCard></CarouselCard>
      <CarouselCard></CarouselCard>
    </Carousel>
  );
};
export default CarouselMain;
