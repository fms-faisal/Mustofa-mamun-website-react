import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api';
import Sidebar from '../components/Sidebar';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the glass style once to keep it consistent
const glassCardStyle = "card bg-base-200/10  backdrop-blur-lg border border-base-300/100 shadow-md";

const CourseTemplate = ({ loggedIn }) => {
    const { courseCode } = useParams();
    const [course, setCourse] = useState(null);
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editDetails, setEditDetails] = useState({ tas: [], sections: [], textbooks: [] });

    // ... All data fetching and handler functions are here and unchanged ...
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

    if (loading) return <div className="flex justify-center items-center h-screen">Loading course...</div>;
    if (!course) return <div className="text-center mt-20">Course not found.</div>;

    const renderSections = () => {
        const sections = (course.details.sections) || [];
        if (sections.length === 0) return null;

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.map((section, index) => (
                    <div key={index} className={glassCardStyle}>
                        <div className="card-body">
                            <h3 className="card-title">{section.sectionCode}</h3>
                            <p>{section.schedule}</p>
                            <a href={section.syllabus} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white btn-sm mt-2">Syllabus</a>
                            {(section.tas || []).map((ta, taIndex) => (
                                <div key={taIndex} className="mt-4 pt-4 border-t border-base-300/50">
                                    <p className="font-semibold">TA: {ta.name}</p>
                                    <p className="text-md opacity-80">{ta.description}</p>
                                    {ta.office && <p className="text-md">Office: {ta.office}</p>}
                                    {ta.hours && <p className="text-md">Hours: {ta.hours} ({ta.days})</p>}
                                    {ta.email && <p className="text-md">Email: <a href={`mailto:${ta.email}`} className="link link-hover">{ta.email}</a></p>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <Helmet>
                <title>{course.code} | Mustofa Mamun</title>
                <meta name="description" content={`${course.code} - ${course.title} course page`} />
            </Helmet>
            <ToastContainer position="bottom-right" theme="colored" />
            <main className="flex">
                <Sidebar />
                <div className="flex-grow pt-24 md:pt-32 pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <section className="animate-fadeInUp">
                            <header className="flex justify-between items-start mb-8">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content">{course.code} - {course.title}</h1>
                                </div>
                                {loggedIn && (
                                    <div className="flex-shrink-0">
                                        {isEditing ? (
                                            <button onClick={handleSave} className="btn btn-sm btn-success text-white">Save</button>
                                        ) : (
                                            <button onClick={() => setIsEditing(true)} className="btn btn-sm btn-success text-white">Edit Page</button>
                                        )}
                                    </div>
                                )}
                            </header>

                            {isEditing ? (
                                <div className="space-y-6">
                                    <div className={glassCardStyle}>
                                        <div className="card-body space-y-2">
                                            <h2 className="card-title">Instructor Info</h2>
                                            <input type="text" name="instructor" value={editDetails.instructor || ''} onChange={handleDetailChange} placeholder="Instructor" className="input input-bordered w-full" />
                                            <input type="text" name="office" value={editDetails.office || ''} onChange={handleDetailChange} placeholder="Office" className="input input-bordered w-full" />
                                            <input type="text" name="hours" value={editDetails.hours || ''} onChange={handleDetailChange} placeholder="Drop-in Hours" className="input input-bordered w-full" />
                                            <input type="email" name="email" value={editDetails.email || ''} onChange={handleDetailChange} placeholder="Email" className="input input-bordered w-full" />
                                            <input type="text" name="zoom" value={editDetails.zoom || ''} onChange={handleDetailChange} placeholder="Zoom Link" className="input input-bordered w-full" />
                                        </div>
                                    </div>
                                
                                    <div className={glassCardStyle}>
                                        <div className="card-body">
                                            <h2 className="card-title">Sections & TAs</h2>
                                            {(editDetails.sections || []).map((section, sectionIndex) => (
                                                <div key={sectionIndex} className="p-4 bg-base-200 rounded-lg space-y-2 mt-4">
                                                    <h3 className="font-semibold">Section {sectionIndex + 1}</h3>
                                                    <input type="text" name="sectionCode" value={section.sectionCode || ''} onChange={(e) => handleSectionChange(sectionIndex, e)} placeholder="Section Code (e.g., ECON 2110 - 001)" className="input input-bordered w-full" />
                                                    <input type="text" name="schedule" value={section.schedule || ''} onChange={(e) => handleSectionChange(sectionIndex, e)} placeholder="Schedule (e.g., MWF at 10:00-10:50 am)" className="input input-bordered w-full" />
                                                    <input type="text" name="syllabus" value={section.syllabus || ''} onChange={(e) => handleSectionChange(sectionIndex, e)} placeholder="Syllabus Link" className="input input-bordered w-full" />
                                                    
                                                    <h4 className="font-semibold text-md pt-4">TAs for this section</h4>
                                                    {(section.tas || []).map((ta, taIndex) => (
                                                        <div key={taIndex} className="p-3 bg-base-200 rounded-md space-y-2 ml-4">
                                                            <input type="text" name="name" value={ta.name || ''} onChange={(e) => handleTaChange(sectionIndex, taIndex, e)} placeholder="TA Name" className="input input-sm input-bordered w-full" />
                                                            <input type="text" name="description" value={ta.description || ''} onChange={(e) => handleTaChange(sectionIndex, taIndex, e)} placeholder="TA Description" className="input input-sm input-bordered w-full" />
                                                            <input type="text" name="office" value={ta.office || ''} onChange={(e) => handleTaChange(sectionIndex, taIndex, e)} placeholder="TA Office" className="input input-sm input-bordered w-full" />
                                                            <input type="text" name="hours" value={ta.hours || ''} onChange={(e) => handleTaChange(sectionIndex, taIndex, e)} placeholder="TA Hours" className="input input-sm input-bordered w-full" />
                                                            <input type="text" name="days" value={ta.days || ''} onChange={(e) => handleTaChange(sectionIndex, taIndex, e)} placeholder="TA Days" className="input input-sm input-bordered w-full" />
                                                            <input type="email" name="email" value={ta.email || ''} onChange={(e) => handleTaChange(sectionIndex, taIndex, e)} placeholder="TA Email" className="input input-sm input-bordered w-full" />
                                                            <button onClick={() => removeTa(sectionIndex, taIndex)} className="btn btn-xs btn-error">Remove TA</button>
                                                        </div>
                                                    ))}
                                                    <button onClick={() => addTa(sectionIndex)} className="btn btn-xs btn-accent mt-2">Add TA</button>
                                                    <div className="divider my-2"></div>
                                                    <button onClick={() => removeSection(sectionIndex)} className="btn btn-sm btn-error w-full">Remove Section</button>
                                                </div>
                                            ))}
                                            <button onClick={addSection} className="btn btn-sm btn-success text-white mt-4">Add Section</button>
                                        </div>
                                    </div>
                                    
                                    <div className={glassCardStyle}>
                                        <div className="card-body">
                                            <h2 className="card-title">Textbooks</h2>
                                            {(editDetails.textbooks || []).map((textbook, index) => (
                                                <div key={index} className="flex items-center gap-2 mt-2">
                                                    <textarea name="description" value={textbook.description || ''} onChange={(e) => handleTextbookChange(index, e)} placeholder="Textbook Description" className="textarea textarea-bordered w-full" />
                                                    <select name="status" value={textbook.status} onChange={(e) => handleTextbookChange(index, e)} className="select select-bordered">
                                                        <option>Required</option>
                                                        <option>Optional</option>
                                                    </select>
                                                    <button onClick={() => removeTextbook(index)} className="btn btn-sm btn-error">Remove</button>
                                                </div>
                                            ))}
                                            <button onClick={addTextbook} className="btn btn-sm btn-success text-white mt-4">Add Textbook</button>
                                        </div>
                                    </div>
                               </div>
                            ) : (
                                <div className="space-y-12">
                                    <div className={glassCardStyle}>
                                        <div className="card-body">
                                            <h2 className="card-title">Instructor Information</h2>
                                            <p><strong>{course.details.instructor}</strong></p>
                                            {course.details.office && <p>Office: {course.details.office}</p>}
                                            {course.details.hours && <p>Drop-in hours: {course.details.hours}</p>}
                                            {course.details.email && <p>Email: <a href={`mailto:${course.details.email}`} className="link link-hover">{course.details.email}</a></p>}
                                            {course.details.zoom && <p>Zoom: <a href={course.details.zoom} target="_blank" rel="noopener noreferrer" className="link link-hover">Link</a></p>}
                                        </div>
                                    </div>
                                    
                                    {renderSections()}

                                    {(course.details.textbooks || []).length > 0 && (
                                        <div className={glassCardStyle}>
                                            <div className="card-body">
                                                <h2 className="card-title">Textbooks</h2>
                                                <ul className="list-disc list-inside space-y-2">
                                                    {course.details.textbooks.map((book, index) => (
                                                        <li key={index}>
                                                            {book.description} <span className={`badge ${book.status === 'Optional' ? 'badge-info' : 'badge-warning'}`}>{book.status || 'Required'}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-8">
                                        {loggedIn && <div className="flex justify-end"><Link to="/add-files" className="btn btn-success text-white">+ Add Materials</Link></div>}
                                        
                                        {orderedTypes.map(type => groupedFiles[type] && (
                                            <div key={type} className={glassCardStyle}>
                                                <div className="card-body p-6 ">
                                                    <h3 className="card-title mb-4  ">{type.replace(/([A-Z])/g, ' $1').trim()}</h3>
                                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  ">
                                                        {groupedFiles[type].map(file => (
                                                            <a key={file._id} href={file.link} target="_blank" rel="noopener noreferrer" className="btn btn-soft btn-success text-white text-left h-auto py-2 normal-case font-medium">
                                                                {file.title}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};

export default CourseTemplate;