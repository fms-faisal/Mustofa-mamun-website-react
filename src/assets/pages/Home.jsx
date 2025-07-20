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

  if (!profile) return <div>Loading...</div>;

  return (
    <>
      <Helmet>
        {/* Helmet content remains the same */}
      </Helmet>
      <ToastContainer />
      <main>
        <div className="w-[95%] px-6 py-10 lg:py-20 lg:mt-6 mx-auto">
          <div className="xl:flex lg:flex-row-reverse">
            <div className="xl:w-1/3 pb-10 lg:pb-0">
              <img
                className="w-full h-[70%] rounded-lg bg-cover md:max-w-xl lg:max-w-3xl object-cover my-auto"
                src="/images/profile_image.jpg"
                alt="Dr. Mustofa Mamun"
              />
            </div>
            <div className="xl:w-1/3 pb-10 mx-4 lg:pb-0">
              <section className="flex flex-wrap gap-x-2 lg:justify-between text-center justify-center">
                <div className="lg:text-xl">
                  <h2 className="leading-loose border-2 px-4 rounded-lg border-green-200 text-green-600 font-semibold flex justify-center md:flex">
                    Teaching Interests
                  </h2>
                  {isEditing ? (
                    <textarea 
                      className="mt-4 w-full h-40 p-2 border rounded"
                      value={editData.teachingInterests.join('\n')}
                      onChange={(e) => handleListChange(e, 'teachingInterests')}
                    />
                  ) : (
                    <ul className="mt-4 leading-loose text-gray-600 lg:text-left dark:text-gray-300 list-inside">
                      {profile.teachingInterests.map((item) => <li key={item}>◇ {item}</li>)}
                    </ul>
                  )}
                </div>
                <div className="lg:text-xl lg:mt-4">
                  <h2 className="leading-loose border-2 px-4 rounded-lg border-green-200 text-green-600 font-semibold text-center md:flex flex justify-center">
                    Research Areas
                  </h2>
                  {isEditing ? (
                     <textarea 
                      className="mt-4 w-full h-32 p-2 border rounded"
                      value={editData.researchAreas.join('\n')}
                      onChange={(e) => handleListChange(e, 'researchAreas')}
                    />
                  ) : (
                    <ul className="mt-4 leading-loose text-gray-600 lg:text-left dark:text-gray-300 list-inside">
                      {profile.researchAreas.map((item) => <li key={item}>◇ {item}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            </div>
            <div className="w-full xl:w-2/3">
              <section>
                {isEditing ? (
                  <input 
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleChange}
                    className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl bg-transparent border-b-2 w-full"
                  />
                ) : (
                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">{profile.name}</h1>
                )}
                {isEditing ? (
                  <>
                    <textarea name="bio1" value={editData.bio1} onChange={handleChange} className="w-full h-24 p-2 mt-4 border rounded" />
                    <textarea name="bio2" value={editData.bio2} onChange={handleChange} className="w-full h-24 p-2 mt-4 border rounded" />
                  </>
                ) : (
                  <>
                    <p className="leading-loose text-gray-600 text-lg dark:text-gray-300 mt-4 lg:text-2xl">{profile.bio1}</p>
                    <p className="leading-loose text-gray-600 text-lg dark:text-gray-300 mt-4 lg:text-2xl">{profile.bio2}</p>
                  </>
                )}
                {loggedIn && (
                  <div className="mt-4">
                    {isEditing ? (
                      <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
                    ) : (
                      <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-blue-500 text-white rounded">Edit</button>
                    )}
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}