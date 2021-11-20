import "./App.css";
import React from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
import Footer from "./Footer"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route path="/login">
            <Login/>
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Navbar/>
            <Home/>
            <Product/>
            <Footer/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;







