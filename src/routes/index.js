import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NormalLayout from "../components/layouts/NormalLayout";
import ForgotPassword from "../pages/ForgotPassword";
import BlankPage from "../pages/BlankPage";
import FavouritePage from "../pages/Favourite";
import HomePage from "../pages/Home";
import EmptyPage from "../pages/Home/EmptyPage";
import LoginPage from "../pages/LogIn";
import ReminderPage from "../pages/Reminder";
import SignUpPage from "../pages/SignUp";
import TaskPage from "../pages/Tasks";

function AllRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<NormalLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/reminder" element={<ReminderPage />} />
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/emptyPage" element={<EmptyPage />} />
          <Route path="/blankPage" element={<BlankPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoute;
