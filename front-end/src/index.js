import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Admin from './pages/AdminPages/Admin';
import AdminLogin from './pages/AdminPages/AdminLogin';
import AdminDash from './pages/AdminPages/AdminDash';
import AdminSkill from './pages/AdminPages/AdminSkill';
import AdminAddEducation from './pages/AdminPages/AdminAddEducation';
import AdminAddExperience from './pages/AdminPages/AdminAddExperience';
import AdminAddProject from './pages/AdminPages/AdminAddProject';
import AdminShowAllExperiences from './pages/AdminPages/AdminShowAllExperiences';
import AdminShowAllEducations from './pages/AdminPages/AdminShowAllEducations';
import AdminShowAllProjects from './pages/AdminPages/AdminShowAllProjects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="study-background" element={<Education />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="work-history" element={<Experience />} />

      <Route exact path="adminLogin" element={<AdminLogin />} />
      <Route exact path="admin" element={<Admin />} >
        <Route exact path="dash" element={<AdminDash />} />
        <Route exact path="skills" element={<AdminSkill />} />

        <Route exact path="education" element={<AdminShowAllEducations />} />
        <Route exact path="education/new" element={<AdminAddEducation />} />
        <Route exact path="education/edit/:id" element={<AdminAddEducation />} />

        <Route exact path="project" element={<AdminShowAllProjects />} />
        <Route exact path="project/new" element={<AdminAddProject />} />
        <Route exact path="project/edit/:id" element={<AdminAddProject />} />

        <Route exact path="experience" element={<AdminShowAllExperiences />} />
        <Route exact path="experience/new" element={<AdminAddExperience />} />
        <Route exact path="experience/edit/:id" element={<AdminAddExperience />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
