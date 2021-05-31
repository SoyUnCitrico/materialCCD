import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import image1 from "../../assets/img/comp/talleres_00.JPG";
import Card from "../../components/Card/Card.js";

import styles from "../../assets/jss/components/CarouselCardStyle";

const useStyles = makeStyles(styles);

const CarouselCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <img src={image1} alt="First slide" className="slick-image" />
      <div className="slick-caption">
        <h4>
          {/* <LocationOn className="slick-icons" /> */}
          Galería
        </h4>
      </div>
    </Card>
  );
};
export default CarouselCard;
