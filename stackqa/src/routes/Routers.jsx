import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Users from "../pages/users/Users";

function Routers() {

  return (
  <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="question" element={<div>New Question</div>} />
        <Route path="users" element={<Users />} />
      </Route>


      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Routers;
