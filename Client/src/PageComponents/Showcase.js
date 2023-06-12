import React, { useEffect, useState } from "react";
import axios from "axios";
const Showcase = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        process.env.REACT_APP_PATH + "showcaase/get"
      );
      setData(response.data);
    };

    getData();
  }, []);
  return (
    <div className="my-5 px-10">
      <h1>Showcase</h1>
      <div className="grid grid-cols-2">
        {data.map((d) => (
          <div>
            <img src={process.env.REACT_APP_PATH + d.imgs[0]} alt="" />
            <p>{d.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
