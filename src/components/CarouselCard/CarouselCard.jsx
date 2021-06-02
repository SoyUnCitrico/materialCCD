import React from "react";
// @material-ui/core
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../../components/Card/Card.js";
import imagen from "../../assets/img/comp/talleres_00.JPG";
import styles from "../../assets/jss/components/CarouselCardStyle";

const useStyles = makeStyles(styles);

const CarouselCard = () => {
  // const { imagen, title, text, icon } = props;
  const classes = useStyles();
  // const image1 = "../";
  return (
    <Card className={classes.carouselCard}>
      <img src={imagen} alt="PrimeraFoto" className="slick-image" />
      <div className="slick-caption">
        HOLA
        {/* {icon} */}
        {/* {title} */}
        {/* <p> {text} </p> */}
      </div>
    </Card>
  );
};
CarouselCard.propTypes = {
  imagen: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.node,
};
export default CarouselCard;
