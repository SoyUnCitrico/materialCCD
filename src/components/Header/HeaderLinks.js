/*eslint-disable*/
import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import StorageIcon from "@material-ui/icons/Storage";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import BuildIcon from "@material-ui/icons/Build";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, Group } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Talleres"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={BuildIcon}
          dropdownList={[
            <Link to="/CCD1/1" className={classes.dropdownLink}>
              <CodeIcon className={classes.dropIcon} />
              Básicos
            </Link>,
            <Link to="/CCD2/1" className={classes.dropdownLink}>
              <GraphicEqIcon className={classes.dropIcon} />
              Audio
            </Link>,
            <Link to="/CCD3/1" className={classes.dropdownLink}>
              <StorageIcon className={classes.dropIcon} />
              Datos
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        > 
          <Link to="/gallery" style={{ color: "inherit" }}>
            <PermMediaIcon className={classes.icons} />
            Galería
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <Link to="/about" style={{ color: "inherit" }}>
            <Group className={classes.icons} />
            Nosotros
          </Link>
        </Button>
      </ListItem>
    </List>
  );
}
