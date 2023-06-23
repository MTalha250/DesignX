import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const UserContext = createContext("");

const UserState = (props) => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const getData = async () => {
      let existingData = localStorage.getItem("User");
      if (existingData) {
        const data = JSON.parse(existingData);
        const response = await axios.get(
          process.env.REACT_APP_PATH + `user/currentUser/${data[1]}`,
          { headers: { "x-access-token": data[0] } }
        );
        if (!response.data.error) {
          setUserData(response.data);
        } else {
          localStorage.removeItem("User");
          toast(response.data.message);
        }
      }
    };
    getData();
  }, []);

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserState };
