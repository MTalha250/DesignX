import React, { useContext } from "react";
import Item from "../ProductsPage/Item";
import { DataContext } from "../../Context/DataContext";
const Grid = ({ data }) => {
  const [allData, setAllData] = useContext(DataContext);
  const products = allData
    .filter((d) => {
      if (data.category) {
        return d.category === data.category;
      } else {
        return d;
      }
    })
    .filter((d) => {
      if (data.sub_category) {
        return d.sub_category === data.sub_category;
      } else {
        return d;
      }
    })
    .filter((d) => {
      if (data.type) {
        return d.type === data.type;
      } else {
        return d;
      }
    });

  return (
    <div className="my-5 px-5 sm:px-8 lg:p-20">
      <h1 className="my-5 font-bold text-xl">You may also like :</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-5 lg:gap-10">
        {products
          ?.filter((d) => {
            return d._id !== data._id;
          })
          .map((d) => (
            <Item
              id={d._id}
              img1={process.env.REACT_APP_PATH + d.imgs[0]}
              img2={process.env.REACT_APP_PATH + d.imgs[1]}
              name={d.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Grid;
