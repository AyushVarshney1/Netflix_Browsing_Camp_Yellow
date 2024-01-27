import React from "react";
import "./ThumbnailRow.css";
import Thumbnail from "../Thumbnail/Thumbnail";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ThumbnailRow = ({ title, imgArr }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.75,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  console.log(imgArr);
  return (
    <div className="thumbnail-row-container">
      <p className="row-title">{title}</p>
      <div className="thumbnail-row">
        <Carousel responsive={responsive}>
          {imgArr.map((src) => (
            <Thumbnail src={src} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ThumbnailRow;
