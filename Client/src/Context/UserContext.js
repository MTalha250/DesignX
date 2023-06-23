import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext("");

const UserState = (props) => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const getData = async () => {
      let existingData = localStorage.getItem("User");
      if (existingData) {
        const data = JSON.parse(existingData);
        const response = await axios.get(
          process.env.REACT_APP_PATH + `user/currentUser/${data[1]}`
        );
        setUserData(response.data);
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
