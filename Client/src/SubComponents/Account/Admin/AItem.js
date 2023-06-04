import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../Context/DataContext";
import axios from "axios";
import { toast } from "react-hot-toast";
const Item = (props) => {
  const [data, setData] = useContext(DataContext);

  const handleDelete = async (id) => {
    const response = await axios.delete(
      process.env.REACT_APP_PATH + `product/delete/${id}`
    );
    toast(response.data.message);
    const getData = await axios.get(
      process.env.REACT_APP_PATH + "product/products"
    );
    setData(getData.data);
  };
  return (
    <div>
      <Link to={`/product/${props.id}`}>
        <img src={props.img} alt="" className="w-full" />
        <p className="my-2 lg:my-3 lg:text-lg">{props.name}</p>
      </Link>
      <div className="w-full flex justify-between">
        <Link
          to={`../updateproduct/${props.id}`}
          className="text-center font-bold text-white w-[45%] text-sm py-2 bg-yellow-500"
        >
          Update
        </Link>
        <button
          className="font-bold text-white w-[45%] text-sm py-2 bg-red-500"
          onClick={() => handleDelete(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
