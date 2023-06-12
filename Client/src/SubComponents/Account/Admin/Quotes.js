import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="py-5 px-10">
      <h1 className="text-center text-2xl md:text-3xl font-bold">All Quotes</h1>
      <div className="my-5 grid grid-cols-2 gap-5">
        {data?.map((d) => (
          <div className="p-3 border border-black rounded-xl">
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
