import React from "react";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const params = useParams();
  console.log(params);
  return <div>ProductsPage</div>;
};

export default ProductsPage;
