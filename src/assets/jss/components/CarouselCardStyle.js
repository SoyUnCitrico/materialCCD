const CarouselCardStyle = {
  carouselCard: {
    justifySelf: "stretch",
    minWidth: "320px",
    maxWidth: "640px",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    background: "#5A5",
    alignItems: "center",
    borderRadius: "8px",
    "& .slick-image": {
      justifySelf: "center",
      borderRadius: "8px",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    "& .slick-caption": {
      fontSize: "1rem",
      fontWeight: "400",
    },
  },
};
export default CarouselCardStyle;
