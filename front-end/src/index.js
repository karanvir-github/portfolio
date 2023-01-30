import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Reviews from './pages/Reviews';
import Admin from './pages/AdminPages/Admin';
import AdminLogin from './pages/AdminPages/AdminLogin';
import AdminDash from './pages/AdminPages/AdminDash';
import AdminSkill from './pages/AdminPages/AdminSkill';
import AdminEducation from './pages/AdminPages/AdminEducation';
import AdminExperience from './pages/AdminPages/AdminExperience';
import AdminReviews from './pages/AdminPages/AdminReviews';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="study-background" element={<Education />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="work-history" element={<Experience />} />
      <Route exact path="reviews" element={<Reviews />} />
      <Route exact path="adminLogin" element={<AdminLogin />} />
      <Route exact path="admin" element={<Admin />} >
        <Route exact path="dash" element={<AdminDash />} />
        <Route exact path="skills" element={<AdminSkill />} />
        <Route exact path="education" element={<AdminEducation />} />
        <Route exact path="experience" element={<AdminExperience />} />
        <Route exact path="reviews" element={<AdminReviews />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
