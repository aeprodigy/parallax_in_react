import React from "react";
import { Parallax } from "react-parallax";
import image3 from "../img/03.jpg";

//Import statements are made above this line.
const ImageThree = () => {
  return (
    <Parallax className="image" bgImage={image3} strength={800}>
      <div className="content">
        <span className="img-text">Drive Your Dream Car</span>
      </div>
    </Parallax>
  );
};

export default ImageThree;
