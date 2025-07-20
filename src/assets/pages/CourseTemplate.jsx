// src/assets/pages/CourseTemplate.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api';
import Sidebar from '../components/Sidebar';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CourseTemplate = ({ loggedIn }) => {
    const { courseCode } = useParams();
    const [course, setCourse] = useState(null);
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editDetails, setEditDetails] = useState({ tas: [], sections: [], textbooks: [] });

    const fetchCourseData = useCallback(async () => {
        setLoading(true);
        try {
            const courseRes = await api.get(`/courses/${courseCode}`);
            setCourse(courseRes.data);
            setEditDetails(courseRes.data.details || { tas: [], sections: [], textbooks: [] });
            const filesRes = await api.get("/files", {
                params: { course: courseCode.toLowerCase() }
            });
            setFiles(filesRes.data);
        } catch (error) {
            console.error("Error fetching course data:", error);
        } finally {
            setLoading(false);
        }
    }, [courseCode]);

    useEffect(() => {
        fetchCourseData();
    }, [fetchCourseData]);

    const handleDetailChange = (e) => {
        const { name, value } = e.target;
        setEditDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleSectionChange = (index, e) => {
        const { name, value } = e.target;
        const sections = [...(editDetails.sections || [])];
        sections[index] = { ...sections[index], [name]: value };
        setEditDetails(prev => ({ ...prev, sections }));
    };

    const handleTaChange = (sectionIndex, taIndex, e) => {
        const { name, value } = e.target;
        const sections = [...(editDetails.sections || [])];
        const tas = [...(sections[sectionIndex].tas || [])];
        tas[taIndex] = { ...tas[taIndex], [name]: value };
        sections[sectionIndex].tas = tas;
        setEditDetails(prev => ({ ...prev, sections }));
    };

    const handleTextbookChange = (index, e) => {
        const { name, value } = e.target;
        const textbooks = [...(editDetails.textbooks || [])];
        textbooks[index] = { ...textbooks[index], [name]: value };
        setEditDetails(prev => ({...prev, textbooks}));
    }

    const addSection = () => {
        setEditDetails(prev => ({ ...prev, sections: [...(prev.sections || []), { sectionCode: '', schedule: '', syllabus: '', tas: [] }] }));
    };

    const removeSection = (index) => {
        const sections = [...editDetails.sections];
        sections.splice(index, 1);
        setEditDetails(prev => ({ ...prev, sections }));
    };

    const addTa = (sectionIndex) => {
        const sections = [...(editDetails.sections || [])];
        const tas = [...(sections[sectionIndex].tas || []), { name: '', description: '', office: '', hours: '', days: '', email: '' }];
        sections[sectionIndex].tas = tas;
        setEditDetails(prev => ({ ...prev, sections }));
    };
    
    const removeTa = (sectionIndex, taIndex) => {
        const sections = [...editDetails.sections];
        const tas = [...sections[sectionIndex].tas];
        tas.splice(taIndex, 1);
        sections[sectionIndex].tas = tas;
        setEditDetails(prev => ({ ...prev, sections }));
    };

    const addTextbook = () => {
        setEditDetails(prev => ({ ...prev, textbooks: [...(prev.textbooks || []), { description: '', status: 'Required' }] }));
    }

    const removeTextbook = (index) => {
        const textbooks = [...editDetails.textbooks];
        textbooks.splice(index, 1);
        setEditDetails(prev => ({ ...prev, textbooks }));
    }

    const handleSave = async () => {
        const token = localStorage.getItem('token');
        try {
            await api.put(`/courses/${course._id}`, { details: editDetails }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Course details updated!");
            setIsEditing(false);
            fetchCourseData();
        } catch (error) {
            toast.error("Failed to update details.");
            console.error("Error updating course details:", error);
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

    if (loading) return <div className="text-center mt-20">Loading course...</div>;
    if (!course) return <div className="text-center mt-20">Course not found.</div>;

    const renderSections = () => {
        const sections = course.details.sections || [];
        if (sections.length === 0) return null;
    
        return (
            <div className="flex flex-wrap">
                {sections.map((section, index) => {
                    let sectionClass = "w-full";
                    if (sections.length === 2) {
                        sectionClass = "w-full md:w-1/2";
                        if(index === 0) sectionClass += " md:pr-2";
                        else sectionClass += " md:pl-2";
                    } else if (sections.length === 3) {
                        if (index === 0) sectionClass = "w-full";
                        if (index === 1) sectionClass = "w-full md:w-1/2 md:pr-2";
                        if (index === 2) sectionClass = "w-full md:w-1/2 md:pl-2";
                    } else if (sections.length >= 4) {
                        sectionClass = "w-full md:w-1/2";
                        if(index % 2 === 0) sectionClass += " md:pr-2";
                        else sectionClass += " md:pl-2";
                    }
    
                    return (
                        <div key={index} className={sectionClass}>
                            {index > 0 && <hr className="border-gray-200 dark:border-gray-700 my-6 md:my-0 md:hidden" />}
                            <p className="mt-4 leading-loose border-2 px-2 rounded-lg border-green-200 text-green-600 font-semibold text-center flex">
                                {section.sectionCode}
                            </p>
                            <p className="mt-4 leading-loose border-2 px-2 rounded-lg border-green-200 text-green-600 font-semibold text-center flex">
                                {section.schedule}
                            </p>
                            <a href={section.syllabus} target="_blank" rel="noopener noreferrer">
                                <p className="mt-4 leading-loose border-2 px-4 rounded-lg border-green-200 text-green-600 font-semibold text-center flex bg-green-50 hover:bg-green-100">
                                    Syllabus
                                </p>
                            </a>
                            {(section.tas || []).map((ta, taIndex) => (
                                <div key={taIndex}>
                                    <p className="mt-4 leading-loose text-black dark:text-gray-50 font-semibold">Teaching Assistant: {ta.name}</p>
                                    {ta.description && <p className="leading-loose text-gray-600 dark:text-gray-50">{ta.description}</p>}
                                    {ta.office && <p className="leading-loose text-gray-600 dark:text-gray-50">Office: {ta.office}</p>}
                                    {ta.hours && <p className="leading-loose text-gray-600 dark:text-gray-50">Drop-in hours: {ta.hours} <br/> {ta.days}</p>}
                                    {ta.email && <p className="leading-loose text-gray-600 dark:text-gray-50">Email: {ta.email}</p>}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <>
            <Helmet>
                <title>{course.code} | Mustofa Mamun</title>
                <meta name="description" content={`${course.code} - ${course.title} course page`} />
            </Helmet>
            <ToastContainer />
            <main>
                <div className="flex w-full">
                    <Sidebar />
                    <div className="w-full lg:w-4/5 flex-grow px-4 mt-20">
                        <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
                            <header className="flex justify-between items-center">
                                <h1 className="text-xl text-gray-700 dark:text-white font-bold">{course.code} - {course.title}</h1>
                                {loggedIn && !isEditing && <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-1 rounded">Edit</button>}
                                {loggedIn && isEditing && <button onClick={handleSave} className="bg-green-500 text-white px-4 py-1 rounded">Save</button>}
                            </header>
                            <hr className="my-6 border-gray-200 dark:border-gray-700" />

                            {isEditing ? (
                                <div className="space-y-4">
                                    <h3 className="font-semibold">Instructor Info</h3>
                                    <input type="text" name="instructor" value={editDetails.instructor || ''} onChange={handleDetailChange} placeholder="Instructor" className="w-full p-2 border rounded" />
                                    <input type="text" name="office" value={editDetails.office || ''} onChange={handleDetailChange} placeholder="Office" className="w-full p-2 border rounded" />
                                    <input type="text" name="hours" value={editDetails.hours || ''} onChange={handleDetailChange} placeholder="Drop-in Hours" className="w-full p-2 border rounded" />
                                    <input type="email" name="email" value={editDetails.email || ''} onChange={handleDetailChange} placeholder="Email" className="w-full p-2 border rounded" />
                                    <input type="text" name="zoom" value={editDetails.zoom || ''} onChange={handleDetailChange} placeholder="Zoom Link" className="w-full p-2 border rounded" />
                                    <hr/>
                                    <h3 className="font-semibold">Sections & TAs</h3>
                                    {(editDetails.sections || []).map((section, sectionIndex) => (
                                        <div key={sectionIndex} className="p-2 border rounded space-y-2">
                                            <input type="text" name="sectionCode" value={section.sectionCode || ''} onChange={(e) => handleSectionChange(sectionIndex, e)} placeholder="Section Code (e.g., ECON 2110 - 001)" className="w-full p-2 border rounded" />
                                            <input type="text" name="schedule" value={section.schedule || ''} onChange={(e) => handleSectionChange(sectionIndex, e)} placeholder="Schedule (e.g., MWF at 10:00-10:50 am in ANTHO-163)" className="w-full p-2 border rounded" />
                                            <input type="text" name="syllabus" value={section.syllabus || ''} onChange={(e) => handleSectionChange(sectionIndex, e)} placeholder="Syllabus Link" className="w-full p-2 border rounded" />
                                            <h4 className="font-semibold text-sm">TAs for this section</h4>
                                            {(section.tas || []).map((ta, taIndex) => (
                                                <div key={taIndex} className="p-2 border rounded space-y-2 ml-4">
                                                    <input type="text" name="name" value={ta.name || ''} onChange={(e) => handleTaChange(sectionIndex, taIndex, e)} placeholder="TA Name" className="w-full p-2 border rounded" />
                                                    <input type="text" name="description" value={ta.description || ''} onChange={(e) => handleTaChange(sectionIndex, taIndex, e)} placeholder="TA Description (e.g., PhD Student, Economics Department)" className="w-full p-2 border rounded" />
                                                    <input type="text" name="office" value={ta.office || ''} onChange={(e) => handleTaChange(sectionIndex, taIndex, e)} placeholder="TA Office" className="w-full p-2 border rounded" />
                                                    <input type="text" name="hours" value={ta.hours || ''} onChange={(e) => handleTaChange(sectionIndex, taIndex, e)} placeholder="TA Hours" className="w-full p-2 border rounded" />
                                                    <input type="text" name="days" value={ta.days || ''} onChange={(e) => handleTaChange(sectionIndex, taIndex, e)} placeholder="TA Days" className="w-full p-2 border rounded" />
                                                    <input type="email" name="email" value={ta.email || ''} onChange={(e) => handleTaChange(sectionIndex, taIndex, e)} placeholder="TA Email" className="w-full p-2 border rounded" />
                                                    <button onClick={() => removeTa(sectionIndex, taIndex)} className="bg-red-500 text-white px-2 py-1 text-xs rounded">Remove TA</button>
                                                </div>
                                            ))}
                                            <button onClick={() => addTa(sectionIndex)} className="bg-green-500 text-white px-2 py-1 text-xs rounded">Add TA to Section</button>
                                            <hr/>
                                            <button onClick={() => removeSection(sectionIndex)} className="bg-red-600 text-white px-2 py-1 text-sm rounded">Remove Section</button>
                                        </div>
                                    ))}
                                    <button onClick={addSection} className="bg-blue-500 text-white px-4 py-1 rounded">Add Section</button>
                                    <hr/>
                                    <textarea name="description" value={editDetails.description || ''} onChange={handleDetailChange} placeholder="Description" className="w-full p-2 border rounded" />
                                    <h3 className="font-semibold">Textbooks</h3>
                                    {(editDetails.textbooks || []).map((textbook, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <textarea name="description" value={textbook.description} onChange={(e) => handleTextbookChange(index, e)} placeholder="Textbook Description" className="w-full p-2 border rounded" />
                                            <select name="status" value={textbook.status} onChange={(e) => handleTextbookChange(index, e)} className="p-2 border rounded">
                                                <option>Required</option>
                                                <option>Optional</option>
                                            </select>
                                            <button onClick={() => removeTextbook(index)} className="bg-red-500 text-white px-2 py-1 text-xs rounded">Remove</button>
                                        </div>
                                    ))}
                                    <button onClick={addTextbook} className="bg-blue-500 text-white px-4 py-1 rounded">Add Textbook</button>
                                </div>
                            ) : (
                                <>
                                    <p className="mt-4 leading-loose text-black dark:text-gray-50 font-semibold">{course.details.instructor}</p>
                                    {course.details.office && <p className="leading-loose text-gray-600 dark:text-gray-50">Office: {course.details.office}</p>}
                                    {course.details.hours && <p className="leading-loose text-gray-600 dark:text-gray-50">Drop-in hours: {course.details.hours}</p>}
                                    {course.details.email && <p className="leading-loose text-gray-600 dark:text-gray-50">Email: {course.details.email}</p>}
                                    {course.details.zoom && <p className="leading-loose text-gray-600 dark:text-gray-50">Zoom Link: <a className="text-blue-400 font-bold" href={course.details.zoom}>{course.details.zoom}</a></p>}
                                    <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                    
                                    {renderSections()}

                                    {course.details.description && <p className="leading-loose text-gray-600 dark:text-gray-300">{course.details.description}</p>}
                                    <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                    {(course.details.textbooks || []).length > 0 && <div><p className="leading-loose text-black dark:text-gray-50 font-semibold">Textbooks</p>{course.details.textbooks.map((book, index) => <p key={index} className="leading-loose text-gray-600 dark:text-gray-300">{book.description} <span className={book.status === 'Optional' ? 'text-blue-500' : 'text-red-500'}>({book.status || 'Required'})</span></p>)}</div>}
                                    <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                </>
                            )}

                            <main>
                                {loggedIn && <div className="flex justify-end">
                                    <Link to="/add-files">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                            Add Materials
                                        </button>
                                    </Link>
                                </div>}
                                {orderedTypes.map((type) => (
                                    groupedFiles[type] && (
                                        <div key={type}>
                                            <p className="leading-loose text-black dark:text-gray-50 font-semibold">{type.replace(/([a-z])([A-Z])/g, "$1 $2")}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {groupedFiles[type].map((file) => (
                                                    <a key={file._id} href={file.link} target="_blank" rel="noopener noreferrer">
                                                        <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                                                            {file.title}
                                                        </button>
                                                    </a>
                                                ))}
                                            </div>
                                            <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                        </div>
                                    )
                                ))}
                            </main>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};

export default CourseTemplate;