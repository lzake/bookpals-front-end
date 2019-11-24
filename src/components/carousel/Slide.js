import React from "react";
import "./Slide.css";

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image.image})`,
    backgroundSize: "40% 60%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "auto"
  };
  return <div className="slide" style={styles}></div>;
};
export default Slide;
