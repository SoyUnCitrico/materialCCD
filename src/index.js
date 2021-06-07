import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
// import Components from "views/Components/Components.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";
import HomePage from "containers/HomePage";
import GalleryPage from "containers/GalleryPage";
import TallerPage from "containers/TallerPage";
import AboutPage from "containers/AboutPage";
import NotFound from "containers/NotFound";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} /> */}
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/gallery" component={GalleryPage} />
      <Route exact path="/CCD1/1" component={TallerPage} />
      <Route exact path="/materialCCD" component={HomePage} />
      <Route exact path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
