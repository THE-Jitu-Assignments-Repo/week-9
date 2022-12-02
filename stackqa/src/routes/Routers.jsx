import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Aboutus from "../pages/about/Aboutus";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Questions from "../pages/questions/Questions";
import Register from "../pages/register/Register";
import Users from "../pages/users/Users";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="question" element={<Questions />} />
        <Route path="users" element={<Users />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Routers;
