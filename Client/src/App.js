import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./SubComponents/Nav";
import Footer from "./SubComponents/Footer";
import Home from "./PageComponents/Home";
import ErrorPage from "./PageComponents/ErrorPage";
import ProductsPage from "./PageComponents/ProductsPage";
import ItemPage from "./PageComponents/ItemPage";
import Login from "./PageComponents/Login";
import Signup from "./PageComponents/Signup";
import Search from "./PageComponents/Search";
import AccountPage from "./PageComponents/Account";
import Account from "./SubComponents/Account/Account";
import Wishlist from "./SubComponents/Account/Wishlist";
import Admin from "./SubComponents/Account/Admin";
import Users from "./SubComponents/Account/Admin/Users";
import Products from "./SubComponents/Account/Admin/Products";
import AddProduct from "./SubComponents/Account/Admin/AddProduct";
import UpdateProduct from "./SubComponents/Account/Admin/UpdateProduct";
import { Toaster } from "react-hot-toast";
import { UserContext } from "./Context/UserContext";
function App() {
  const [userData, setUserData] = useContext(UserContext);

  return (
    <div>
      <Router>
        <Nav />
        <div className="pt-28 md:pt-0">
          <Routes>
            <Route path="/">
              <Route path="*" element={<ErrorPage />} />
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
              {userData && (
                <Route path="account" element={<AccountPage />}>
                  <Route path="" element={<Account />} />
                  <Route path="wishlist" element={<Wishlist />} />
                  {userData.type === "admin" && (
                    <Route path="admin" element={<Admin />}>
                      <Route path="users" element={<Users />} />
                      <Route path="products" element={<Products />} />
                      <Route path="addproduct" element={<AddProduct />} />
                      <Route
                        path="updateproduct/:id"
                        element={<UpdateProduct />}
                      />
                    </Route>
                  )}
                </Route>
              )}
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
