import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="p-10 w-full flex-col h-[calc(100vh-150px)] flex justify-center items-center">
      <h1 className="font-bold text-5xl">OOPS!</h1>
      <p className="my-3 text-xl font-semibold">404 - PAGE NOT FOUND</p>
      <i>
        The page you are looking for is either UNAVAILABLE or you are
        UNAUTHORIZED
      </i>
      <p className="my-2 text-lg font-semibold">
        Go to:{" "}
        <Link to="/" className="text-yellow-500 underline">
          HOME PAGE
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
