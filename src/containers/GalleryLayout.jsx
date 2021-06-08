import React from "react";
import Header from "../components/Header/Header";
// import HeaderLinks from "../components/Header/HeaderLinks";
import Footer from "../components/Footer/Footer";
import PropTypes from "prop-types";

const GalleryLayout = ({ children, color, links }) => {
  return (
    <>
      <Header brand={"ccdtecno"} color={color} rightLinks={links} />
      {children}
      <Footer />
    </>
  );
};
GalleryLayout.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  links: PropTypes.node,
};
export default GalleryLayout;
