import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// pages for this product
import HomePage from "containers/HomePage";
import AboutPage from "containers/AboutPage";
import NotFound from "containers/NotFound";
import GalleryLayout from "containers/GalleryLayout";
import GalleryContainer from "components/SketchContainer/GalleryContainer";
import IntroContainer from "components/SketchContainer/IntroContainer";
import AudioContainer from "components/SketchContainer/AudioContainer";
import DataContainer from "components/SketchContainer/DataContainer";
import HeaderGalleryLinks from "components/Header/HeaderGalleryLinks";

var hist = createBrowserHistory();

const App = () => {
  return (
    <Router history={hist}>
      <Switch>
        <Route exact path="/gallery">
          <GalleryLayout links={<HeaderGalleryLinks />} color={"danger"}>
            <GalleryContainer title={"Galería"} color={"danger"} />
          </GalleryLayout>
        </Route>
        <Route exact path="/intro">
          <GalleryLayout links={<HeaderGalleryLinks />} color={"warning"}>
            <IntroContainer
              title={"Introducción al código creativo"}
              color={"warning"}
            />
          </GalleryLayout>
        </Route>
        <Route exact path="/audio">
          <GalleryLayout links={<HeaderGalleryLinks />} color={"warning"}>
            <AudioContainer title={"Audio y web"} color={"warning"} />
          </GalleryLayout>
        </Route>
        <Route exact path="/datos">
          <GalleryLayout links={<HeaderGalleryLinks />} color={"warning"}>
            <DataContainer
              title={"Código y datos"}
              color={"warning"}
              type={2}
            />
          </GalleryLayout>
        </Route>
        <Route exact path="/about" component={AboutPage} />
        {/* <Route exact path="/gallery" component={GalleryPage} /> */}
        {/* <Route exact path="/CCD1/1" component={TallerPage} /> */}
        <Route exact path="/materialCCD" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default App;
