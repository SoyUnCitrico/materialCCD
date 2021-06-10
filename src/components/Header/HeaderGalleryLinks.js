/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
// import MenuIcon from "@material-ui/icons/Menu";
import ListIcon from "@material-ui/icons/List";
import CodeIcon from "@material-ui/icons/Code";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import GroupIcon from "@material-ui/icons/Group";
import BuildIcon from "@material-ui/icons/Build";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import StorageIcon from "@material-ui/icons/Storage";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/components/HeaderGalleryStyle.js";
import HeaderDropdownLinks from "./HeaderDropdownLinks";

const useStyles = makeStyles(styles);

export default function HeaderGalleryLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <HeaderDropdownLinks />
      </ListItem> */}
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
            <Link to="/intro" className={classes.dropdownLink}>
              <CodeIcon className={classes.dropIcon} />
              Básicos
            </Link>,
            <Link to="/audio" className={classes.dropdownLink}>
              <GraphicEqIcon className={classes.dropIcon} />
              Audio
            </Link>,
            <Link to="/datos" className={classes.dropdownLink}>
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
          <Link to={"/gallery"} style={{ color: "inherit" }}>
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
          <Link to={"/about"} style={{ color: "inherit" }}>
            <GroupIcon className={classes.icons} />
            Nosotros
          </Link>
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          href="/about"
          color="transparent"
          className={classes.navLink}
        >
          <HomeIcon className={classes.icons} />
          Home
        </Button>
      </ListItem> */}
    </List>
  );
}
