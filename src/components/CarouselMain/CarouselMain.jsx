import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import CarouselCard from "../CarouselCard/CarouselCard";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import CodeIcon from "@material-ui/icons/Code";
// import GraphicEqIcon from "@material-ui/icons/GraphicEq";
// import StorageIcon from "@material-ui/icons/Storage";
// import PermMediaIcon from "@material-ui/icons/PermMedia";

// import image1 from "../../assets/img/sections/gallery2.png";
// import image2 from "../../assets/img/sections/intro2.png";
// import image3 from "../../assets/img/sections/audio2.png";
// import image4 from "../../assets/img/sections/datos.png";
// import styles from "../../assets/jss/material-kit-react/components/carouselMainStyle.js";

// const useStyles = makeStyles(styles);

const CarouselMain = () => {
  // const classes = useStyles();
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <>
      <Carousel {...settings}>
        <CarouselCard></CarouselCard>
        <CarouselCard></CarouselCard>
        <CarouselCard></CarouselCard>
        <CarouselCard></CarouselCard>
        {/* <div className={classes.section}>
          <img src={image1} alt="First slide" className="slick-image" />
          <div className="slick-caption">
            <h4>
              <PermMediaIcon className="slick-icons" /> Galería
            </h4>
          </div>
        </div>
        <div className={classes.section}>
          <img src={image2} alt="Second slide" className="slick-image" />
          <div className="slick-caption">
            <h4>
              <CodeIcon className="slick-icons" />
              Introducción al código creativo
            </h4>
          </div>
        </div>
        <div className={classes.section}>
          <img src={image3} alt="Third slide" className="slick-image" />
          <div className="slick-caption">
            <h4>
              <GraphicEqIcon className="slick-icons" />
              Audio y web
            </h4>
          </div>
        </div>
        <div className={classes.section}>
          <img src={image4} alt="Third slide" className="slick-image" />
          <div className="slick-caption">
            <h4>
              <StorageIcon className="slick-icons" />
              Código y datos
            </h4>
          </div>
        </div> */}
      </Carousel>
    </>
  );
};
export default CarouselMain;
