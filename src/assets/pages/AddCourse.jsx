// src/assets/pages/AddCourse.jsx
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../utils/cropImage'; // You must have this utility file

const AddCourse = () => {
    const [course, setCourse] = useState({
        code: '',
        title: '',
        university: 'University of New Mexico'
    });
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    // Image Cropping State
    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImageFile, setCroppedImageFile] = useState(null);
    const [showCropper, setShowCropper] = useState(false);
    const [imagePreview, setImagePreview] = useState('');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: value
        }));
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
            const croppedFile = new File([croppedImageBlob], "cropped-image.jpeg", { type: "image/jpeg" });
            setCroppedImageFile(croppedFile);
            setImagePreview(URL.createObjectURL(croppedImageBlob));
            setShowCropper(false);
            setImageSrc(null);
        } catch (e) {
            console.error(e);
            toast.error('Could not crop image.');
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error('You must be logged in to add a course.');
            return;
        }

        if (!croppedImageFile) {
            toast.error('Please select and crop an image for the course.');
            return;
        }

        setSubmitting(true);

        const formData = new FormData();
        formData.append('code', course.code);
        formData.append('title', course.title);
        formData.append('university', course.university);
        formData.append('image', croppedImageFile);


        try {
            await api.post('/courses', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success('Course added successfully!');
            setTimeout(() => navigate('/teaching'), 2000); // Navigate after a short delay
        } catch (error) {
            toast.error('Failed to add course.');
            console.error('Error adding course:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200 pt-20 pb-10">
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />

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

            <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl w-full max-w-lg">
                <div className="card-body">
                    <h2 className="card-title text-2xl justify-center">Add New Course</h2>

                    <div className="form-control">
                        <label className="label"><span className="label-text">University</span></label>
                        <select
                            name="university"
                            value={course.university}
                            onChange={handleChange}
                            required
                            className="select select-bordered w-full"
                        >
                            <option>University of New Mexico</option>
                            <option>Fordham University</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label"><span className="label-text">Course Code</span></label>
                        <input
                            type="text"
                            name="code"
                            value={course.code}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label"><span className="label-text">Course Title</span></label>
                        <input
                            type="text"
                            name="title"
                            value={course.title}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label"><span className="label-text">Course Image</span></label>
                        {imagePreview && <img src={imagePreview} alt="Image preview" className="mb-4 rounded-lg max-h-48 w-auto"/>}
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={onFileChange}
                            required
                            className="file-input file-input-bordered w-full"
                        />
                    </div>

                    <div className="card-actions justify-end mt-4">
                        <button type="submit" className="btn btn-primary" disabled={submitting}>
                            {submitting ? 'Adding...' : 'Add Course'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
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

export default AddCourse;
