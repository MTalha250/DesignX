import React, { useContext, useState } from "react";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import logo from "../logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import Categories from "./Categories";
import { DataContext } from "../Context/DataContext";
import { UserContext } from "../Context/UserContext";
import Collapsible from "react-collapsible";
import { toast } from "react-hot-toast";
import SItem from "./Search/SItem";

const Nav = ({ logo }) => {
  const [input, setInput] = useState("");
  const [sidebar, setSidebar] = useState("scale-x-0");
  const [data, setData] = useContext(DataContext);
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const categories = Categories();
  const [sticky, setSticky] = useState();
  window.onscroll = (e) => {
    if (window.scrollY > 0) {
      setSticky("fixed top-0");
    } else {
      setSticky("");
    }
  };
  // console.log(logo);

  const getInput = (value) => {
    setInput(value);
  };

  return (
    <div>
      <div className="fixed md:static z-50 bg-white w-full flex justify-between p-2.5 md:py-3 lg:py-4 md:px-6 lg:px-10 items-center md:border-b border-gray-300">
        <div className="md:hidden">
          <MenuIcon
            className="cursor-pointer"
            onClick={() => setSidebar("scale-x-full")}
          />
          <a href="tel:+923244264800" className="text-yellow-500  ml-2 sm:ml-3">
            <LocalPhoneIcon />
          </a>
        </div>
        <Link to={logo?.link}>
          <img
            src={process.env.REACT_APP_PATH + logo?.img}
            alt={logo?.name}
            className="w-32 2xl:w-44"
          />
        </Link>
        <div className="hidden md:flex relative w-1/2 p-2 lg:p-3 2xl:p-4 bg-gray-100">
          <input
            type="text"
            className="2xl:text-lg outline-none w-full bg-transparent"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (input) {
                  navigate(`search/${input}`);
                  setInput("");
                }
              }
            }}
          />
          <button
            className="border-l px-6 text-yellow-500 border-black"
            onClick={() => {
              if (input) {
                navigate(`search/${input}`);
                setInput("");
              }
            }}
          >
            <SearchIcon className="scale-150" />
          </button>
          {input && (
            <div className="z-40 w-full overflow-scroll absolute h-[50vh] bg-white top-full left-0 shadow">
              {data
                ?.filter((d) => {
                  return d.name.toLowerCase().includes(input.toLowerCase());
                })
                .map((d) => (
                  <SItem
                    img={process.env.REACT_APP_PATH + d.imgs[0]}
                    name={d.name}
                    id={d._id}
                    getInput={getInput}
                  />
                ))}
            </div>
          )}
        </div>
        <div className="flex">
          {userData ? (
            <button className="relative group text-lg font-bold mr-1 sm:mr-2 lg:mr-3.5 2xl:ml-10">
              Hi,{userData.fname}
              <div className="p-2 hidden group-focus-within:block absolute bg-white shadow z-50">
                <Link
                  to="account"
                  className="text-lg font-light border-b px-3 py-1"
                >
                  Account
                </Link>
                <button
                  className="text-lg font-light px-3 py-1 whitespace-nowrap"
                  onClick={() => {
                    setUserData("");
                    localStorage.removeItem("User");
                    toast("Signed out successfully");
                  }}
                >
                  Sign Out
                </button>
              </div>
            </button>
          ) : (
            <Link to="login">
              <PermIdentityOutlinedIcon className="scale-125 lg:scale-150 2xl:scale-[2] mr-1 sm:mr-2 lg:mr-3.5 2xl:ml-10" />
            </Link>
          )}
          <Link to={userData ? "account/wishlist" : "login"}>
            <FavoriteBorderOutlinedIcon className="lg:scale-125 2xl:scale-[1.75] ml-1 sm:ml-2 lg:ml-3.5 2xl:ml-10" />
          </Link>
        </div>
      </div>
      <div className="fixed md:static z-40 bg-white top-12 w-full flex justify-center py-3 px-4">
        <div className="w-full flex md:hidden relative p-1 sm:p-2 bg-gray-100">
          <input
            type="text"
            className="p-1 text-lg outline-none w-full bg-transparent"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (input) {
                  navigate(`search/${input}`);
                  setInput("");
                }
              }
            }}
          />
          <button
            className="border-l px-6 text-yellow-500 border-gray-300"
            onClick={() => {
              if (input) {
                navigate(`search/${input}`);
                setInput("");
              }
            }}
          >
            <SearchIcon className="scale-125" />
          </button>
          {input && (
            <div className="z-50 w-full overflow-scroll absolute h-[50vh] bg-white top-full left-0 shadow">
              {data
                ?.filter((d) => {
                  return d.name.toLowerCase().includes(input.toLowerCase());
                })
                .map((d) => (
                  <SItem
                    img={process.env.REACT_APP_PATH + d.imgs[0]}
                    name={d.name}
                    id={d._id}
                    getInput={getInput}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
      <div
        className={
          "fixed flex left-0 top-0 w-full h-screen z-50 origin-left transition duration-200 " +
          sidebar
        }
      >
        <div className="w-full h-full bg-white shadow overflow-scroll">
          <div className="relative bg-gray-400 p-3 border-b flex items-center justify-center">
            <button
              className="left-2 font-bold absolute text-yellow-500"
              onClick={() => setSidebar("scale-x-0")}
            >
              <CloseIcon />
            </button>
            <span className="text-white font-bold text-lg">Main Menu</span>
            <span></span>
          </div>
          {categories.map((c, i) => (
            <div className="my-5 px-4">
              <Collapsible
                trigger={
                  <p className="text-lg font-semibold w-full flex justify-between">
                    {c.name}
                    <KeyboardArrowDownOutlinedIcon />
                  </p>
                }
                triggerWhenOpen={
                  <p className="text-lg font-semibold w-full flex justify-between">
                    {c.name}
                    <KeyboardArrowUpIcon />
                  </p>
                }
                triggerTagName="div"
                className="w-full border-b border-gray-300"
                transitionTime={200}
              >
                <div className="pl-3">
                  <Link
                    to={`products/${c.name}`}
                    className="hover:text-yellow-500 transition duration-300 my-3 block border-b"
                    onClick={() => setSidebar("scale-x-0")}
                  >
                    All {c.name}
                  </Link>
                  {c.subCategories.map((s, i) => (
                    <Collapsible
                      trigger={
                        <p className="w-full flex justify-between">
                          {s.name}
                          <KeyboardArrowDownOutlinedIcon />
                        </p>
                      }
                      triggerWhenOpen={
                        <p className="w-full flex justify-between">
                          {s.name}
                          <KeyboardArrowUpIcon />
                        </p>
                      }
                      triggerTagName="div"
                      className="w-full border-b my-3"
                      transitionTime={200}
                    >
                      <div className="pl-3">
                        <Link
                          to={`products/${c.name}/${s.name}`}
                          className="hover:text-yellow-500 transition duration-300 my-3 block border-b"
                          onClick={() => setSidebar("scale-x-0")}
                        >
                          All {s.name}
                        </Link>
                        {s.type.map((t, i) => (
                          <Link
                            to={`products/${c.name}/${s.name}/${t}`}
                            className="hover:text-yellow-500 transition duration-300 block border-b my-3"
                            onClick={() => setSidebar("scale-x-0")}
                          >
                            {t}
                          </Link>
                        ))}
                      </div>
                    </Collapsible>
                  ))}
                </div>
              </Collapsible>
            </div>
          ))}
        </div>
        <div
          className="w-1/3 sm:w-full h-full"
          onClick={() => setSidebar("scale-x-0")}
        ></div>
      </div>
      <div
        className={
          "z-50 hidden md:flex w-full flex-wrap justify-center p-1 lg:p-2 bg-white border-b border-gray-300 " +
          sticky
        }
      >
        {categories.map((c, i) => (
          <div key={i} className="group">
            <Link
              to={`products/${c.name}`}
              className="font-light border-b-4 border-white hover:border-yellow-500 hover:text-yellow-500 px-2 lg:px-3 block text-lg 2xl:text-2xl transition duration-300"
            >
              {c.name} <KeyboardArrowDownOutlinedIcon />
            </Link>
            <div className="left-1/2 -translate-x-1/2 md:w-full lg:w-[75%] shadow z-10 flex justify-between absolute opacity-0 invisible bg-white group-hover:opacity-100 group-hover:visible transition duration-300 p-4">
              <div className="flex w-1/2 flex-wrap flex-col h-[30vh]">
                {c.subCategories.map((s, i) => (
                  <div className="p-4" key={i}>
                    <Link
                      to={`products/${c.name}/${s.name}`}
                      className="text-sm font-semibold p-1 border-b block"
                    >
                      {s.name}
                    </Link>
                    <ul>
                      {s.type.map((t, i) => (
                        <li key={i} className="w-full">
                          <Link
                            to={`products/${c.name}/${s.name}/${t}`}
                            className="p-1 border-b w-full block text-gray-500 text-sm"
                          >
                            {t}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <img src={c.img} alt="" className="w-[25%]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
