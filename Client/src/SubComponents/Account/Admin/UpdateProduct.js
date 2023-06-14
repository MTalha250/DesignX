import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { DataContext } from "../../../Context/DataContext";
import Categories from "../../Categories";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [allData, setAllData] = useContext(DataContext);
  const params = useParams();
  const navigate = useNavigate();
  const categories = Categories();

  const item = allData?.filter((d) => {
    return d._id === params.id;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState({
    imgs: [],
    name: item[0]?.name,
    size: item[0]?.size,
    description: item[0]?.description,
    category: item[0]?.category,
    sub_category: item[0]?.sub_category,
    type: item[0]?.type,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleImage = (e) => {
    const { name, files } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: files,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.name && data.category) {
      const formData = new FormData();

      for (let i = 0; i < data.imgs.length; i++) {
        formData.append("imgs", data.imgs[i]);
      }

      formData.append("name", data.name);
      formData.append("size", data.size);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("sub_category", data.sub_category);
      formData.append("type", data.type);
      formData.append("created_at", new Date());
      const response = await axios.put(
        process.env.REACT_APP_PATH + `product/update/${params.id}`,
        formData
      );
      toast(response.data.message);
      const getData = await axios.get(
        process.env.REACT_APP_PATH + "product/products"
      );
      setAllData(getData.data);
      navigate(-1);
    }
  };

  return (
    <div className="md:py-5 md:px-10">
      <form
        className="mx-auto md:w-2/3 lg:w-1/2 md:shadow  flex flex-col p-3 md:p-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-2xl md:text-3xl mb-6 font-bold">
          Update Product
        </h1>
        <label htmlFor="imgs" className="font-bold">
          Images :
        </label>
        <input
          type="file"
          accept="image/*"
          name="imgs"
          multiple
          id="imgs"
          className="w-full bg-gray-100 text-sm md:text-base p-2 outline-none mb-1"
          onChange={handleImage}
        />
        <label htmlFor="name" className="font-bold mt-3">
          Name :
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full bg-gray-100 text-sm md:text-base p-2 outline-none mb-1"
          placeholder="Item Name"
          value={data.name}
          onChange={handleChange}
        />
        <label htmlFor="size" className="font-bold  mt-3">
          Size :
        </label>
        <input
          type="string"
          name="size"
          id="size"
          className="w-full bg-gray-100 text-sm md:text-base p-2 outline-none mb-1"
          placeholder="Item Size"
          value={data.size}
          onChange={handleChange}
        />
        <label htmlFor="description" className="font-bold  mt-3">
          Description :
        </label>
        <input
          type="text"
          name="description"
          id="description"
          className="w-full bg-gray-100 text-sm md:text-base p-2 outline-none mb-1"
          placeholder="Item Description"
          value={data.description}
          onChange={handleChange}
        />

        <label htmlFor="category" className="font-bold  mt-3">
          Category :
        </label>
        <select
          name="category"
          id="category"
          className="w-full bg-gray-100 text-sm md:text-base p-2 outline-none mb-1"
          value={data.category}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Select Category
          </option>
          {categories.map((c) => (
            <option value={c.name}>{c.name}</option>
          ))}
        </select>
        <div className="w-full flex flex-col sm:flex-row sm:justify-between mt-3">
          <div className="w-full sm:w-[48%]">
            <label htmlFor="sub_category" className="font-bold  mt-3">
              Sub Category :
            </label>
            <select
              name="sub_category"
              id="sub_category"
              className="w-full bg-gray-100 text-sm md:text-base p-2 outline-none mb-1"
              value={data.sub_category}
              onChange={handleChange}
              disabled={data.category ? false : true}
            >
              <option value="" selected disabled>
                Select Sub Category
              </option>
              {categories
                .filter((c) => {
                  return c.name === data.category;
                })
                .map((c) =>
                  c.subCategories.map((s) => (
                    <option value={s.name}>{s.name}</option>
                  ))
                )}
            </select>
          </div>
          <div className="w-full sm:w-[48%]">
            <label htmlFor="type" className="font-bold  mt-3">
              Type :
            </label>
            <input
              name="type"
              id="type"
              className="w-full bg-gray-100 text-sm md:text-base p-2 outline-none mb-1"
              value={data.type}
              onChange={handleChange}
              disabled={data.sub_category ? false : true}
              placeholder="Item Type"
            />
          </div>
        </div>
        <button className="bg-yellow-500 text-white mt-6 py-2.5 px-3.5 font-bold">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
