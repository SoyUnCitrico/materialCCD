import React from "react";
// @material-ui/core
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../../components/Card/Card.js";
import { Link } from "react-router-dom";
import styles from "../../assets/jss/components/CarouselCardStyle";

const useStyles = makeStyles(styles);

const CarouselCard = (props) => {
  const {
    imagen,
    title,
    text,
    icon,
    alt = "image_default",
    link,
    // otrapripedad = "",
  } = props;
  console.log(imagen);
  const classes = useStyles();
  return (
    <Card className={classes.carouselCard}>
      <Link to={link}>
        <img src={imagen} alt={alt} className="slick-image" />
        <div className="slick-caption">
          <span>{icon}</span>
          <h3>{title}</h3>
          <p> {text} </p>
        </div>
      </Link>
    </Card>
  );
};
CarouselCard.propTypes = {
  imagen: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.node,
  alt: PropTypes.string,
  link: PropTypes.string,
};
export default CarouselCard;
