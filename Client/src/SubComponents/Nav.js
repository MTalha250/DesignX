import React from "react";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Bedroom",
    subCategories: [
      {
        name: "BEDS",
        type: ["Bed Set", "King Size Beds", "Queen Size Beds", "Single Beds"],
      },
      {
        name: "STORAGE",
        type: [
          "Bed Side Tables",
          "Dressing Tables",
          "Wardrobes",
          "Cloth Stands",
        ],
      },
      {
        name: "DECOR",
        type: ["Wall Mirrors"],
      },
      {
        name: "SEATING AND CHAIRS",
        type: ["Bedroom Chairs"],
      },
    ],
  },
  {
    name: "Living",
    subCategories: [
      {
        name: "SOFAS",
        type: [],
      },
      {
        name: "SOFA BED",
        type: [],
      },
      {
        name: "RECLINERS",
        type: [],
      },
      {
        name: "CHAIRS",
        type: [],
      },
      {
        name: "TABLE",
        type: [],
      },
      {
        name: "STORAGE",
        type: [],
      },
      {
        name: "FLOORING",
        type: [],
      },
    ],
  },
  {
    name: "Study",
    subCategories: [
      {
        name: "HOME OFFICE DESKS",
        type: [],
      },
    ],
  },
  {
    name: "Kids",
    subCategories: [
      {
        name: "KIDS BEDS",
        type: [],
      },
      {
        name: "STORAGE",
        type: [],
      },
      {
        name: "TABLES & DESKS",
        type: [],
      },
      {
        name: "KIDS SEATING & CHAIRS",
        type: [],
      },
    ],
  },
  {
    name: "Dining",
    subCategories: [
      {
        name: "HOME OFFICE DESKS",
        type: [],
      },
    ],
  },
  {
    name: "Office",
    subCategories: [
      {
        name: "HOME OFFICE DESKS",
        type: [],
      },
    ],
  },
  {
    name: "Kitchens",
    subCategories: [
      {
        name: "HOME OFFICE DESKS",
        type: [],
      },
    ],
  },
  {
    name: "Doors",
    subCategories: [
      {
        name: "HOME OFFICE DESKS",
        type: [],
      },
    ],
  },
  {
    name: "Wardrobes",
    subCategories: [
      {
        name: "HOME OFFICE DESKS",
        type: [],
      },
    ],
  },
];

const Nav = () => {
  return (
    <div>
      <div className="w-full flex justify-between py-4 px-10 items-center shadow">
        <Link to="/">
          <img src={logo} alt="" className="w-32" />
        </Link>
        <div className="flex w-1/2 p-3 bg-gray-100">
          <input
            type="text"
            className="outline-none w-full bg-transparent"
            placeholder="Search"
          />
          <button className="border-l px-6 text-yellow-500 border-black">
            <SearchIcon className="scale-150" />
          </button>
        </div>
        <div>
          <Link to="/login">
            <PermIdentityOutlinedIcon className="scale-150 mx-3.5" />
          </Link>
          <Link to="/wishlist">
            <FavoriteBorderOutlinedIcon className="scale-125 mx-3.5" />
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center p-2  shadow top-0">
        {categories.map((c, i) => (
          <div key={i} className="relative group">
            <Link
              to={`products/${c.name}`}
              className="border-b-4 border-white hover:border-yellow-500 hover:text-yellow-500 px-3 py-2 block text-lg"
            >
              {c.name} <KeyboardArrowDownOutlinedIcon />
            </Link>
            <div className="whitespace-nowrap shadow z-10 flex absolute opacity-0 invisible bg-white group-hover:opacity-100 group-hover:visible transition duration-300 p-4">
              {c.subCategories.map((s, i) => (
                <div className="p-4 shrink-0" key={i}>
                  <Link
                    to={`products/${c.name}/${s.name}`}
                    className="text-sm font-semibold p-1 border-b block"
                  >
                    {s.name}
                  </Link>
                  <ul>
                    {s.type.map((t, i) => (
                      <li key={i} className="w-full ">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
