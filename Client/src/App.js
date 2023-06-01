import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./SubComponents/Nav";
import Footer from "./SubComponents/Footer";
import Home from "./PageComponents/Home";
import ProductsPage from "./PageComponents/ProductsPage";
import ItemPage from "./PageComponents/ItemPage";
import Login from "./PageComponents/Login";
import Signup from "./PageComponents/Signup";
import Search from "./PageComponents/Search";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <div className="pt-28 md:pt-0">
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
              <Route path="search/:input" element={<Search />} />
            </Route>
          </Routes>
        </div>

        <Footer />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
