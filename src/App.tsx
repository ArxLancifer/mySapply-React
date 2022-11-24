import React, {Fragment} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from "./components/NavbarComponents/Header";
import Login from "./pages/Login-Signup/Login";
import Signup from "./pages/Login-Signup/Signup";

function App() {
    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </Fragment>
    );
}

export default App;
