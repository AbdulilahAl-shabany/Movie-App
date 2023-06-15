import "./Index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Genre from "./pages/Genre";
import MoviesPage from "./pages/MoviesPage";
import DetailPage from "./pages/DetailPage";
import MyFavorite from "./pages/MyFavorite";

export default function Auth() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/genre/*" element={<Genre />}></Route>
          <Route path="/movies/*" element={<MoviesPage />}></Route>
          <Route path="/genre" element={<Genre />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/private" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/myfavorite" element={<MyFavorite />}></Route>
          <Route path="/detail/*" element={<DetailPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
