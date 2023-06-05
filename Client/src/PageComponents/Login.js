import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const loginSchema = Yup.object({
  email: Yup.string().email().required("Plaese Enter Your Email"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
});

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const [password, setPassword] = useState(true);
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        const response = await axios.post(
          process.env.REACT_APP_PATH + "user/login",
          values
        );
        toast(response.data.message);
        if (response.data.alert) {
          setUserData(response.data.userData);
          localStorage.setItem("User", JSON.stringify(response.data.userData));
          navigate(-1);
        }
      },
    });

  return (
    <div className="min-h-screen py-5 px-6 lg:px-16 flex flex-col md:flex-row w-full">
      <div className="flex flex-col  w-full md:w-1/2">
        <p className="text-2xl lg:text-3xl font-semibold border-b border-black py-5">
          Login With Your Acccount
        </p>
        <form onSubmit={handleSubmit}>
          <p className="my-5 text-md lg:text-lg">
            Enter Your E-Mail Address And Password To Log In.
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-100 text-md lg:text-lg p-3 mt-5 outline-none"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="text-sm text-red-600">{errors.email}</p>
          ) : null}
          <div className="w-full bg-gray-100 p-3 mt-8 flex">
            <input
              type={password ? "password" : "text"}
              placeholder="Your Password"
              className="w-full text-md lg:text-lg outline-none bg-transparent"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {values.password && (
              <span
                className="p-2 flex cursor-pointer"
                onClick={() => {
                  setPassword((password) => !password);
                }}
              >
                {password ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </span>
            )}
          </div>
          {errors.password && touched.password ? (
            <p className="text-sm text-red-600">{errors.password}</p>
          ) : null}
          <button className="mt-10 py-4 w-full sm:w-1/2 lg:text-lg text-white bg-red-600 hover:bg-red-400">
            Sign In
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 md:px-10 lg:px-20 my-10 md:my-0">
        <p className="text-2xl lg:text-3xl font-semibold border-b border-black py-5">
          New Customer
        </p>
        <p className="my-5 text-base lg:text-lg">
          By Creating An Account With Us, Purchasing On Our Website Becomes Much
          Faster And Easier.
        </p>
        <Link
          to="/signup"
          className="block text-center mt-10 py-4 w-full sm:w-1/2 md:w-full lg:w-[60%] lg:text-lg text-white bg-yellow-500 hover:bg-yellow-400"
        >
          Create An Account
        </Link>
      </div>
    </div>
  );
}

export default Login;
