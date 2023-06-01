import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const categories = [
  {
    name: "Beds",
    img: "https://interwood.pk/media/wysiwyg/02.svg",
    to: "products/Bedroom/BEDS",
  },
  {
    name: "Sofas",
    img: "https://interwood.pk/media/wysiwyg/svgexport-1.svg",
    to: "products/Living/SOFAS",
  },
  {
    name: "Dining",
    img: "https://interwood.pk/media/wysiwyg/svgexport-1_2_.svg",
    to: "products/Dining",
  },
  {
    name: "Study",
    img: "https://interwood.pk/media/wysiwyg/study_room_furniture.svg",
    to: "products/Study",
  },
  {
    name: "Seating",
    img: "https://interwood.pk/media/wysiwyg/seating.svg",
    to: "products/Living/CHAIRS",
  },
  {
    name: "Bookshelves",
    img: "https://interwood.pk/media/wysiwyg/bookshelves.svg",
    to: "products/Living/STORAGE/Bookshelves",
  },
  {
    name: "Tables",
    img: "https://interwood.pk/media/wysiwyg/06.svg",
    to: "products/Living/TABLES",
  },
  {
    name: "Storage",
    img: "https://interwood.pk/media/wysiwyg/Storage_Furniture.svg",
    to: "products/Living/STORAGE",
  },
  {
    name: "Wardrobes",
    img: "https://interwood.pk/media/wysiwyg/wardrobe.svg",
    to: "products/Wardrobes",
  },
  {
    name: "Bunk Beds",
    img: "https://interwood.pk/media/wysiwyg/bed-bunk.svg",
    to: "products/Kids/KIDS BEDS",
  },
];

const Home = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[60vh] md:h-auto"
        autoplay={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            src="https://interwood.pk/media/wysiwyg/SLIDER-WEB-MEGA-SALE.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://interwood.pk/media/wysiwyg/BUMPER-OFFERS-1920x740.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-4xl text-center mt-16 md:mt-20 mb-8 md:mb-10">
        <span className="relative before:absolute before:translate-y-full before:left-1/2 before:-translate-x-1/2 before:bottom-0 before:w-2/3 before:h-1 before:bg-yellow-500">
          SHOP BY CATEGORY
        </span>
      </h1>
      <div className="grid grid-cols-4 lg:grid-cols-5 md:gap-3 my-5 px-2 md:px-20 lg:px-44 2xl:px-96">
        {categories.map((d) => (
          <Link
            to={d.to}
            className="border flex flex-col justify-center items-center p-2"
          >
            <img src={d.img} className="w-1/2" />
            <p className="text-[11px] sm:text-sm md:text-base mt-2">{d.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
