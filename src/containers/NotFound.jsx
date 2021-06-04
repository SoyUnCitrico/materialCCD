import React from "react";
import { Link } from "react-router-dom";

import Card from "components/Card/Card.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/containers/NotFoundStyle.js";
const useStyles = makeStyles(styles);

const NotFound = () => {
  const classes = useStyles();
  return (
    <GridContainer xs={12} justify={"center"}>
      <GridItem xs={4}>
        <Card className={classes.notFound_card}>
          <h1>Error 404</h1>
          <h3>¡ Lo sentimos !</h3>
          <p>No pudimos encontrar este elemento</p>
          <Link className={classes.notFound_link} to="/">
            <Button color="primary" size="sm" round>
              Regresa al Home
            </Button>
          </Link>
        </Card>
      </GridItem>
    </GridContainer>
  );
};
export default NotFound;
