
// src/assets/pages/CourseFiles.jsx
import React, { useState, useEffect, useCallback } from "react";
import api from "../../api";
import Sidebar from "../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseFiles = () => {
  const [files, setFiles] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [newFile, setNewFile] = useState({ 
    title: "", 
    file: null, 
    type: "ProblemSet",
  });
  const [editFile, setEditFile] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
        try {
            const response = await api.get('/courses');
            setCourses(response.data);
            if (response.data.length > 0) {
                setSelectedCourse(response.data[0].code.toLowerCase());
            }
        } catch (error) {
            console.error("Error fetching courses:", error);
            toast.error("Failed to load courses.");
        }
    };
    fetchCourses();
  }, []);

  const fileTypes = [
    "ProblemSet",
    "ProblemSetKeys",
    "Quiz",
    "QuizKeys",
    "Mid",
    "MidKeys",
    "ReadingAssignment",
    "ReadingAssignmentKeys",
    "ClassProject"
  ];

  const fetchFiles = useCallback(async () => {
    if (!selectedCourse) return;
    try {
      const response = await api.get("/files", {
        params: { course: selectedCourse }
      });
      setFiles(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  }, [selectedCourse]);

  useEffect(() => {
    if (selectedCourse) {
      fetchFiles();
    }
  }, [selectedCourse, fetchFiles]);

  const handleFileChange = (e) => {
    setNewFile({ ...newFile, file: e.target.files[0] });
  };

  const handleAddFile = async () => {
    if (!newFile.title || !newFile.file || !newFile.type) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append('file', newFile.file);
    formData.append('title', newFile.title);
    formData.append('type', newFile.type);
    formData.append('course', selectedCourse);

    try {
      await api.post("/files", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setNewFile({ title: "", file: null, type: "ProblemSet" });
      fetchFiles();
      toast.success("File added successfully!");
    } catch (error) {
      console.error("Error adding file:", error);
    }
  };

  const handleUpdateFile = async () => {
    if (!editFile.title || !editFile.file || !editFile.course) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append('file', editFile.file);
    formData.append('title', editFile.title);
    formData.append('type', editFile.type);
    formData.append('course', editFile.course);

    try {
      await api.put(`/files/${editFile._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setEditFile(null);
      fetchFiles();
    } catch (error) {
      console.error("Error updating file:", error);
    }
  };

  const handleDeleteFile = async (id) => {
    try {
      await api.delete(`/files/${id}`);
      fetchFiles();
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const groupedFiles = files.reduce((acc, file) => {
    if (!acc[file.type]) acc[file.type] = [];
    acc[file.type].push(file);
    return acc;
  }, {});

  const orderedTypes = [
    "ProblemSet",
    "ProblemSetKeys",
    "Quiz",
    "QuizKeys",
    "Mid",
    "MidKeys",
    "ReadingAssignment",
    "ReadingAssignmentKeys",
    "ClassProject"
  ];

  return (
    <>
      <ToastContainer />
      <main>
        <div className="flex w-full">
          <Sidebar />
          <div className="w-full lg:w-4/5 flex-grow px-4 mt-4">
            <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
              <header>
                <h1 className="text-xl text-gray-700 dark:text-white font-bold">Course Files</h1>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              </header>

              <main>
                <div className="">
                  <label className="block mb-2 font-semibold text-2xl py-2">Select Course:</label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="block w-full px-4 py-2 my-4 border font-bold text-red-400 rounded-lg"
                  >
                    {courses.map(course => (
                      <option key={course._id} value={course.code.toLowerCase()}>
                        {course.code} - {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6 px-4 pb-4  rounded-lg">
                  <input
                    type="text"
                    placeholder="Title"
                    value={newFile.title}
                    onChange={(e) => setNewFile({ ...newFile, title: e.target.value })}
                    className="block w-full px-4 py-2 mb-2 border rounded-lg"
                  />
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="block w-full px-4 py-2 mb-2 border rounded-lg"
                  />
                  <select
                    value={newFile.type}
                    onChange={(e) => setNewFile({ ...newFile, type: e.target.value })}
                    className="block w-full px-4 py-2 border font-semibold text-red-500 rounded-lg mb-2"
                  >
                    {fileTypes.map(type => (
                      <option key={type} value={type}>
                        {type.replace(/([a-z])([A-Z])/g, "$1 $2")}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleAddFile}
                    className="px-4 py-2  text-white bg-green-600  hover:bg-green-500 rounded-lg"
                  >
                    Add Material
                  </button>
                </div>

                {editFile && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black rounded-lg p-4 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md w-96">
                      <h2 className="text-lg font-semibold p-2 mb-2">Edit Material</h2>
                      <select
                        value={editFile.course}
                        onChange={(e) => setEditFile({ ...editFile, course: e.target.value })}
                        className="block w-full px-4 py-2 border rounded-lg mb-4"
                      >
                        {courses.map(course => (
                          <option key={course._id} value={course.code.toLowerCase()}>
                            {course.code} - {course.title}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        placeholder="Title"
                        value={editFile.title}
                        onChange={(e) => setEditFile({ ...editFile, title: e.target.value })}
                        className="block w-full px-4 py-2 mb-2 border rounded-lg"
                      />
                      <input
                        type="file"
                        onChange={(e) => setEditFile({ ...editFile, file: e.target.files[0] })}
                        className="block w-full px-4 py-2 mb-2 border rounded-lg"
                      />
                      <select
                        value={editFile.type}
                        onChange={(e) => setEditFile({ ...editFile, type: e.target.value })}
                        className="block w-full px-4 py-2 border rounded-lg mb-2"
                      >
                        {fileTypes.map(type => (
                          <option key={type} value={type}>
                            {type.replace(/([a-z])([A-Z])/g, "$1 $2")}
                          </option>
                        ))}
                      </select>
                      
                      <div className="flex justify-end">
                        <button
                          onClick={handleUpdateFile}
                          className="px-4 py-2 mr-2 text-white bg-green-600 rounded-lg hover:bg-green-500"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditFile(null)}
                          className="px-4 py-2 text-white bg-red-400 rounded-lg hover:bg-red-600"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {orderedTypes.map((type) => (
                    groupedFiles[type] && (
                      <div key={type} className="bg-white px-4 rounded-lg">
                        <h2 className="text-lg font-semibold mb-2 capitalize">
                          {type.replace(/([a-z])([A-Z])/g, "$1 $2")}
                        </h2>
                        <div className="space-y-2 ">
                          {groupedFiles[type].map((file) => (
                            <div key={file._id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                              <a
                                href={file.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800 truncate"
                              >
                                {file.title}
                              </a>
                              <div className="flex space-x-3">
                                <button
                                  onClick={() => setEditFile(file)}
                                  className="px-5 py-1 text-sm text-white bg-green-600 rounded hover:bg-green-500"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDeleteFile(file._id)}
                                  className="px-3 py-1 text-sm text-white bg-red-400 rounded hover:bg-red-600"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </main>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default CourseFiles;