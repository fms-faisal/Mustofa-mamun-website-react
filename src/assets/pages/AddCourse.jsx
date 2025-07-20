
// src/assets/pages/AddCourse.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCourse = () => {
  const [course, setCourse] = useState({
    code: '',
    title: '',
    image: '',
    university: 'University of New Mexico'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('You must be logged in to add a course.');
      return;
    }

    try {
      await api.post('/courses', course, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success('Course added successfully!');
      navigate('/pages/teaching.html');
    } catch (error) {
      toast.error('Failed to add course.');
      console.error('Error adding course:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Add New Course</h2>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">University:</label>
          <select
            name="university"
            value={course.university}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option>University of New Mexico</option>
            <option>Fordham University</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Course Code:</label>
          <input
            type="text"
            name="code"
            value={course.code}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Course Title:</label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Course Image URL:</label>
          <input
            type="text"
            name="image"
            value={course.image}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
