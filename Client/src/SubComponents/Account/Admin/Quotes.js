import axios from "axios";
import React, { useEffect, useState } from "react";

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
  });

  return (
    <div>
      <h1>All Quotes</h1>
      <div>{}</div>
    </div>
  );
};

export default Quotes;
