// src/assets/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import api from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home({ loggedIn }) {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  const fetchProfile = async () => {
    try {
      const response = await api.get('/profile');
      setProfile(response.data);
      setEditData(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    try {
      await api.put('/profile', editData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success("Profile updated!");
      setIsEditing(false);
      fetchProfile();
    } catch (error) {
      toast.error("Failed to update profile.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleListChange = (e, listName) => {
    setEditData(prev => ({ ...prev, [listName]: e.target.value.split('\n') }));
  };

  if (!profile) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <>
      <Helmet>
        <title>Mustofa Mamun | Macroeconomist</title>
        <meta name="description" content="The official website of Mustofa Mamun, a macroeconomist specializing in research and teaching." />
      </Helmet>
      <ToastContainer position="bottom-right" theme="colored" />
      <main className="pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 animate-fadeInUp">
            
            <div className="md:col-span-2 space-y-6">
              <section>
                {isEditing ? (
                  <input 
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleChange}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-base-content bg-transparent border-b-2 w-full"
                  />
                ) : (
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-base-content">{profile.name}</h1>
                )}
                <p className="mt-2 text-lg text-primary font-medium">{profile.title}</p>

                {isEditing ? (
                  <>
                    <textarea name="bio1" value={editData.bio1} onChange={handleChange} className="w-full h-24 p-2 mt-4 border rounded textarea" />
                    <textarea name="bio2" value={editData.bio2} onChange={handleChange} className="w-full h-24 p-2 mt-4 border rounded textarea" />
                  </>
                ) : (
                  <div className="mt-6 prose prose-lg max-w-none text-base-content/80">
                    <p>{profile.bio1}</p>
                    <p>{profile.bio2}</p>
                  </div>
                )}
              </section>

              <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-base-content mb-4">Teaching Interests</h2>
                  {isEditing ? (
                    <textarea 
                      className="textarea textarea-bordered w-full h-40"
                      value={editData.teachingInterests.join('\n')}
                      onChange={(e) => handleListChange(e, 'teachingInterests')}
                    />
                  ) : (
                    <ul className="space-y-2">
                      {profile.teachingInterests.map((item) => <li key={item} className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> {item}</li>)}
                    </ul>
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-base-content mb-4">Research Areas</h2>
                  {isEditing ? (
                     <textarea 
                      className="textarea textarea-bordered w-full h-32"
                      value={editData.researchAreas.join('\n')}
                      onChange={(e) => handleListChange(e, 'researchAreas')}
                    />
                  ) : (
                    <ul className="space-y-2">
                      {profile.researchAreas.map((item) => <li key={item} className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> {item}</li>)}
                    </ul>
                  )}
                </div>
              </section>

            </div>

            <div className="md:col-span-1 flex flex-col items-center">
              <img
                className="w-full max-w-xs rounded-2xl shadow-lg"
                src="/images/profile_image.jpg"
                alt="Dr. Mustofa Mamun"
              />
              {loggedIn && (
                <div className="mt-6 w-full max-w-xs">
                  {isEditing ? (
                    <button onClick={handleSave} className="btn btn-primary w-full">Save Changes</button>
                  ) : (
                    <button onClick={() => setIsEditing(true)} className="btn btn-secondary w-full">Edit Profile</button>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
    </>
  );
}