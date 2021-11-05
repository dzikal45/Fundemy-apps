import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Homepage from './pages/homepage';
import Navbar from "./component/navbar/navbar";
import Registerpage from './pages/registerpage';
import Loginpage from './pages/loginpage';
import Packagepage from './pages/packagepage';
import Subjectpage from './pages/subjectpage';
import Listcourse from './pages/listcourse';
import Detailpage from './pages/detailpage';
import Index from '../src/pages/admin/views/Index';
import Teacherauth from '../src/pages/becometeacher'
import EditProfile from './pages/editprofile';
import Payment from './pages/payment';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../src/pages/admin/assets/scss/argon-dashboard-react.scss"

import AdminLayout from "./pages/admin/layouts/Admin.js";
import TeacherLayout from "./pages/teacher/layouts/Teacher.js";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path ="/" exact component={Homepage} />
        <Route path ="/register" exact component={Registerpage} />
        <Route path ="/login" exact component={Loginpage} />
        <Route path ="/paket" exact component={Packagepage} />
        <Route path ="/subject" exact component={Subjectpage} />
        <Route path ="/listcourse" exact component={Listcourse} />
        <Route path ="/detailpage" exact component={Detailpage} />
        {/* <Route path ="/admin" exact component={Index} /> */}
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
       <Redirect from="/admin" to="/admin/index" />
       <Route path="/teacher" render={(props) => <TeacherLayout {...props} />} />
       <Redirect from="/teacher" to="/teacher/index" />
        <Route path ="/teacherauth" exact component={Teacherauth} />
        <Route path ="/editprofile" exact component={EditProfile} />
        <Route path ="/payment" exact component={Payment} />
      </Switch> 
    </Router>
  );
}

export default App;
