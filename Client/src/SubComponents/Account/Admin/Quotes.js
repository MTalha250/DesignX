import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Quotes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        process.env.REACT_APP_PATH + "quotes/get"
      );
      setData(response.data);
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    const response = await axios.delete(
      process.env.REACT_APP_PATH + `quotes/delete/${id}`
    );
    toast(response.data.message);
    const getData = await axios.get(process.env.REACT_APP_PATH + "quotes/get");
    setData(getData.data);
  };

  return (
    <div className="py-5 px-10">
      <h1 className="text-center text-2xl md:text-3xl font-bold">All Quotes</h1>
      <div className="my-5 grid grid-cols-2 gap-5">
        {data?.map((d) => (
          <div className="relative p-3 border border-black rounded-xl">
            <button
              className="absolute right-2 top-2"
              onClick={() => handleDelete(d._id)}
            >
              <CloseIcon />
            </button>
            <p>Name: {d.name}</p>
            <p>Email: {d.email}</p>
            <p>Number: {d.no}</p>
            <p>City: {d.city}</p>
            <p>Message: {d.message}</p>
            <p>
              Product:{" "}
              <Link className="underline" to={`/product/${d.productId}`}>
                {d.product}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
