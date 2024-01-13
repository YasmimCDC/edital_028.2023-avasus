import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import CoursePage from "../pages/CoursePage";
import CoursesPage from "../pages/CoursesPage";
import PartnersPage from "../pages/PartnersPage";
import TransparencyPage from "../pages/TransparencyPage";

export default function Routers() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="aboutUs" element={<Navigate to="/" replace />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="course" element={<CoursePage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="transparency" element={<TransparencyPage />} />
        <Route path="contact" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}