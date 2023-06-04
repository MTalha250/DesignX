import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Admin = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [sidebar, setSidebar] = useState("scale-x-0");
  return (
    <div className="flex md:h-screen w-full md:overflow-hidden">
      <div className="w-[15%] h-full hidden md:flex p-6 border-r border-black shadow flex-col">
        <Link to="users" className="border-b border-black p-1.5 text-black">
          Users
        </Link>
        <Link to="products" className="border-b border-black p-1.5 text-black">
          Products
        </Link>
        <Link
          to="addproduct"
          className="border-b border-black p-1.5 text-black"
        >
          Add Product
        </Link>
      </div>
      <div
        className={
          "fixed top-0 left-0 w-1/2 h-screen bg-white z-50 p-3.5 flex flex-col transition origin-left duration-200 " +
          sidebar
        }
      >
        <CloseIcon
          className="mb-6 cursor-pointer"
          onClick={() => setSidebar("scale-x-0")}
        />
        <Link
          onClick={() => setSidebar("scale-x-0")}
          to="users"
          className="border-b border-black p-1.5 text-black"
        >
          Users
        </Link>
        <Link
          to="products"
          className="border-b border-black p-1.5 text-black"
          onClick={() => setSidebar("scale-x-0")}
        >
          Products
        </Link>
        <Link
          to="addproduct"
          className="border-b border-black p-1.5 text-black"
          onClick={() => setSidebar("scale-x-0")}
        >
          Add Product
        </Link>
      </div>
      <div className="relative w-full h-full md:overflow-scroll">
        <MenuIcon
          className="md:invisible absolute top-1 left-1 cursor-pointer"
          onClick={() => setSidebar("scale-x-full")}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
