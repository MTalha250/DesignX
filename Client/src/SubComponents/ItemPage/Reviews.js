import React, { useContext, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Box } from "@mui/material";
import Collapsible from "react-collapsible";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { DataContext } from "../../Context/DataContext";
import { toast } from "react-hot-toast";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const Reviews = ({ data }) => {
  const [hover, setHover] = useState(-1);
  const [userData, setUserData] = useContext(UserContext);
  const [AllData, setAllData] = useContext(DataContext);
  const [review, setReview] = useState({
    rating: "",
    title: "",
    review: "",
  });
  const navigate = useNavigate();
  const labels = {
    1: "Useless",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (review.rating && review.title && review.review) {
      const response = await axios.put(
        process.env.REACT_APP_PATH + `product/reviews/${data._id}`,
        {
          reviews: [
            ...data.reviews,
            {
              name: userData?.fname,
              email: userData?.email,
              ...review,
              created_at: new Date(),
            },
          ],
        }
      );
      const getData = await axios.get(
        process.env.REACT_APP_PATH + "product/products"
      );
      setAllData(getData.data);
      setReview({
        title: "",
        rating: "",
        review: "",
      });
      toast(response.data.message);
    } else {
      toast("Enter required items");
    }
  };

  const handleDelete = async (index) => {
    data.reviews.splice(index, 1);
    const response = await axios.put(
      process.env.REACT_APP_PATH + `product/reviews/${data._id}`,
      {
        reviews: data.reviews,
      }
    );
    const getData = await axios.get(
      process.env.REACT_APP_PATH + "product/products"
    );
    setAllData(getData.data);
  };

  return (
    <div className="mb-10 w-full flex justify-center items-center">
      <div className="py-6 px-3 md:p-10 w-full md:w-[90%] border border-gray-500 min-h-[30vh]">
        <Collapsible
          transitionTime={300}
          trigger={
            <div className="border-b border-gray-500 w-full flex flex-col sm:flex-row justify-between p-3">
              <span className="mb-3 sm:mb-0 flex items-center">
                <Rating
                  size="large"
                  value={
                    data?.reviews.length > 0
                      ? data?.reviews.reduce((s, r) => (s = s + r.rating), 0) /
                        data?.reviews.length
                      : 0
                  }
                  precision={0.5}
                  readOnly
                />
                <span className="ml-2">({data?.reviews.length})</span>
              </span>
              <button
                onClick={() => (!userData ? navigate("/login") : null)}
                className="text-sm py-1.5 px-2.5 bg-gray-500 text-white"
              >
                <DriveFileRenameOutlineIcon /> WRITE A REVIEW
              </button>
            </div>
          }
          triggerTagName="div"
        >
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col border-b border-gray-500"
          >
            <h2 className="font-bold text-lg my-3">Your Review</h2>
            <p>
              <span className="text-red-500">*</span> Score
            </p>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Rating
                onChange={(event, newValue) => {
                  setReview({ ...review, rating: newValue });
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                size="large"
                value={review.rating}
              />
              {review.rating !== null && (
                <Box sx={{ ml: 2 }}>
                  {labels[hover !== -1 ? hover : review.rating]}
                </Box>
              )}
            </Box>
            <label htmlFor="title">
              <span className="text-red-500">*</span> Title:
            </label>
            <input
              type="text"
              className="font-bold w-full border border-black p-2 mb-3"
              id="title"
              name="title"
              value={review.title}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="review">
              <span className="text-red-500">*</span> Review:
            </label>
            <textarea
              className="w-full border border-black p-2 mb-3"
              id="review"
              name="review"
              rows={3}
              value={review.review}
              onChange={(e) => handleChange(e)}
            />
            <button className="px-5 text-white ml-auto mb-3 py-2 bg-yellow-500">
              Post
            </button>
          </form>
        </Collapsible>
        <div className="sm:p-2 my-5">
          {data?.reviews.length > 0 ? (
            data?.reviews.map((d, i) => (
              <div className="w-full border-b border-black py-3 group flex">
                <span className="shrink-0 text-center leading-10 font-bold text-white h-10 w-10 bg-yellow-500 rounded-full mr-1">
                  {d.name.slice(0, 1)}
                </span>
                <div className="w-full flex flex-col">
                  <h2 className="flex justify-between font-bold text-yellow-600">
                    <span>{d.name}</span>
                    <span className="text-gray-500 text-xs">
                      {d.created_at.slice(0, 10)}
                    </span>
                  </h2>
                  <div className="items-center w-full flex justify-between">
                    <Rating size="small" value={d.rating} readOnly />
                    {d.email === userData?.email && (
                      <button
                        className="text-gray-500 invisible group-hover:visible"
                        onClick={() => handleDelete(i)}
                      >
                        <DeleteIcon />
                      </button>
                    )}
                  </div>
                  <h3 className="font-semibold">{d.title}</h3>
                  <p className="font-light text-sm">{d.review}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-center text-gray-500">
              BE THE FIRST TO WRITE A REVIEW
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
