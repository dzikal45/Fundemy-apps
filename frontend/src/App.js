import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Homepage from './pages/homepage';
import Navbar from "./component/navbar/navbar";
import Registerpage from './pages/registerpage';
import Loginpage from './pages/loginpage';
import Packagepage from './pages/packagepage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path ="/" exact component={Homepage} />
        <Route path ="/register" exact component={Registerpage} />
        <Route path ="/login" exact component={Loginpage} />
        <Route path ="/paket" exact component={Packagepage} />
      </Switch> 
    </Router>
  );
}

export default App;
