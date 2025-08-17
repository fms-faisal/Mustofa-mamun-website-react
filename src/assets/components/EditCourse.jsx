// src/assets/pages/EditCourse.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api';
import { Helmet } from 'react-helmet';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../utils/cropImage';

const EditCourse = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState({ code: '', title: '', university: '', image: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    // Image Cropping State
    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImageFile, setCroppedImageFile] = useState(null);
    const [showCropper, setShowCropper] = useState(false);


    useEffect(() => {
        const fetchCourse = async () => {
            try {
                // Fetch all courses and find the one with the matching ID
                const response = await api.get('/courses');
                const currentCourse = response.data.find(c => c._id === id);
                if (currentCourse) {
                    setCourse(currentCourse);
                } else {
                    setError('Course not found.');
                }
            } catch (err) {
                setError('Failed to fetch course data.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchCourse();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse(prev => ({ ...prev, [name]: value }));
    };

    const onFileChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const imageDataUrl = await readFile(file);
            setImageSrc(imageDataUrl);
            setShowCropper(true);
        }
    };

    const onCropComplete = useCallback((croppedArea, croppedAreaPixelsValue) => {
        setCroppedAreaPixels(croppedAreaPixelsValue);
    }, []);

    const handleCrop = async () => {
        try {
            const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
            // Create a File object from the Blob to send to the server
            const croppedFile = new File([croppedImageBlob], "cropped-image.jpeg", { type: "image/jpeg" });
            setCroppedImageFile(croppedFile);
            // Create a temporary URL for previewing the cropped image
            setCourse(prev => ({ ...prev, image: URL.createObjectURL(croppedImageBlob) }));
            setShowCropper(false);
            setImageSrc(null); // Clear the base64 image from memory
        } catch (e) {
            console.error(e);
            setError('Could not crop the image. Please try again.');
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        const formData = new FormData();
        formData.append('title', course.title);
        formData.append('code', course.code);
        formData.append('university', course.university);
        
        // Only append the image if a new one was cropped and is ready
        if (croppedImageFile) {
            formData.append('image', croppedImageFile);
        }

        try {
            const token = localStorage.getItem('token');
            await api.put(`/courses/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            navigate('/teaching');
        } catch (err) {
            setError('Failed to update course. Please check the details and try again.');
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };
    
    if (loading) return <div className="text-center py-40">Loading course details...</div>;
    if (error && !course.title) return <div className="text-center py-40 text-error">{error}</div>;

    return (
        <>
            <Helmet><title>Edit Course | Mustofa Mamun</title></Helmet>
            <main className="pt-24 md:pt-32 pb-16 max-w-2xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Edit Course</h1>

                {showCropper && imageSrc && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col p-4">
                        <div className="relative flex-grow">
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                zoom={zoom}
                                aspect={16 / 9}
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={onCropComplete}
                            />
                        </div>
                        <div className="flex-shrink-0 pt-4 flex justify-center items-center gap-4 bg-base-300 p-2 rounded-b-lg">
                           <span className="text-sm">Zoom</span>
                           <input
                                type="range"
                                value={zoom}
                                min={1}
                                max={3}
                                step={0.1}
                                aria-labelledby="Zoom"
                                onChange={(e) => setZoom(e.target.value)}
                                className="range range-xs w-32"
                            />
                            <button onClick={handleCrop} className="btn btn-primary">Crop Image</button>
                            <button onClick={() => setShowCropper(false)} className="btn btn-ghost">Cancel</button>
                        </div>
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="label"><span className="label-text">Course Title</span></label>
                        <input type="text" id="title" name="title" value={course.title} onChange={handleChange} className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label htmlFor="code" className="label"><span className="label-text">Course Code</span></label>
                        <input type="text" id="code" name="code" value={course.code} onChange={handleChange} className="input input-bordered w-full" required />
                    </div>
                     <div>
                        <label htmlFor="university" className="label"><span className="label-text">University</span></label>
                        <input type="text" id="university" name="university" value={course.university} onChange={handleChange} className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label htmlFor="image" className="label"><span className="label-text">Course Image</span></label>
                        {course.image && <img src={course.image} alt="Current course" className="mb-4 rounded-lg max-h-48 w-auto"/>}
                        <input type="file" id="image" accept="image/*" onChange={onFileChange} className="file-input file-input-bordered w-full" />
                        <p className="text-xs text-base-content/60 mt-1">Select a new image to change it. A 16:9 aspect ratio is recommended.</p>
                    </div>

                    {error && <p className="text-error text-center">{error}</p>}
                    
                    <div className="flex justify-end gap-4">
                        <button type="button" onClick={() => navigate('/teaching')} className="btn btn-ghost">Cancel</button>
                        <button type="submit" className="btn btn-primary" disabled={submitting}>
                            {submitting ? 'Updating...' : 'Update Course'}
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
};

// Helper to read file as a data URL
function readFile(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(reader.result), false);
        reader.readAsDataURL(file);
    });
}

export default EditCourse;
