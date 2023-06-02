import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import Categories from "../SubComponents/Categories";
import { Link } from "react-router-dom";
import Item from "../SubComponents/Item";

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
          <p className="justify-self-start border-b border-gray-300 py-4 px-10 tracking-wider">
            <Link to="/" className="mx-2">
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
          </p>
        ) : params.category && params.sub_category ? (
          <div className="w-full flex justify-center my-4 px-10 flex-wrap border-b border-gray-300">
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
                        className="px-10 py-2 text-lg font-light"
                      >
                        {t}
                      </Link>
                    ))
                  )
              )}
          </div>
        ) : params.category ? (
          <div className="w-full flex justify-center my-4 px-10 flex-wrap border-b border-gray-300">
            {categories
              .filter((d) => {
                if (d.name === params.category) return d;
              })
              .map((d) =>
                d.subCategories.map((s) => (
                  <Link
                    key={s.name}
                    to={`${s.name}`}
                    className="w-[15%] p-4 shrink-0"
                  >
                    <img src={s.img} alt="" className="w-full shadow-2xl" />
                    <p className="text-center my-1">{s.name}</p>
                  </Link>
                ))
              )}
          </div>
        ) : null}
      </div>
      <div className="grid grid-cols-3 gap-10 p-20">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      {products.map((d) => (
        <p key={d._id}>{d.name}</p>
      ))}
    </div>
  );
};

export default ProductsPage;
