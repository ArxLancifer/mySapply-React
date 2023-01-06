import React, {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/NavbarComponents/Header";
import HomePage from "./pages/Home-Pages/HomePage";
import Login from "./pages/Login-Signup/Login";
import Signup from "./pages/Login-Signup/Signup";
import HomeProvider from "./components/store/HomeProvider";
import AdminProductSubCategories from "./pages/admin/AdminProductSubCategories";
import ProductCategories from "./pages/ProductCategories/ProductCategories";
import ProductSubCategories from "./pages/ProductSubCategories/ProductSubCategories";
import AuthProvider from "./components/store/auth/AuthProvider";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/profile/pages/Settings";
import PageNotFound from "./pages/NotFound/PageNotFound";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import Orders from "./pages/profile/pages/Orders";

function App() {
    return (
        <Fragment>
            <AuthProvider>
                <HomeProvider>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/profile/settings" element={<Settings/>}/>
                        <Route path="/profile/myorders" element={<Orders/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/products">
                            <Route path=":slug" element={<ProductCategories/>}/>
                            <Route path=":slug/:slug" element={<ProductSubCategories/>}/>
                            <Route path=":slug/:slug/:slug" element={<Product/>}/>
                        </Route>

                        <Route path="/admin/products">
                            <Route path="sub-categories" element={<AdminProductSubCategories/>}/>
                        </Route>
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </HomeProvider>
            </AuthProvider>
        </Fragment>
    );
}

export default App;
