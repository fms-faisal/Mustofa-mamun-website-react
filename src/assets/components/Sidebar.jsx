
// src/assets/components/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get('/courses');
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses for sidebar:", error);
      }
    };
    fetchCourses();
  }, []);

  const groupedCourses = courses.reduce((acc, course) => {
    (acc[course.university] = acc[course.university] || []).push(course);
    return acc;
  }, {});

  return (
    <aside className="hidden lg:flex min-w-56 mt-20">
      <div className="fixed max-w-56 border-r-2 border-green-100 px-4 pb-2 rounded-lg">
        {Object.keys(groupedCourses).map(university => (
          <div key={university}>
            <Link to="#">
              <p className="p-2 mt-6 text-black font-semibold text-center animate-wave-text dark:text-white">
                {university}
              </p>
            </Link>
            {groupedCourses[university].map((item) => (
              <Link to={item.link} key={item._id}>
                <p
                  className={`p-2 m-2 border-2 mt-4 rounded-lg font-semibold hover:bg-green-300 hover:font-bold ${
                    location.pathname === item.link
                      ? 'border-green-500 bg-green-400 text-black'
                      : 'border-green-200 text-gray-700 dark:text-gray-50'
                  }`}
                >
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}