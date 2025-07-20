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
        <meta name="description" content="Teaching page of Mustofa Mamun" />
      </Helmet>
      <main className="pb-8">
        {loading ? (
          <div className="text-center mt-20">Loading courses...</div>
        ) : (
          <>
            {Object.keys(groupedCourses).map(university => (
              <div key={university}>
                <div className="flex justify-center mt-20">
                  <h1 className="text-xl font-semibold text-gray-800 dark:text-white p-3 px-6 border-2 border-green-200 rounded-lg shadow-md inline-block">
                    {university}
                  </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-10 gap-4 mx-auto">
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
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 text-xs w-6 h-6 flex items-center justify-center"
                        >
                          X
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {loggedIn && (
              <div className="flex justify-center mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto">
                    <Link to="/add-course">
                        <div className="card bg-base-100 w-72 shadow-md hover:animate-pulse border-2 hover:border-b-8 hover:border-green-500 border-gray-100 mx-auto h-full flex items-center justify-center">
                            <div className="card-body p-5 items-center text-center">
                                <span className="text-6xl font-bold text-green-500">+</span>
                                <p className="font-semibold text-gray-700 dark:text-gray-100">Add New Course</p>
                            </div>
                        </div>
                    </Link>
                </div>
              </div>
            )}
          </>
        )}
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