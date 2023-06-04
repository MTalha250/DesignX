import React, { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Account = () => {
  const location = useLocation();

  const [userData, setUserData] = useContext(UserContext);

  return (
    <div>
      <div className="z-40 bg-white fixed md:static top-[16%] md:block  p-2 md:p-4 w-full border-b">
        <Link
          to=""
          className={
            location.pathname === "/account"
              ? "md:text-lg text-yellow-500 mx-3 cursor-pointer font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-yellow-500 before:top-full before:left-1/2 before:-translate-x-2/4"
              : "md:text-lg text-black mx-3 cursor-pointer"
          }
        >
          Account
        </Link>
        <Link
          to="wishlist"
          className={
            location.pathname === "/account/wishlist"
              ? "md:text-lg text-yellow-500 mx-3 cursor-pointer font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-yellow-500 before:top-full before:left-1/2 before:-translate-x-2/4"
              : "md:text-lg text-black mx-3 cursor-pointer"
          }
        >
          Wishlist
        </Link>
        {userData?.type === "admin" ? (
          <Link
            to="admin"
            className={
              location.pathname === "/account/admin" ||
              location.pathname === "/account/admin/users" ||
              location.pathname === "/account/admin/products" ||
              location.pathname === "/account/admin/addproduct"
                ? "md:text-lg text-yellow-500 mx-3 cursor-pointer font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-yellow-500 before:top-full before:left-1/2 before:-translate-x-2/4"
                : "md:text-lg text-black mx-3 cursor-pointer"
            }
          >
            Admin
          </Link>
        ) : null}
      </div>
      <div className="pt-10 md:pt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Account;
