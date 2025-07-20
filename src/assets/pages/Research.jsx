// src/assets/pages/Research.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import api from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Defined the glass style to be reused on all cards
const glassCardStyle = "card bg-base-200/10 backdrop-blur-lg border border-base-300/100 shadow-md text-black dark:text-white";

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
            <Helmet>
                <title>Research | Mustofa Mamun</title>
                <meta name="description" content="Research and publications by Mustofa Mamun." />
            </Helmet>
            <ToastContainer position="bottom-right" theme="colored" />
            <main className="pt-24 md:pt-32 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="text-center mb-12 animate-fadeInUp">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-base-content">Research</h1>
                        <p className="mt-4 text-lg text-base-content/70">Exploring macroeconomic principles and their real-world implications.</p>
                    </header>
                    
                    <div className="space-y-12">
                        <section className="animate-fadeInUp" style={{animationDelay: '150ms'}}>
                            <h2 className="text-3xl font-bold text-base-content mb-6 border-b-2 border-primary pb-2">Working Papers</h2>
                            <div className="space-y-8">
                                {papers.map(paper => (
                                    <div key={paper._id} className={glassCardStyle}>
                                        <div className="card-body">
                                            {isEditing === paper._id ? (
                                                <div className="space-y-4">
                                                    <input type="text" value={editData.title} onChange={(e) => setEditData({...editData, title: e.target.value})} className="input input-bordered w-full font-semibold"/>
                                                    <textarea value={editData.abstract} onChange={(e) => setEditData({...editData, abstract: e.target.value})} className="textarea textarea-bordered w-full h-40"/>
                                                    <div>
                                                        <button onClick={() => handleSave(paper._id)} className="btn btn-sm btn-primary">Save</button>
                                                        <button onClick={() => setIsEditing(null)} className="btn btn-sm btn-ghost ml-2">Cancel</button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h3 className="card-title text-xl">{paper.title}</h3>
                                                    <div className="prose max-w-none mt-2 text-base-content/80 font-normal">
                                                        <p><strong>Abstract:</strong> {paper.abstract}</p>
                                                    </div>
                                                    {loggedIn && (
                                                        <div className="card-actions justify-end mt-4">
                                                            <button onClick={() => { setIsEditing(paper._id); setEditData(paper); }} className="btn btn-xs btn-info">Edit</button>
                                                            <button onClick={() => handleDelete(paper._id)} className="btn btn-xs btn-error">Delete</button>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="animate-fadeInUp" style={{animationDelay: '300ms'}}>
                            <h2 className="text-3xl font-bold text-base-content mb-6 border-b-2 border-primary pb-2">Publications</h2>
                            <div className="space-y-6">
                                {publications.map(pub => (
                                    <div key={pub._id} className={glassCardStyle}>
                                        <div className="card-body">
                                            {isEditing === pub._id ? (
                                                <div className="space-y-4">
                                                    <textarea value={editData.content} onChange={(e) => setEditData({...editData, content: e.target.value})} className="textarea textarea-bordered w-full h-24"/>
                                                    <div>
                                                        <button onClick={() => handleSave(pub._id)} className="btn btn-sm btn-primary">Save</button>
                                                        <button onClick={() => setIsEditing(null)} className="btn btn-sm btn-ghost ml-2">Cancel</button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div className="prose max-w-none text-base-content/80" dangerouslySetInnerHTML={{ __html: pub.content }}></div>
                                                    {loggedIn && (
                                                        <div className="card-actions justify-end mt-4">
                                                            <button onClick={() => { setIsEditing(pub._id); setEditData(pub); }} className="btn btn-xs btn-info">Edit</button>
                                                            <button onClick={() => handleDelete(pub._id)} className="btn btn-xs btn-error">Delete</button>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {loggedIn && (
                            <section className="animate-fadeInUp" style={{animationDelay: '450ms'}}>
                                {isAdding ? (
                                    <div className={glassCardStyle}>
                                        <div className="card-body">
                                            <h3 className="card-title">Add New Research Item</h3>
                                            <div className="form-control">
                                                <select value={newData.type} onChange={(e) => setNewData({...newData, type: e.target.value, title: '', abstract: '', content: ''})} className="select select-bordered">
                                                    <option value="paper">Working Paper</option>
                                                    <option value="publication">Publication</option>
                                                </select>
                                            </div>
                                            {newData.type === 'paper' ? (
                                                <>
                                                    <div className="form-control">
                                                        <input type="text" placeholder="Title" value={newData.title} onChange={(e) => setNewData({...newData, title: e.target.value})} className="input input-bordered"/>
                                                    </div>
                                                    <div className="form-control">
                                                        <textarea placeholder="Abstract" value={newData.abstract} onChange={(e) => setNewData({...newData, abstract: e.target.value})} className="textarea textarea-bordered h-32"/>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="form-control">
                                                    <textarea placeholder="Publication Content (HTML allowed)" value={newData.content} onChange={(e) => setNewData({...newData, content: e.target.value})} className="textarea textarea-bordered h-24"/>
                                                </div>
                                            )}
                                            <div className="card-actions justify-end">
                                                <button onClick={handleAdd} className="btn btn-primary">Add Item</button>
                                                <button onClick={() => setIsAdding(false)} className="btn btn-ghost">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <button onClick={() => setIsAdding(true)} className="btn btn-primary">+ Add New Item</button>
                                    </div>
                                )}
                            </section>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Research;