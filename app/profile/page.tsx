'use client';

import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from 'next/compat/router';

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } 
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Profile Page</h1>

        <div className="flex justify-center mb-6">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-300 flex justify-center items-center text-white text-xl">
              No Photo
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-lg font-semibold text-gray-700"><strong>Email:</strong> {user.email}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700"><strong>Display Name:</strong> {user.displayName || 'N/A'}</p>
          </div>
          
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => auth.signOut()}
            className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
