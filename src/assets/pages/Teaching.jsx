// src/assets/pages/Teaching.jsx
import React, { useState, useEffect } from 'react';
import api from '../../api';
import CourseCard from '../components/CourseCard';
import ConfirmModal from '../components/ConfirmModal';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Teaching = ({ loggedIn }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);

  const fetchCourses = async () => {
    try {
      const response = await api.get('/courses');
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDeleteClick = (courseId) => {
    setCourseToDelete(courseId);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;
    try {
      await api.delete(`/courses/${courseToDelete}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchCourses();
    } catch (error) {
      console.error("Error deleting course:", error);
    } finally {
      setIsModalOpen(false);
      setCourseToDelete(null);
    }
  };

  const groupedCourses = courses.reduce((acc, course) => {
    (acc[course.university] = acc[course.university] || []).push(course);
    return acc;
  }, {});

  return (
    <>
      <Helmet>
        <title>Teaching | Mustofa Mamun</title>
        <meta name="description" content="Courses taught by Mustofa Mamun" />
      </Helmet>
      <main className="pt-24 md:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-base-content">Teaching</h1>
            <p className="mt-4 text-lg text-base-content/70"></p>
          </header>

          {loading ? (
            <div className="text-center">Loading courses...</div>
          ) : (
            <div className="space-y-16">
              {Object.keys(groupedCourses).map((university, index) => (
                <div key={university} className={`animate-fadeInUp`} style={{animationDelay: `${index * 150}ms`}}>
                  <div className="flex justify-center mb-8">
                    <h2 className="text-3xl font-bold text-base-content border-b-2 border-primary pb-2">
                      {university}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {groupedCourses[university].map((course) => (
                      <div key={course._id} className="relative">
                         <CourseCard
                          code={course.code}
                          title={course.title}
                          image={course.image}
                          link={course.link}
                        />
                        {loggedIn && (
                          <button
                            onClick={() => handleDeleteClick(course._id)}
                            className="absolute top-2 right-2 btn btn-xs btn-circle btn-error"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {loggedIn && (
                <div className="flex justify-center mt-12 animate-fadeInUp" style={{animationDelay: `${Object.keys(groupedCourses).length * 150}ms`}}>
                  <Link to="/add-course" className="btn btn-primary btn-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add New Course
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this course?"
      />
    </>
  );
};

export default Teaching;