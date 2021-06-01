import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../../components/Card/Card.js";

import styles from "../../assets/jss/components/CarouselCardStyle";

const useStyles = makeStyles(styles);

const CarouselCard = (props) => {
  const { imagen, title, text, icon } = props;
  const classes = useStyles();
  return (
    <Card className={classes.carouselCard}>
      <img src={imagen} alt="First slide" className="slick-image" />
      <div className="slick-caption">
        <h4>
          {icon}
          {title}
        </h4>
        <p> {text} </p>
      </div>
    </Card>
  );
};
export default CarouselCard;

CarouselCard.propTypes = { 
  imagen: PropTypes.img,
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.node,
};
