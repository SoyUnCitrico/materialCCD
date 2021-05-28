import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridItem from "../components/Grid/GridItem";
import GridContainer from "../components/Grid/GridContainer";
import NavPills from "../components/NavPills/NavPills";
import Paginations from "../components/Pagination/Pagination.js";
import Paper from "@material-ui/core/Paper";
// import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles(styles);
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

const GalleryPage = () => {
  //   const classes = useStyles();
  return (
    <>
      <Header color="info" brand={"Galería"} />
      <GridContainer>
        <GridItem xs={12} justify="center">
          <Paginations
            pages={[
              { text: "PREV" },
              { text: 1 },
              { text: 2 },
              { active: true, text: 3 },
              { text: 4 },
              { text: 5 },
              { text: "NEXT" },
            ]}
            color="info"
          />
        </GridItem>
        <GridItem xs={8}>
          <Paper>
            <h3>Aqui va el sketch</h3>
          </Paper>
        </GridItem>
        <GridItem xs={4}>
          <Paper>
            <NavPills
              color="primary"
              tabs={[
                {
                  tabButton: "Dashboard",
                  tabIcon: Dashboard,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: "Schedule",
                  tabIcon: Schedule,
                  tabContent: (
                    <span>
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas.
                      </p>
                      <br />
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: "Tasks",
                  tabIcon: List,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                    </span>
                  ),
                },
              ]}
            />
          </Paper>
        </GridItem>
      </GridContainer>
      <Footer />
    </>
  );
};
export default GalleryPage;
