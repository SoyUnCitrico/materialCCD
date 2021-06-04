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
            <a href="/CCD1/1" className={classes.dropdownLink}>
              <CodeIcon className={classes.dropIcon} />
              Básicos
            </a>,
            <a href="/CCD2/1" className={classes.dropdownLink}>
              <GraphicEqIcon className={classes.dropIcon} />
              Audio
            </a>,
            <a href="/CCD3/1" className={classes.dropdownLink}>
              <StorageIcon className={classes.dropIcon} />
              Datos
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Link to="/CCD1">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <CloudDownload className={classes.icons} />
              Galería
          </Button>
        </Link> */}
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
          color="transparent"
          className={classes.navLink}
        >
          <Link to="/about" style={{ color: "inherit" }}>
            <Group className={classes.icons} />
            Nosotros
          </Link>
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}
