import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useParams } from "react-router-dom";
import Item from "../SubComponents/ProductsPage/Item";
const Search = () => {
  const params = useParams();
  const [data, setData] = useContext(DataContext);
  return (
    <div className="my-10 px-8 md:px-5 lg:px-20">
      <h1 className="font-bold text-lg">
        Showing results for '{params.input}'
      </h1>
      <div className="min-h-screen my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-5 md:gap-2 lg:gap-10">
        {data
          ?.filter((d) => {
            return d.name.toLowerCase().includes(params.input.toLowerCase());
          })
          .map((d) => (
            <Item id={d._id} img1={d.imgs[0]} img2={d.imgs[1]} name={d.name} />
          ))}
      </div>
    </div>
  );
};

export default Search;
