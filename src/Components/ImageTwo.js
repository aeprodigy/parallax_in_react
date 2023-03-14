import React from "react";
import { Parallax } from "react-parallax";
import image2 from "../img/02.jpg";

//Import statements are made above this line.
const ImageTwo = () => {
  return (
    <Parallax className="image" bgImage={image2} strength={800}>
      <div className="content">
        <span className="img-text">Drive Your Dream Car</span>
      </div>
    </Parallax>
  );
};

export default ImageTwo;
