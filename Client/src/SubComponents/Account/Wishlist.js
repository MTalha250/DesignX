import React, { useContext } from "react";
import FItem from "./FItem";
import { UserContext } from "../../Context/UserContext";

const Wishlist = () => {
  const [userData, setUserData] = useContext(UserContext);
  return (
    <div className="min-h-screen px-5 md:px-10 lg:px-20 w-full flex flex-col items-center">
      <h1 className="my-5 font-bold text-3xl lg:text-4xl">Favorites List</h1>
      <div className="bg-gray-100 w-full min-h-[30vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 sm:p-8">
        {userData?.favorites.map((f) => (
          <FItem img={f.img} name={f.name} id={f.id} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
