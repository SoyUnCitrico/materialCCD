const CarouselCardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    marginRight: "30px",
    borderRadius: "16px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "98%",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "320px",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
    "& img": {
      borderRadius: "8px",
    },
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  cardCarousel: {
    overflow: "hidden",
  },
};
export default CarouselCardStyle;
