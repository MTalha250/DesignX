import React from "react";
import { useParams } from "react-router-dom";

const ShowcaseImgs = ({ data }) => {
  const params = useParams();
  const itemData = data?.filter((d) => {
    return d._id === params.id;
  });
  console.log(itemData);
  return (
    <div className="p-10">
      {itemData[0].imgs?.slice(1).map((d) => (
        <img src={process.env.REACT_APP_PATH + d} />
      ))}
    </div>
  );
};

export default ShowcaseImgs;
