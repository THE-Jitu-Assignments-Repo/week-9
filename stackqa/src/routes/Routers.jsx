import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

function Routers() {
  return (
  <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home page</div>} />
        <Route path="question" element={<div>New Question</div>} />
        <Route path="profile" element={<div>Profile</div>} />
      </Route>


      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Routers;
