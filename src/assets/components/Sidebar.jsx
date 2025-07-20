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

  // Determine which collapse should be open by default
  const activeUniversity = Object.keys(groupedCourses).find(university =>
    groupedCourses[university].some(course => location.pathname === course.link)
  );

  return (
    <aside className="hidden lg:block w-72 flex-shrink-0 px-8">
      <div className="sticky top-24 space-y-4">
        {Object.keys(groupedCourses).map(university => (
          <div 
            key={university} 
            className="collapse collapse-arrow rounded-box bg-base-200/10 backdrop-blur-lg border border-base-300/100 shadow-md"
          >
            <input type="checkbox" defaultChecked={university === activeUniversity} /> 
            <div className="collapse-title text-xl font-bold font-serif text-base-content">
              {university}
            </div>
            <div className="collapse-content">
              <ul className="menu p-0 text-base-content/80 menu-lg">
                {groupedCourses[university].map((item) => (
                  <li key={item._id}>
                    <Link 
                      to={item.link}
                      className={`${location.pathname === item.link ? 'active font-semibold' : ''} transition-all duration-200 ease-in-out`}
                      style={{ whiteSpace: 'normal', height: 'auto', padding: '0.75rem 1rem' }} 
                    >
                      <span className="whitespace-normal text-base">{item.code}: {item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}