import React from "react";
import ReactImageMagnify from "react-image-magnify";

const Main = () => {
  return (
    <div className="p-10">
      <div className="w-1/2">
        <ReactImageMagnify
          {...{
            smallImage: {
              isFluidWidth: true,
              src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
            },
            largeImage: {
              src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
              width: 1200,
              height: 800,
            },
            lensStyle: { backgroundColor: "rgb(0,0,0,.6)" },
          }}
        />
      </div>
      abc
    </div>
  );
};

export default Main;
