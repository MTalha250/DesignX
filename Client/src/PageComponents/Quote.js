import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserContext } from "../Context/UserContext";

const quoteSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Please Enter Your First Name"),
  email: Yup.string().email().required("Plaese Enter Your Email"),
  address: Yup.string().required("Please Enter Your Address"),
  no: Yup.number().required("Please Enter Your Phone Number"),
});
const Quote = (props) => {
  const [userData, setUserData] = useContext(UserContext);

  const initialValues = {
    name: userData?.fname + " " + userData?.lname,
    email: userData?.email,
    address: userData?.address,
    no: userData?.no,
    message: "",
  };
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: quoteSchema,
      onSubmit: async (values, action) => {
        console.log(values);
      },
    });

  return (
    <div
      className={
        "top-0 left-0 flex justify-center items-center w-full h-screen fixed bg-black/10 z-50 " +
        props.quote
      }
    >
      <div className="w-full h-full sm:h-auto sm:w-3/4 md:w-2/3 lg:w-1/2 overflow-scroll bg-white">
        <div className="text-lg font-bold p-5 flex justify-between border-b">
          <span> Request A Quote</span>
          <CloseIcon onClick={() => props.handleQuote("hidden")} />
        </div>
        <form className="p-5">
          <div className="w-full flex flex-col sm:flex-row sm:justify-between">
            <div className="w-full sm:w-[48%]">
              <p className="flex md:text-lg">Name</p>
              <input
                type="text"
                className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="text-sm text-red-600">{errors.name}</p>
              ) : null}
            </div>
            <div className="w-full sm:w-[48%]">
              <p className="flex md:text-lg">Phone</p>
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
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row sm:justify-between">
            <div className="w-full sm:w-[48%]">
              <p className="flex md:text-lg">Email</p>
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
            </div>
            <div className="w-full sm:w-[48%]">
              <p className="flex md:text-lg">Address</p>
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
            </div>
          </div>
          <p className="flex md:text-lg">Message</p>
          <textarea
            rows={4}
            className="w-full bg-gray-100 text-md lg:text-lg p-3 outline-none mb-1"
            name="message"
            id="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className=" mt-5 md:mt-10 flex justify-center">
            <span
              className="cursor-pointer py-2 px-8 sm:px-12 text-white bg-red-500 mx-3 md:text-lg"
              onClick={() => props.handleQuote("hidden")}
            >
              Cancel
            </span>
            <button className="py-2 px-8 sm:px-12 text-white bg-yellow-500 mx-3 md:text-lg">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quote;
