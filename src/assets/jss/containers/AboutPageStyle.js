const AboutPageStyle = (theme) => ({
  mainTitle: {
    display: "center",
    textAlign: "center",
    // background: "blue",
  },
  mainCarousel: {
    display: "grid",
    justifyContent: "center",
    // background: "orange",
  },
  mainDescription: {
    display: "grid",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1rem",
    },
    "& h3": {
      marginBottom: "1.2rem",
      padding: "0 1rem",
    },
    "& h4": {
      // marginBottom: "1.2rem",
      padding: "0 1rem",
    },
    "& p": {
      marginBottom: "1rem",
      padding: "0 1rem",
    },
  },
  mainDescription_card: {
    marginBottoms: "2rem",
    width: "90%",
  },
  mainDescription_buttons: {
    display: "grid",
    justifyContent: "center",
    padding: "1rem",
    textAlign: "center",
  },
  icon_description: {
    marginLeft: "3px",
    marginRight: "3px",
  },
  main_Container: {
    // opacity: "0.2",
  },
});
export default AboutPageStyle;
