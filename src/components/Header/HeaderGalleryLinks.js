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
// import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import BuildIcon from "@material-ui/icons/Build";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
// import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/components/HeaderGalleryStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderGalleryLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="sketches"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={ListIcon}
          dropdownList={[
            <Link to="/CCD1/1" className={classes.dropdownLink}>
              Ejecricio 1
            </Link>,
            <Link to="/CCD2/1" className={classes.dropdownLink}>
              Ejecricio 2
            </Link>,
            <Link to="/CCD3/1" className={classes.dropdownLink}>
              Ejecricio 3
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Menú"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={MenuIcon}
          dropdownList={[
            // <Link to="/" className={classes.dropdownLink}>
            //   <HomeIcon className={classes.dropIcon} />
            //   Home
            // </Link>,
            // <Link to="/CCD1/1" className={classes.dropdownLink}>
            //   <PermMediaIcon className={classes.dropIcon} />
            //   Galería
            // </Link>,
            <Link to="/CCD1/1" className={classes.dropdownLink}>
              <BuildIcon className={classes.dropIcon} />
              Talleres
            </Link>,
            <Link to="/about" className={classes.dropdownLink}>
              <GroupIcon className={classes.dropIcon} />
              Nosotros
          </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
