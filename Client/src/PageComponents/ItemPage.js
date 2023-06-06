import React, { useContext, useEffect } from "react";
import Main from "../SubComponents/ItemPage/Main";
import Reviews from "../SubComponents/ItemPage/Reviews";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import Grid from "../SubComponents/ItemPage/Grid";
const ItemPage = () => {
  const [data, setData] = useContext(DataContext);
  const params = useParams();
  const itemData = data?.filter((d) => d._id === params.id)[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  return (
    <div>
      <div className="border-b border-gray-300 py-4 px-5 text-sm md:text-base md:px-10 tracking-wider">
        <Link to="/" className="mr-2">
          Home
        </Link>
        /
        <Link to={`/products/${itemData?.category}`} className="mx-2">
          {itemData?.category}
        </Link>
        /
        <Link
          to={`/products/${itemData?.category}/${itemData?.sub_category}`}
          className="mx-2"
        >
          {itemData?.sub_category}
        </Link>
        /
        <Link
          to={`/products/${itemData?.category}/${itemData?.sub_category}/${itemData?.type}`}
          className="mx-2"
        >
          {itemData?.type}
        </Link>
        /<span className="mx-2">{itemData?.name}</span>
      </div>
      <Main data={itemData} />
      <Reviews data={itemData} />
      <Grid data={itemData} />
    </div>
  );
};

export default ItemPage;
