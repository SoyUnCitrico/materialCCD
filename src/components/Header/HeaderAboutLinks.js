/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";
import ListIcon from "@material-ui/icons/List";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import BuildIcon from "@material-ui/icons/Build";
import PermMediaIcon from "@material-ui/icons/PermMedia";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/components/HeaderGalleryStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderAboutLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/gallery"
          color="transparent"
          className={classes.navLink}
        >
          <PermMediaIcon className={classes.icons} />
          Galería
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/CCD1/1"
          color="transparent"
          className={classes.navLink}
        >
          <BuildIcon className={classes.icons} />
          Talleres
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/about"
          color="transparent"
          className={classes.navLink}
        >
          <GroupIcon className={classes.icons} />
          Nosotros
        </Button>
      </ListItem>
    </List>
  );
}
