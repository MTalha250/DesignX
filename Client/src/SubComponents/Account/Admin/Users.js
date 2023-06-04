import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../Context/UserContext";
import { toast } from "react-hot-toast";

const Users = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    async function getData() {
      const users = await axios.get(process.env.REACT_APP_PATH + "user/users");
      setUsers(users.data);
    }
    getData();
  }, []);

  const handleType = async (e, id) => {
    const response = await axios.put(
      process.env.REACT_APP_PATH + `user/update/${id}`,
      { type: e.target.value }
    );
    toast(response.data.message);
  };
  return (
    <div className="py-5 px-10 w-full">
      <h1 className="text-center text-2xl md:text-3xl font-bold">All Users</h1>
      <table className="w-full my-6 border-2 border-black text-center">
        <tr className="text-lg bg-yellow-500 text-white">
          <th className="p-2.5 border-x border-white">Name</th>
          <th className="p-2.5 border-x border-white">Email</th>
          <th className="p-2.5 border-x border-white">Number</th>
          <th className="p-2.5 border-x border-white">Address</th>
          <th className="p-2.5 border-x border-white">Type</th>
        </tr>
        {users.map((d, i) => (
          <tr key={i} className="border border-black p-2.5">
            <td className="p-2.5">
              {d.fname} {d.lname}
            </td>
            <td className="p-2.5 border-x border-black">{d.email}</td>
            <td className="p-2.5 border-x border-black">{d.no}</td>
            <td className="p-2.5 border-x border-black">{d.address}</td>
            <td className="p-2.5 border-x border-black">
              <select
                name=""
                id=""
                className="cursor-pointer font-bold outline-none text-center"
                onChange={(e) => handleType(e, d._id)}
              >
                <option disabled selected>
                  {d.type[0].toUpperCase() + d.type.slice(1)}
                </option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Users;
