import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import Categories from "../SubComponents/Categories";
import { Link } from "react-router-dom";
import Item from "../SubComponents/ProductsPage/Item";

const ProductsPage = () => {
  const params = useParams();
  const [data, setData] = useContext(DataContext);
  const categories = Categories();

  const products = data
    .filter((d) => {
      if (params.category) {
        return d.category === params.category;
      } else {
        return d;
      }
    })
    .filter((d) => {
      if (params.sub_category) {
        return d.sub_category === params.sub_category;
      } else {
        return d;
      }
    })
    .filter((d) => {
      if (params.type) {
        return d.type === params.type;
      } else {
        return d;
      }
    });
  return (
    <div>
      <div>
        {params.category && params.sub_category && params.type ? (
          <div className="justify-self-start border-b border-gray-300 py-4 px-5 text-sm md:text-base md:px-10 tracking-wider">
            <Link to="/" className="mr-2">
              Home
            </Link>
            /
            <Link to={`/products/${params.category}`} className="mx-2">
              {params.category}
            </Link>
            /
            <Link
              to={`/products/${params.category}/${params.sub_category}`}
              className="mx-2"
            >
              {params.sub_category}
            </Link>
            /<span className="mx-2">{params.type}</span>
          </div>
        ) : params.category && params.sub_category ? (
          <div className="w-full flex justify-center my-4 px-10 overflow-scroll md:flex-wrap border-b border-gray-300">
            {categories
              .filter((d) => {
                if (d.name === params.category) return d;
              })
              .map((d) =>
                d.subCategories
                  .filter((s) => {
                    if (s.name === params.sub_category) return d;
                  })
                  .map((d) =>
                    d.type.map((t) => (
                      <Link
                        key={t}
                        to={`${t}`}
                        className="font-semibold shrink-0 px-5 md:px-10 py-3 md:py-2 text-sm md:text-lg"
                      >
                        {t}
                      </Link>
                    ))
                  )
              )}
          </div>
        ) : params.category ? (
          <div className="w-full flex md:justify-center px-5 my-4 overflow-scroll md:flex-wrap border-b border-gray-300">
            {categories
              .filter((d) => {
                if (d.name === params.category) return d;
              })
              .map((d) =>
                d.subCategories.map((s) => (
                  <Link
                    key={s.name}
                    to={`${s.name}`}
                    className="w-[30%] sm:w-1/4 md:w-1/6 lg:w-[15%] p-2 md:p-3 lg:p-4 shrink-0"
                  >
                    <img src={s.img} alt="" className="w-full md:shadow-2xl" />
                    <p className="text-xs md:text-sm lg:text-base text-center my-1">
                      {s.name}
                    </p>
                  </Link>
                ))
              )}
          </div>
        ) : null}
      </div>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-5 md:gap-2 lg:gap-10 px-8 md:px-5 lg:px-20">
        {products.map((d) => (
          <Item
            id={d._id}
            img1={process.env.REACT_APP_PATH + d.imgs[0]}
            img2={process.env.REACT_APP_PATH + d.imgs[1]}
            name={d.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
