import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useParams } from "react-router-dom";
const Search = () => {
  const params = useParams();
  const [data, setData] = useContext(DataContext);
  return (
    <div>
      {data
        ?.filter((d) => {
          return d.name.toLowerCase().includes(params.input.toLowerCase());
        })
        .map((d) => (
          <p>{d.name}</p>
        ))}
    </div>
  );
};

export default Search;
