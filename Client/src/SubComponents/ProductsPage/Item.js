import React, { useContext, useEffect, useState } from "react";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Quote from "../../PageComponents/Quote";
import axios from "axios";

const Item = (props) => {
  const [img, setImg] = useState("0");
  const [div, setDiv] = useState("0");
  const [quote, setQuote] = useState("hidden");
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [check, setCheck] = useState([]);
  useEffect(() => {
    if (userData) {
      setCheck(userData?.favorites?.map((f) => f.id));
    }
  }, []);

  const handleFavorite = async () => {
    if (!userData) {
      navigate("/login");
    } else {
      if (check.includes(props.id)) {
        const index = userData.favorites?.findIndex((f) => f.id === props.id);
        const checkIndex = userData.favorites?.findIndex(
          (c) => c.id === props.id
        );
        userData.favorites.splice(index, 1);
        setUserData({ ...userData });
        localStorage.setItem(
          "User",
          JSON.stringify({
            ...userData,
          })
        );
        const response = await axios.put(
          process.env.REACT_APP_PATH + `user/update/${userData.id}`,
          {
            ...userData,
          }
        );
        check.splice(checkIndex, 1);
        setCheck([...check]);
      } else {
        userData.favorites = [
          ...userData.favorites,
          {
            img: props.img1,
            name: props.name,
            id: props.id,
          },
        ];
        setUserData({ ...userData });
        localStorage.setItem(
          "User",
          JSON.stringify({
            ...userData,
          })
        );
        const response = await axios.put(
          process.env.REACT_APP_PATH + `user/update/${userData.id}`,
          {
            ...userData,
          }
        );
        setCheck([...check, props.id]);
      }
    }
  };

  const handleQuote = (value) => {
    setQuote(value);
  };

  return (
    <div>
      <Quote
        name={props.name}
        id={props.id}
        quote={quote}
        handleQuote={handleQuote}
      />
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
          <img src={props.img1} alt="" className="w-full" />
          <img
            src={props.img2}
            alt=""
            className={
              "h-full top-0 absolute w-full transiton duration-300  opacity-" +
              img
            }
          />
        </Link>
        <div
          className={
            "absolute bottom-0 right-0 flex flex-col p-2 opacity-" + div
          }
        >
          <button
            className="my-1 bg-white transition duration-300 hover:bg-yellow-500 rounded"
            onClick={() => setQuote("block")}
          >
            <RequestQuoteOutlinedIcon className="m-1 lg:m-2" />
          </button>
          <button
            className="my-1 bg-white transition duration-300 hover:bg-yellow-500 rounded"
            onMouseEnter={() => setImg("0")}
            onMouseLeave={() => setImg("100")}
          >
            <LoopIcon className="m-1 lg:m-2" />
          </button>
          <button
            className="my-1 bg-white transition duration-300 hover:bg-yellow-500 rounded"
            onClick={handleFavorite}
          >
            {!check.includes(props.id) ? (
              <FavoriteBorderOutlinedIcon className="m-1 lg:m-2" />
            ) : (
              <FavoriteIcon className="m-1 lg:m-2" />
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start my-2 lg:my-3">
        <Link to={`/product/${props.id}`}>
          <p className="lg:text-lg truncate">{props.name}</p>
        </Link>
        <button onClick={handleFavorite} className="md:hidden">
          {!check.includes(props.id) ? (
            <FavoriteBorderOutlinedIcon />
          ) : (
            <FavoriteIcon />
          )}
        </button>
      </div>

      <button
        className="py-2 px-3 lg:px-4 bg-yellow-500 text-white text-sm lg:text-base font-semibold lg:font-bold"
        onClick={() => setQuote("block")}
      >
        Request A Quote
      </button>
    </div>
  );
};

export default Item;
