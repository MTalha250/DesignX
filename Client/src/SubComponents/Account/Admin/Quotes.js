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
    <div className="py-5 px-5 sm:px-10">
      <h1 className="text-center text-2xl md:text-3xl font-bold">All Quotes</h1>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        {data?.map((d) => (
          <div className="relative p-3 border border-black rounded-xl">
            <button
              className="text-yellow-500 absolute right-2 top-2"
              onClick={() => handleDelete(d._id)}
            >
              <CloseIcon />
            </button>
            <p className="font-semibold">
              Name: <span className="font-light">{d.name}</span>
            </p>
            <p className="font-semibold">
              Email:{" "}
              <a className="underline font-light" href={"mailto:" + d.email}>
                {d.email}
              </a>
            </p>
            <p className="font-semibold">
              Number:{" "}
              <a className="font-light underline" href={"tel:+92" + d.no}>
                {d.no}
              </a>
            </p>
            <p className="font-semibold">
              City: <span className="font-light">{d.city}</span>
            </p>
            <p className="font-semibold">
              Message: <span className="font-light">{d.message}</span>
            </p>
            <p className="font-semibold">
              Product:{" "}
              <Link
                className="font-light underline"
                to={`/product/${d.productId}`}
              >
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
