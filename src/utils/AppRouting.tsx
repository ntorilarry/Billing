import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Billing from "../pages/billing/Billing";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="billing" element={<Billing />} />
      </Route>
    </Routes>
  );
};

export default AppRouting;
