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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get('/courses');
        setCourses(response.data);
        if (response.data.length > 0) {
          // Set the default selected course, ensuring it's lowercase
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
    setIsLoading(true);
    try {
      const response = await api.get("/files", {
        params: { course: selectedCourse }
      });
      setFiles(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
      toast.error("Failed to fetch files for the selected course.");
    } finally {
      setIsLoading(false);
    }
  }, [selectedCourse]);

  useEffect(() => {
    if (selectedCourse) {
      fetchFiles();
    }
  }, [selectedCourse, fetchFiles]);

  const handleFileChange = (e, isEdit = false) => {
    const file = e.target.files[0];
    if (isEdit) {
      setEditFile({ ...editFile, file: file });
    } else {
      setNewFile({ ...newFile, file: file });
    }
  };

  const handleAddFile = async () => {
    if (!newFile.title || !newFile.file || !newFile.type) {
      toast.error("Please fill in all fields to add a new file.");
      return;
    }

    const formData = new FormData();
    formData.append('file', newFile.file);
    formData.append('title', newFile.title);
    formData.append('type', newFile.type);
    formData.append('course', selectedCourse);

    try {
      await api.post("/files", formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setNewFile({ title: "", file: null, type: "ProblemSet" });
      document.getElementById('new-file-input').value = ''; // Clear file input
      fetchFiles();
      toast.success("File added successfully!");
    } catch (error) {
      console.error("Error adding file:", error);
      toast.error("Failed to add file.");
    }
  };

  const handleUpdateFile = async () => {
    // FIX: Corrected validation. Only title and course are mandatory.
    if (!editFile.title || !editFile.course) {
      toast.error("Title and course must be filled.");
      return;
    }

    const formData = new FormData();
    formData.append('title', editFile.title);
    formData.append('type', editFile.type);
    formData.append('course', editFile.course);

    // FIX: Only append the file if a new one has been selected.
    if (editFile.file && editFile.file instanceof File) {
      formData.append('file', editFile.file);
    } else {
      // If no new file, send the existing link so the backend doesn't change it.
      formData.append('link', editFile.link);
    }

    try {
      await api.put(`/files/${editFile._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setEditFile(null);
      fetchFiles();
      toast.success("File updated successfully!");
    } catch (error) {
      console.error("Error updating file:", error);
      toast.error("Failed to update file.");
    }
  };

  const handleDeleteFile = async (id) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
        try {
            await api.delete(`/files/${id}`);
            fetchFiles();
            toast.success("File deleted successfully!");
        } catch (error) {
            console.error("Error deleting file:", error);
            toast.error("Failed to delete file.");
        }
    }
  };

  const groupedFiles = files.reduce((acc, file) => {
    (acc[file.type] = acc[file.type] || []).push(file);
    return acc;
  }, {});
  
  const orderedTypes = [
    "ProblemSet", "ProblemSetKeys", "Quiz", "QuizKeys", "Mid", "MidKeys",
    "ReadingAssignment", "ReadingAssignmentKeys", "ClassProject"
  ];

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <main>
        <div className="flex w-full">
          <Sidebar />
          <div className="w-full lg:w-4/5 flex-grow px-4 mt-4">
            <section className="max-w-4xl px-6 py-8 mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <header>
                <h1 className="text-2xl text-gray-800 dark:text-white font-bold">Course Materials</h1>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              </header>

              <main>
                <div>
                  <label className="block mb-2 font-semibold text-xl text-gray-700 dark:text-gray-200">Select Course</label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="block w-full px-4 py-2 my-4 border font-bold text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    {courses.map(course => (
                      <option key={course._id} value={course.code.toLowerCase()}>
                        {course.code} - {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200">Add New Material</h2>
                  <input
                    type="text"
                    placeholder="Title"
                    value={newFile.title}
                    onChange={(e) => setNewFile({ ...newFile, title: e.target.value })}
                    className="block w-full px-4 py-2 mb-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                  />
                  <input
                    id="new-file-input"
                    type="file"
                    onChange={(e) => handleFileChange(e, false)}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-2"
                  />
                  <select
                    value={newFile.type}
                    onChange={(e) => setNewFile({ ...newFile, type: e.target.value })}
                    className="block w-full px-4 py-2 border font-semibold text-gray-700 dark:text-gray-200 rounded-lg mb-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                  >
                    {fileTypes.map(type => (
                      <option key={type} value={type}>
                        {type.replace(/([A-Z])/g, ' $1').trim()}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleAddFile}
                    className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    Add Material
                  </button>
                </div>

                {editFile && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-lg">
                      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Edit Material</h2>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Course</label>
                      <select
                        value={editFile.course}
                        onChange={(e) => setEditFile({ ...editFile, course: e.target.value })}
                        className="block w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 bg-white dark:bg-gray-800"
                      >
                        {courses.map(course => (
                          <option key={course._id} value={course.code.toLowerCase()}>
                            {course.code} - {course.title}
                          </option>
                        ))}
                      </select>
                      
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                      <input
                        type="text"
                        placeholder="Title"
                        value={editFile.title}
                        onChange={(e) => setEditFile({ ...editFile, title: e.target.value })}
                        className="block w-full mt-1 px-4 py-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                      />
                      
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Replace File (Optional)</label>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, true)}
                        className="block w-full mt-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-4"
                      />
                      
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
                      <select
                        value={editFile.type}
                        onChange={(e) => setEditFile({ ...editFile, type: e.target.value })}
                        className="block w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 bg-white dark:bg-gray-800"
                      >
                        {fileTypes.map(type => (
                          <option key={type} value={type}>
                            {type.replace(/([A-Z])/g, ' $1').trim()}
                          </option>
                        ))}
                      </select>
                      
                      <div className="flex justify-end space-x-3">
                        <button
                          onClick={() => setEditFile(null)}
                          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleUpdateFile}
                          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {isLoading ? (
                     <p className="text-center text-gray-500">Loading files...</p>
                  ) : (
                    orderedTypes.map((type) => (
                      groupedFiles[type] && (
                        <div key={type} className="bg-white dark:bg-gray-800/50 p-4 rounded-lg shadow-sm">
                          <h2 className="text-lg font-semibold mb-2 capitalize text-gray-700 dark:text-gray-200">
                            {type.replace(/([A-Z])/g, ' $1').trim()}
                          </h2>
                          <div className="space-y-2">
                            {groupedFiles[type].map((file) => (
                              <div key={file._id} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                <a
                                  href={file.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 truncate"
                                >
                                  {file.title}
                                </a>
                                <div className="flex space-x-2 flex-shrink-0">
                                  <button
                                    onClick={() => setEditFile(file)}
                                    className="px-3 py-1 text-sm text-white bg-green-600 rounded hover:bg-green-700 transition-colors"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() => handleDeleteFile(file._id)}
                                    className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    ))
                  )}
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
