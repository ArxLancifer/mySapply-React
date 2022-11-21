import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogSign from './components/Login-Signup/LogSign';
import Header from './components/NavbarComponents/Header';
// import TopNavbar from "./components/NavbarComponents/TopNavbar"

function App() {
  return (
    <Fragment>
        <Header />
    <Routes>
        <Route path='/signup' element={<LogSign/>}>
        
        </Route>
    </Routes>
    </Fragment>
  );
}

export default App;
