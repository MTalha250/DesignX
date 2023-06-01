import React, { useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const signUpSchema = Yup.object({
  fname: Yup.string().min(2).max(20).required("Please Enter Your First Name"),
  lname: Yup.string().min(2).max(20).required("Please Enter Your Last Name"),
  email: Yup.string().email().required("Plaese Enter Your Email"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
  address: Yup.string().required("Please Enter Your Address"),
  no: Yup.number().required("Please Enter Your Phone Number"),
  checkbox: Yup.boolean().required("You must accept the terms and conditions"),
});

const initialValues = {
  email: "",
  fname: "",
  lname: "",
  password: "",
  address: "",
  no: "",
  checkbox: "",
};

const Signup = () => {
  const [password, setPassword] = useState(true);
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        const response = await axios.post(
          process.env.REACT_APP_PATH + "user/signup",
          { ...values, type: "user", createdAt: new Date() }
        );
        toast(response.data.message);
        if (response.data.alert) {
          navigate("/login");
        }
      },
    });

  return (
    <div className="min-h-screen py-5 px-6 lg:px-16 px-6 md:px-12">
      <div className="border-b border-black py-5 lg:w-2/3">
        <h1 className="text-2xl lg:text-3xl font-semibold ">New Customer</h1>
        <p className="text-md lg:text-lg">
          Already Registered?{" "}
          <Link to="/login" className="text-yellow-500 underline p-2">
            Login
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="lg:w-2/3">
        <h1 className="font-semibold text-xl md:text-2xl my-5">User Account</h1>
        <p className="flex md:text-lg">
          Email <span className="text-3xl text-red-600">*</span>
        </p>
        <input
          type="email"
          className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p className="text-sm text-red-600">{errors.email}</p>
        ) : null}
        <p className="flex md:text-lg">
          Password <span className="text-3xl text-red-600">*</span>
        </p>
        <div className="flex items-center bg-gray-100">
          <input
            type={password ? "password" : "text"}
            className="w-full bg-transparent text-md lg:text-lg p-3 outline-none mb-1"
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
          <p className=" text-sm text-red-600">{errors.password}</p>
        ) : null}
        <h1 className="font-semibold text-xl md:text-2xl my-5">
          Contact Information
        </h1>
        <div className="w-full flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-[48%]">
            <p className="flex md:text-lg">
              First Name <span className="text-3xl text-red-600">*</span>
            </p>
            <input
              type="text"
              className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1"
              name="fname"
              id="fname"
              value={values.fname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fname && touched.fname ? (
              <p className="text-sm text-red-600">{errors.fname}</p>
            ) : null}
          </div>
          <div className="w-full md:w-[48%] my-6 md:my-0">
            <p className="flex md:text-lg">
              Last Name <span className="text-3xl text-red-600">*</span>
            </p>
            <input
              type="text"
              className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1"
              name="lname"
              id="lname"
              value={values.lname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lname && touched.lname ? (
              <p className="text-sm text-red-600">{errors.lname}</p>
            ) : null}
          </div>
        </div>
        <p className="flex md:text-lg">
          Address <span className="text-3xl text-red-600">*</span>
        </p>
        <input
          type="text"
          className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1"
          name="address"
          id="address"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.address && touched.address ? (
          <p className="text-sm text-red-600">{errors.address}</p>
        ) : null}
        <p className="flex md:text-lg">
          Phone Number <span className="text-3xl text-red-600">*</span>
        </p>
        <input
          type="number"
          className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1"
          name="no"
          id="no"
          value={values.no}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.no && touched.no ? (
          <p className="text-sm text-red-600">{errors.no}</p>
        ) : null}

        <label className="flex my-6">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            value={values.checkbox}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="mx-2 text-sm md:text-base font-semibold">
            I have read and understand the Privacy and Cookies Policy
          </span>
        </label>
        {errors.checkbox && touched.checkbox ? (
          <p className="text-sm text-red-600">{errors.checkbox}</p>
        ) : null}
        <button className="block text-center mt-5 py-4 w-full sm:w-1/2 md:w-full lg:w-[60%] lg:text-lg text-white bg-yellow-500 hover:bg-yellow-400">
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
};

export default Signup;
