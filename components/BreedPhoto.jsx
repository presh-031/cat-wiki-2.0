import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import ProgressiveImage from "react-progressive-graceful-image";
// import placeholderSrc from "./images/tiny.jpg";

const BreedPhoto = React.memo(({ src, name }) => {
  console.log(name);
  return (
    <div className="h-[100%] cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      {/* <LazyLoadImage effect="blur" src={src} alt="breed" className="h-[100%] w-[100%]  object-cover" /> */}

      <ProgressiveImage src={src} placeholder={`https://via.placeholder.com/150/000000/FFFFFF/?text=${name}`}>
        {(src, loading) => (
          <img
            className={`image${loading ? " loading" : " loaded"}`}
            src={src}
            alt="sea beach"
            width="700"
            height="465"
          />
        )}
      </ProgressiveImage>
    </div>
  );
});

export default BreedPhoto;
