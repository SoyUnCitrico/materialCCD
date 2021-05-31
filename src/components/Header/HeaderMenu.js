import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
const useStyles = makeStyles(styles);

const HeaderMenu = () => {
  const classes = useStyles();
  return (
    <List>
      <ListItem>
        <Button
          href="#pablo"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          Link
        </Button>
      </ListItem>
    </List>
  );
};
export default HeaderMenu;
