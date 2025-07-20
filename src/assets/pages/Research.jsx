// src/assets/pages/Research.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import api from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Research = ({ loggedIn }) => {
    const [researchItems, setResearchItems] = useState([]);
    const [isEditing, setIsEditing] = useState(null); // Stores ID of item being edited
    const [editData, setEditData] = useState({});
    const [isAdding, setIsAdding] = useState(false);
    const [newData, setNewData] = useState({ type: 'paper', title: '', abstract: '', content: '' });

    const fetchResearch = async () => {
        try {
            const response = await api.get('/research');
            setResearchItems(response.data);
        } catch (error) {
            console.error("Error fetching research:", error);
        }
    };

    useEffect(() => {
        fetchResearch();
    }, []);

    const handleSave = async (id) => {
        const token = localStorage.getItem('token');
        try {
            await api.put(`/research/${id}`, editData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Item updated!");
            setIsEditing(null);
            fetchResearch();
        } catch (error) {
            toast.error("Failed to update item.");
        }
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                await api.delete(`/research/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                toast.success("Item deleted!");
                fetchResearch();
            } catch (error) {
                toast.error("Failed to delete item.");
            }
        }
    };
    
    const handleAdd = async () => {
        const token = localStorage.getItem('token');
        try {
            await api.post('/research', newData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Item added!");
            setIsAdding(false);
            setNewData({ type: 'paper', title: '', abstract: '', content: '' });
            fetchResearch();
        } catch (error) {
            toast.error("Failed to add item.");
        }
    };

    const papers = researchItems.filter(item => item.type === 'paper');
    const publications = researchItems.filter(item => item.type === 'publication');

    return (
        <>
            <Helmet>{/* ... */}</Helmet>
            <ToastContainer />
            <div className="max-w-[95%] mx-auto dark:text-gray-50">
                <main className="max-w-[90%] mx-auto">
                    <div className="mt-20">
                        {papers.map(paper => (
                            <div key={paper._id}>
                                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                {isEditing === paper._id ? (
                                    <div className="space-y-2">
                                        <input type="text" value={editData.title} onChange={(e) => setEditData({...editData, title: e.target.value})} className="w-full p-2 border rounded font-semibold"/>
                                        <textarea value={editData.abstract} onChange={(e) => setEditData({...editData, abstract: e.target.value})} className="w-full h-40 p-2 border rounded"/>
                                        <button onClick={() => handleSave(paper._id)} className="px-3 py-1 bg-green-500 text-white rounded">Save</button>
                                        <button onClick={() => setIsEditing(null)} className="px-3 py-1 bg-gray-500 text-white rounded ml-2">Cancel</button>
                                    </div>
                                ) : (
                                    <div>
                                        <h4 className="leading-loose text-black dark:text-gray-50 font-semibold">{paper.title}</h4>
                                        <p className="leading-loose text-gray-600 dark:text-gray-300">Abstract: <br />{paper.abstract}</p>
                                        {loggedIn && (
                                            <div className="mt-2 space-x-2">
                                                <button onClick={() => { setIsEditing(paper._id); setEditData(paper); }} className="px-3 py-1 text-sm bg-blue-500 text-white rounded">Edit</button>
                                                <button onClick={() => handleDelete(paper._id)} className="px-3 py-1 text-sm bg-red-500 text-white rounded">Delete</button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                        <hr className="my-6 border-gray-200 dark:border-gray-700" />
                        <div className="mt-4">
                            <h4 className="leading-loose text-black dark:text-white font-semibold uppercase">Publications</h4>
                            {publications.map(pub => (
                                <div key={pub._id} className="mt-4">
                                    {isEditing === pub._id ? (
                                        <div className="space-y-2">
                                            <textarea value={editData.content} onChange={(e) => setEditData({...editData, content: e.target.value})} className="w-full h-24 p-2 border rounded"/>
                                            <button onClick={() => handleSave(pub._id)} className="px-3 py-1 bg-green-500 text-white rounded">Save</button>
                                            <button onClick={() => setIsEditing(null)} className="px-3 py-1 bg-gray-500 text-white rounded ml-2">Cancel</button>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="leading-loose text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: pub.content }}></p>
                                            {loggedIn && (
                                                <div className="mt-2 space-x-2">
                                                    <button onClick={() => { setIsEditing(pub._id); setEditData(pub); }} className="px-3 py-1 text-sm bg-blue-500 text-white rounded">Edit</button>
                                                    <button onClick={() => handleDelete(pub._id)} className="px-3 py-1 text-sm bg-red-500 text-white rounded">Delete</button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        {loggedIn && (
                            <div className="mt-8">
                                {isAdding ? (
                                    <div className="p-4 border rounded space-y-2">
                                        <h3 className="font-semibold">Add New Research Item</h3>
                                        <select value={newData.type} onChange={(e) => setNewData({...newData, type: e.target.value})} className="w-full p-2 border rounded">
                                            <option value="paper">Working Paper</option>
                                            <option value="publication">Publication</option>
                                        </select>
                                        {newData.type === 'paper' ? (
                                            <>
                                                <input type="text" placeholder="Title" value={newData.title} onChange={(e) => setNewData({...newData, title: e.target.value})} className="w-full p-2 border rounded"/>
                                                <textarea placeholder="Abstract" value={newData.abstract} onChange={(e) => setNewData({...newData, abstract: e.target.value})} className="w-full h-32 p-2 border rounded"/>
                                            </>
                                        ) : (
                                            <textarea placeholder="Publication Content (HTML allowed)" value={newData.content} onChange={(e) => setNewData({...newData, content: e.target.value})} className="w-full h-24 p-2 border rounded"/>
                                        )}
                                        <button onClick={handleAdd} className="px-3 py-1 bg-green-500 text-white rounded">Add Item</button>
                                        <button onClick={() => setIsAdding(false)} className="px-3 py-1 bg-gray-500 text-white rounded ml-2">Cancel</button>
                                    </div>
                                ) : (
                                    <button onClick={() => setIsAdding(true)} className="px-4 py-2 bg-blue-500 text-white rounded">Add New Item</button>
                                )}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Research;