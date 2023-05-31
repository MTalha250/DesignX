import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./SubComponents/Nav";
import Footer from "./SubComponents/Footer";
import Home from "./PageComponents/Home";
import ProductsPage from "./PageComponents/ProductsPage";
import ItemPage from "./PageComponents/ItemPage";
import Login from "./PageComponents/Login";
import Signup from "./PageComponents/Signup";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products/:category" element={<ProductsPage />} />
            <Route
              path="products/:category/:sub_category"
              element={<ProductsPage />}
            />
            <Route
              path="products/:category/:sub_category/:type"
              element={<ProductsPage />}
            />
            <Route path="product/:id" element={<ItemPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
