import React, { useEffect, useState } from "react";
import axios from "axios";
const Showcase = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        process.env.REACT_APP_PATH + "showcase/get"
      );
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <div className="my-5 px-10">
      <h1 className="text-4xl text-center font-bold">Showcase</h1>
      <div className="grid grid-cols-2 gap-10">
        {data.map((d) => (
          <div className="p-10">
            <img src={process.env.REACT_APP_PATH + d.imgs[0]} alt="" />
            <p className="text-3xl font-bold text-center">{d.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
