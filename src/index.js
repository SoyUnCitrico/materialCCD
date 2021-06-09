import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import HomePage from "containers/HomePage";
import AboutPage from "containers/AboutPage";
import NotFound from "containers/NotFound";
import GalleryLayout from "containers/GalleryLayout";
import GalleryContainer from "components/SketchContainer/GalleryContainer";
import HeaderGalleryLinks from "components/Header/HeaderGalleryLinks";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/gallery">
        <GalleryLayout links={<HeaderGalleryLinks />} color={"danger"}>
          <GalleryContainer title={"Galería"} color={"danger"} />
        </GalleryLayout>
      </Route>
      <Route exact path="/intro">
        <GalleryLayout links={<HeaderGalleryLinks />} color={"warning"}>
          <GalleryContainer
            title={"Introducción al código creativo"}
            color={"warning"}
          />
        </GalleryLayout>
      </Route>
      <Route exact path="/audio">
        <GalleryLayout links={<HeaderGalleryLinks />} color={"warning"}>
          <GalleryContainer title={"Audio y web"} color={"warning"} />
        </GalleryLayout>
      </Route>
      <Route exact path="/datos">
        <GalleryLayout links={<HeaderGalleryLinks />} color={"warning"}>
          <GalleryContainer title={"Código y datos"} color={"warning"} />
        </GalleryLayout>
      </Route>
      <Route exact path="/about" component={AboutPage} />
      {/* <Route exact path="/gallery" component={GalleryPage} /> */}
      {/* <Route exact path="/CCD1/1" component={TallerPage} /> */}
      <Route exact path="/materialCCD" component={HomePage} />
      <Route exact path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
