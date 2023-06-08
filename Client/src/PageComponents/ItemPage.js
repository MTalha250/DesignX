import React, { useContext, useEffect, useState } from "react";
import Main from "../SubComponents/ItemPage/Main";
import Reviews from "../SubComponents/ItemPage/Reviews";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import Grid from "../SubComponents/ItemPage/Grid";
import Description from "../SubComponents/ItemPage/Description";
import Collapsible from "react-collapsible";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const ItemPage = () => {
  const [data, setData] = useContext(DataContext);
  const params = useParams();
  const itemData = data?.filter((d) => d._id === params.id)[0];
  const [view, setView] = useState(0);

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
      <div className="hidden md:block">
        <div className="flex px-16 lg:px-20 w-full">
          <button
            onClick={() => setView(0)}
            className={
              view
                ? "text-lg lg:text-xl py-2 w-1/3"
                : "text-lg lg:text-xl border-b-4 border-yellow-500 py-2 w-1/3"
            }
          >
            PRODUCT DESCRIPTION
          </button>
          <button
            onClick={() => setView(1)}
            className={
              view
                ? "text-lg lg:text-xl border-b-4 border-yellow-500 py-2 w-1/3"
                : "py-2 text-lg lg:text-xl w-1/3"
            }
          >
            REVIEWS
          </button>
        </div>
        {view ? <Reviews data={itemData} /> : <Description data={itemData} />}
      </div>
      <div className="px-3 sm:px-10 md:hidden">
        <Collapsible
          transitionTime={300}
          className="my-2"
          trigger={
            <div className="my-2 flex justify-between">
              <span className="leading-8 font-semibold text-sm w-4/5 p-2 bg-gray-300">
                PRODUCT DESCRIPTION
              </span>
              <button className="w-1/5 p-2 bg-black text-white">
                <KeyboardArrowDownOutlinedIcon />
              </button>
            </div>
          }
          triggerWhenOpen={
            <div className="my-2 flex justify-between">
              <span className="leading-8 font-semibold text-sm w-4/5 p-2 bg-gray-300">
                PRODUCT DESCRIPTION
              </span>
              <button className="w-1/5 p-2 bg-black text-white">
                <KeyboardArrowUpIcon />
              </button>
            </div>
          }
        >
          <Description data={itemData} />
        </Collapsible>
        <Collapsible
          transitionTime={300}
          className="my-2"
          trigger={
            <div className="my-2 flex justify-between">
              <span className="leading-8 font-semibold text-sm w-4/5 p-2 bg-gray-300">
                REVIEWS
              </span>
              <button className="w-1/5 p-2 bg-black text-white">
                <KeyboardArrowDownOutlinedIcon />
              </button>
            </div>
          }
          triggerWhenOpen={
            <div className="my-2 flex justify-between">
              <span className="leading-8 font-semibold text-sm w-4/5 p-2 bg-gray-300">
                REVIEWS
              </span>
              <button className="w-1/5 p-2 bg-black text-white">
                <KeyboardArrowUpIcon />
              </button>
            </div>
          }
        >
          <Reviews data={itemData} />
        </Collapsible>
      </div>

      <Grid data={itemData} />
    </div>
  );
};

export default ItemPage;
