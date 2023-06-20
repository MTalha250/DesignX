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
    design: item[0]?.design,
    versatility: item[0]?.versatility,
    functionality: item[0]?.functionality,
    features: item[0]?.features,
    dimensions: item[0]?.dimensions,
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
      formData.append("design", data.design);
      formData.append("versatility", data.versatility);
      formData.append("functionality", data.functionality);
      formData.append("features", data.features);
      formData.append("dimensions", data.dimensions);
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
      <h1 className="text-center text-2xl md:text-3xl my-6 font-bold">
        Update Product
      </h1>
      <form className="mx-auto md:shadow  p-3 md:p-6" onSubmit={handleSubmit}>
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
        <label htmlFor="description" className="mt-3  font-bold">
          Description :
        </label>
        <textarea
          rows={3}
          name="description"
          id="description"
          className="w-full bg-gray-100 text-sm md:text-base p-2 outline-none mb-1"
          value={data.description}
          onChange={handleChange}
        />
        <label htmlFor="design" className="font-bold  mt-3">
          Design :
        </label>
        <textarea
          rows={3}
          name="design"
          id="design"
          className="w-full bg-gray-100 text-sm md:text-base p-2 outline-none mb-1"
          value={data.design}
          onChange={handleChange}
        />
        <label htmlFor="versatility" className="font-bold  mt-3">
          Versatility :
        </label>
        <textarea
          rows={3}
          name="versatility"
          id="versatility"
          className="w-full bg-gray-100 text-sm md:text-base p-2 outline-none mb-1"
          value={data.versatility}
          onChange={handleChange}
        />
        <label htmlFor="functionality" className="font-bold  mt-3">
          Functionality :
        </label>
        <textarea
          rows={3}
          name="functionality"
          id="functionality"
          className="w-full bg-gray-100 text-sm md:text-base p-2 outline-none mb-1"
          value={data.functionality}
          onChange={handleChange}
        />
        <label htmlFor="features" className="font-bold  mt-3">
          Features :
        </label>
        <textarea
          rows={3}
          name="features"
          id="features"
          className="w-full bg-gray-100 text-sm md:text-base p-2 outline-none mb-1"
          value={data.features}
          onChange={handleChange}
        />
        <label htmlFor="dimensions" className="font-bold  mt-3">
          Dimensions :
        </label>
        <textarea
          rows={3}
          name="dimensions"
          id="dimensions"
          className="w-full bg-gray-100 text-sm md:text-base p-2 outline-none mb-1"
          value={data.dimensions}
          onChange={handleChange}
        />
        <button className="bg-yellow-500 text-white mt-6 py-2.5 w-full font-bold">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
