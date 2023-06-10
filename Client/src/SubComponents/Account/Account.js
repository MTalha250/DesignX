import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import toast from "react-hot-toast";
const updateSchema = Yup.object({
  fname: Yup.string().min(2).max(20).required("Please Enter Your First Name"),
  lname: Yup.string().min(2).max(20).required("Please Enter Your Last Name"),
  email: Yup.string().email().required("Plaese Enter Your Email"),
  address: Yup.string().required("Please Enter Your Address"),
});

const Account = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    fname: userData.fname,
    lname: userData.lname,
    email: userData.email,
    address: userData.address,
  };

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: updateSchema,

      onSubmit: async (values, action) => {
        const response = await axios.put(
          process.env.REACT_APP_PATH + `user/update/${userData.id}`,
          values
        );
        toast(response.data.message);
        if (response.data.alert) {
          setUserData({
            ...userData,
            fname: values.fname,
            lname: values.lname,
            email: values.email,
            address: values.address,
          });
          localStorage.setItem(
            "User",
            JSON.stringify({
              ...userData,
              fname: values.fname,
              lname: values.lname,
              email: values.email,
              address: values.address,
            })
          );
          setEdit(false);
        }
      },
    });

  return (
    <div className=" min-h-screen p-6 md:p-10">
      <form onSubmit={handleSubmit} className="w-full md:w-1/2">
        <p className="md:text-lg py-2">First Name</p>
        {edit ? (
          <input
            type="text"
            name="fname"
            id="fname"
            value={values.fname}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1"
            autoFocus
          />
        ) : (
          <p className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1">
            {userData.fname}
          </p>
        )}
        {errors.fname && touched.fname ? (
          <p className="text-xs text-red-600">{errors.fname}</p>
        ) : null}
        <p className="md:text-lg mt-3 py-2">Last Name</p>
        {edit ? (
          <input
            type="text"
            name="lname"
            id="lname"
            value={values.lname}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1"
          />
        ) : (
          <p className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1">
            {userData.lname}
          </p>
        )}
        {errors.lname && touched.lname ? (
          <p className="text-xs text-red-600">{errors.lname}</p>
        ) : null}
        <p className="md:text-lg mt-3 py-2">Email</p>
        {edit ? (
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1"
          />
        ) : (
          <p className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1">
            {userData.email}
          </p>
        )}
        {errors.email && touched.email ? (
          <p className="text-xs text-red-600">{errors.email}</p>
        ) : null}
        <p className="md:text-lg mt-3 py-2">Address</p>
        {edit ? (
          <input
            type="text"
            name="address"
            id="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1"
          />
        ) : (
          <p className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1">
            {userData.address}
          </p>
        )}
        {errors.address && touched.address ? (
          <p className="text-xs text-red-600">{errors.address}</p>
        ) : null}
        <div className="w-full flex justify-end">
          {edit ? (
            <button className="font-bold text-center mt-10 py-3 px-5 text-white bg-yellow-500 hover:bg-yellow-400">
              SAVE
            </button>
          ) : (
            <span
              className="font-bold text-center mt-10 py-3 px-5 text-white bg-yellow-500 hover:bg-yellow-400"
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Account;
