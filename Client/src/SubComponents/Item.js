import React, { useContext, useState } from "react";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Item = (props) => {
  const [img, setImg] = useState("0");
  const [div, setDiv] = useState("0");
  const [favorite, setFavorite] = useState(false);
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const handleFavorite = () => {
    if (!userData) {
      navigate("/login");
    } else {
      setFavorite((prev) => !prev);
    }
  };

  return (
    <div>
      <div
        className="relative"
        onMouseEnter={() => {
          setImg("100");
          setDiv("100");
        }}
        onMouseLeave={() => {
          setImg("0");
          setDiv("0");
        }}
      >
        <Link to={`/product/${props.id}`}>
          <img
            src="https://interwood.pk/media/catalog/product/cache/49d0b66e32578235461ce6eaf0ea6538/b/a/baroque_bed_brightness1.jpg"
            alt=""
            className="w-full"
          />
          <img
            src="https://interwood.pk/media/catalog/product/b/a/baroque_bed_brightness2.jpg"
            alt=""
            className={
              "top-0 absolute w-full transiton duration-300  opacity-" + img
            }
          />
        </Link>
        <div
          className={
            "absolute bottom-0 right-0 flex flex-col p-2 opacity-" + div
          }
        >
          <button className="my-1 bg-white transition duration-300 hover:bg-yellow-500 rounded">
            <RequestQuoteOutlinedIcon className="m-2" />
          </button>
          <button
            className="my-1 bg-white transition duration-300 hover:bg-yellow-500 rounded"
            onMouseEnter={() => setImg("0")}
            onMouseLeave={() => setImg("100")}
          >
            <LoopIcon className="m-2" />
          </button>
          <button
            className="my-1 bg-white transition duration-300 hover:bg-yellow-500 rounded"
            onClick={handleFavorite}
          >
            {!favorite ? (
              <FavoriteBorderOutlinedIcon className="m-2" />
            ) : (
              <FavoriteIcon className="m-2" />
            )}
          </button>
        </div>
      </div>
      <Link to={`/product/${props.id}`}>
        <p className="text-lg my-2">Oliver Wardrobe 3 Doors</p>
      </Link>
    </div>
  );
};

export default Item;
