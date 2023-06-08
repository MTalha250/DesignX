import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(process.env.REACT_APP_PATH + "home/get");
      setData(response.data);
    };
    getData();
  });

  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            src="https://interwood.pk/media/wysiwyg/SLIDER-WEB-MEGA-SALE.jpg"
            alt=""
            className="hidden sm:block w-full h-full"
          />
          <img
            src="https://interwood.pk/media/wysiwyg/SLIDER-MOB-Mega-sale.jpg"
            alt=""
            className="sm:hidden w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://interwood.pk/media/wysiwyg/BUMPER-OFFERS-1920x740.jpg"
            alt=""
            className="hidden sm:block w-full h-full"
          />
          <img
            src="https://interwood.pk/media/wysiwyg/BUMPER-OFFERS-375-x-450.jpg"
            alt=""
            className="sm:hidden w-full h-full"
          />
        </SwiperSlide>
      </Swiper>

      <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-4xl text-center mt-16 md:mt-20 mb-8 md:mb-10">
        <span className="relative before:absolute before:translate-y-full before:left-1/2 before:-translate-x-1/2 before:bottom-0 before:w-2/3 before:h-1 before:bg-yellow-500">
          SHOP BY CATEGORY
        </span>
      </h1>
      <div className="grid grid-cols-4 lg:grid-cols-5 md:gap-3 my-5 px-2 md:px-20 lg:px-44 2xl:px-96">
        {data
          .filter((d) => {
            return d.category === "categories";
          })
          .map((d) => (
            <Link
              to={d.link}
              className="border flex flex-col justify-center items-center p-2"
            >
              <img src={process.env.REACT_APP_PATH + d.img} className="w-1/2" />
              <p className="text-[11px] sm:text-sm md:text-base mt-2">
                {d.name}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
