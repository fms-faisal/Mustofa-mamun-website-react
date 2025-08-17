// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import Research from './assets/pages/Research';
import Teaching from './assets/pages/Teaching';
import CourseFiles from './assets/pages/CourseFiles';
import Login from './assets/components/Login';
import AddCourse from './assets/pages/AddCourse';
import CourseTemplate from './assets/pages/CourseTemplate';
import EditCourse from './assets/components/EditCourse'; // Added import for EditCourse

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} />} />
        <Route path="/index.html" element={<Home loggedIn={loggedIn} />} />
        <Route path="/research" element={<Research loggedIn={loggedIn} />} />
        <Route path="/pages/teaching.html" element={<Teaching loggedIn={loggedIn} />} />
        <Route path="/courses/:courseCode" element={<CourseTemplate loggedIn={loggedIn} />} />
        <Route path="/courses/Fordham/:courseCode" element={<CourseTemplate loggedIn={loggedIn} />} />
        
        {/* Protected Routes */}
        <Route path="/add-files" element={loggedIn ? <CourseFiles /> : <Home />} />
        <Route path="/add-course" element={loggedIn ? <AddCourse /> : <Home />} />
        {/* Added route for editing a course */}
        <Route path="/edit-course/:id" element={loggedIn ? <EditCourse /> : <Home />} />
        
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
      </Routes>
    </Router>
  );
}
