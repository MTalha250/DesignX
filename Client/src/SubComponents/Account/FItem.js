import React, { useContext, useState } from "react";
import Quote from "../../PageComponents/Quote";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import axios from "axios";
const FItem = (props) => {
  const [quote, setQuote] = useState("hidden");
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(UserContext);
  const handleQuote = (value) => {
    setQuote(value);
  };

  const handleDelete = async () => {
    const index = userData.favorites?.findIndex((f) => f.id === props.id);
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
  };

  return (
    <div className="w-full">
      <Quote
        name={props.name}
        id={props.id}
        quote={quote}
        handleQuote={handleQuote}
      />
      <Link to={`/product/${props.id}`}>
        {" "}
        <img src={props.img} alt="" className="w-full" />
        <p className="my-2 truncate">{props.name}</p>
      </Link>

      <div className="flex justify-between">
        <button
          className="py-2 px-3 bg-yellow-500 text-white text-xs lg:text-sm font-semibold"
          onClick={() => (userData ? setQuote("block") : navigate("/login"))}
        >
          Request A Quote
        </button>
        <button onClick={handleDelete}>
          <HighlightOffOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default FItem;
