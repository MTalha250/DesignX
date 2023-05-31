import React, { useState } from "react";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import logo from "../logo.jpg";
import { Link, useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Bedroom",
    img: "https://interwood.pk/media/catalog/categorymenu/Beds.jpg",
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
    img: "https://interwood.pk/media/catalog/categorymenu/living-room-furniture_2.jpg",
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
    img: "https://interwood.pk/media/catalog/categorymenu/study_table_1.jpg",
    subCategories: [
      {
        name: "HOME OFFICE DESKS",
        type: [],
      },
    ],
  },
  {
    name: "Kids",
    img: "https://interwood.pk/media/catalog/categorymenu/kids_furniture_4.jpg",
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
    img: "https://interwood.pk/media/catalog/categorymenu/dining_room_furniture_1.jpg",
    subCategories: [
      {
        name: "KITCHEN & DINING ROOM FURNITURE",
        type: [],
      },
    ],
  },
  {
    name: "Office",
    img: "https://interwood.pk/media/catalog/categorymenu/office_furniture.jpg",
    subCategories: [
      {
        name: "OFFICE TABLES",
        type: [],
      },
      {
        name: "OFFICE CHAIRS",
        type: [],
      },
      {
        name: "WORKSTATIONS",
        type: [],
      },
      {
        name: "SEATING",
        type: [],
      },
      {
        name: "CO-WORKING SPACES",
        type: [],
      },
      {
        name: "OFFICE EXECUTIVE FURNITURE SETS",
        type: [],
      },
      {
        name: "STORAGE",
        type: [],
      },
    ],
  },
  {
    name: "Kitchens",
    img: "https://interwood.pk/media/catalog/categorymenu/kitchen_design_2.jpg",
    subCategories: [
      {
        name: "KITCHEN DESIGNS",
        type: [],
      },
      {
        name: "KITCHEN ACCESSORIES",
        type: [],
      },
      {
        name: "KITCHEN APPLIANCES",
        type: [],
      },
    ],
  },
  {
    name: "Doors",
    img: "https://interwood.pk/media/catalog/categorymenu/door_designs_in_Pakistan_1.jpg",
    subCategories: [
      {
        name: "MAIN DOORS",
        type: [],
      },
      {
        name: "PANEL DOORS",
        type: [],
      },
      {
        name: "GLASS DOORS",
        type: [],
      },
      {
        name: "VENEER DOOR",
        type: [],
      },
      {
        name: "THERMOSET DOORS",
        type: [],
      },
      {
        name: "PAINTED DOOR",
        type: [],
      },
      {
        name: "LAMINATED DOOR",
        type: [],
      },
      {
        name: "SLIDING DOORS",
        type: [],
      },
    ],
  },
  {
    name: "Wardrobes",
    img: "https://interwood.pk/media/catalog/categorymenu/wardrobe_design_2.jpg",
    subCategories: [
      {
        name: "BUILT-IN WARDROBES",
        type: [],
      },
      {
        name: "3 DOORS WARDROBES",
        type: [],
      },
      {
        name: "SLIDING WARDROBES",
        type: [],
      },
      {
        name: "4 DOORS WARDROBES",
        type: [],
      },
      {
        name: "2 DOORS WARDROBES",
        type: [],
      },
    ],
  },
];

const Nav = () => {
  const [input, setInput] = useState();
  const navigate = useNavigate();
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (input) {
                  navigate(`search/${input}`);
                }
              }
            }}
          />
          <button
            className="border-l px-6 text-yellow-500 border-black"
            onClick={() => {
              if (input) {
                navigate(`search/${input}`);
              }
            }}
          >
            <SearchIcon className="scale-150" />
          </button>
        </div>
        <div>
          <Link to="login">
            <PermIdentityOutlinedIcon className="scale-150 mx-3.5" />
          </Link>
          <Link to="wishlist">
            <FavoriteBorderOutlinedIcon className="scale-125 mx-3.5" />
          </Link>
        </div>
      </div>
      <div className="hidden md:flex w-full flex-wrap justify-center p-2  shadow top-0">
        {categories.map((c, i) => (
          <div key={i} className="group">
            <Link
              to={`products/${c.name}`}
              className="font-light border-b-4 border-white hover:border-yellow-500 hover:text-yellow-500 px-3 py-2 block text-lg"
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
