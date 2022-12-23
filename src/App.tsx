import React, {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/NavbarComponents/Header";
import HomePage from "./pages/Home-Pages/HomePage";
import Login from "./pages/Login-Signup/Login";
import Signup from "./pages/Login-Signup/Signup";
import HomeProvider from "./components/store/HomeProvider";
import ProductSubCategories from "./pages/admin/ProductSubCategories";

function App() {
    return (
        <Fragment>
            <HomeProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/create-product-sub-category" element={<ProductSubCategories/>}/>
                </Routes>
            </HomeProvider>
        </Fragment>
    );
}

export default App;
