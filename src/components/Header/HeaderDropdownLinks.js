/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import { makeStyles } from "@material-ui/core/styles";
import ListIcon from "@material-ui/icons/List";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import styles from "assets/jss/components/HeaderGalleryStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderDropdownLinks(props) {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <CustomDropdown
        noLiPadding
        buttonText="Sketches"
        buttonProps={{
          className: classes.navLink,
          color: "transparent",
        }}
        buttonIcon={ListIcon}
        dropdownList={[
          <Link to="/intro" className={classes.dropdownLink}>
            Básicos
          </Link>,
          <Link to="/intro/2" className={classes.dropdownLink}>
            Posición y Movimiento
          </Link>,
          <Link to="/intro/3" className={classes.dropdownLink}>
            Típos de animación
          </Link>,
        ]}  
      />    
    </ListItem>
  );
}
