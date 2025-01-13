import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
      <div className="profile-info">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Display Name:</strong> {user.displayName || 'N/A'}</p>
        <p><strong>Photo:</strong> {user.photoURL ? <img src={user.photoURL} alt="User Avatar" className="w-24 h-24 rounded-full" /> : 'No photo'}</p>
      </div>
    </div>
  );
};

export default ProfilePage;