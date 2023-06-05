import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Quote from "../../PageComponents/Quote";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const Main = ({ data }) => {
  const [img, setImg] = useState();
  const [quote, setQuote] = useState("hidden");
  const [userData, setUserData] = useContext(UserContext);
  useEffect(() => {
    setImg(data?.imgs[0]);
  }, [data]);
  const navigate = useNavigate();

  const handleQuote = (value) => {
    setQuote(value);
  };

  return (
    <div className="w-full flex flex-col md:flex-row p-3 md:p-5 lg:p-10 justify-between">
      <Quote
        name={data?.name}
        id={data?.id}
        quote={quote}
        handleQuote={handleQuote}
      />
      <div className="w-full sticky top-24 md:hidden">
        <Swiper
          modules={[Pagination]}
          autoplay={true}
          pagination={{ clickable: true }}
        >
          {data?.imgs?.map((d) => (
            <SwiperSlide>
              <img src={process.env.REACT_APP_PATH + d} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:block sticky top-20 p-1 snap-y snap-mandatory scrollbar-none w-[8%] overflow-scroll h-[50vh]">
        {data?.imgs?.map((d) => (
          <img
            src={process.env.REACT_APP_PATH + d}
            alt=""
            className="border snap-start snap-always"
            onClick={() => setImg(d)}
          />
        ))}
      </div>
      <div className="hidden md:block sticky top-20 w-[48%] lg:w-[45%] h-[50vh]">
        <img
          src={process.env.REACT_APP_PATH + img}
          alt=""
          className="w-full h-full"
        />
        <div className="hidden md:flex lg:hidden p-1 snap-x snap-mandatory scrollbar-none w-full overflow-scroll">
          {data?.imgs?.map((d) => (
            <img
              src={process.env.REACT_APP_PATH + d}
              alt=""
              className="w-1/5 shrink-0 border snap-start snap-always"
              onClick={() => setImg(d)}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-[48%] lg:w-[40%]">
        <h1 className="my-3 md:my-0 font-bold text-xl md:text-3xl lg:text-4xl lg:w-[90%]">
          {data?.name}
        </h1>
        <p className="my-3 md:my-5 font-bold md:text-lg">
          Size:
          <span className="mx-3 font-light bg-gray-100 inline-block p-1">
            {data?.size}
          </span>
        </p>
        <p className="lg:w-[90%] leading-7 tracking-wider">
          <i>{data?.description}</i>
        </p>
        <button
          className="my-5 py-3 w-1/2 bg-yellow-500 text-white text-base lg:text-lg font-semibold lg:font-bold"
          onClick={() => (userData ? setQuote("block") : navigate("/login"))}
        >
          Request A Quote
        </button>
      </div>
    </div>
  );
};

export default Main;
