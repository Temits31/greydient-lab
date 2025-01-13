'use client'

import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { FirebaseError } from "firebase/app";

const LoginButton = () => {
  const handleLogin = async () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");

    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert(`Welcome, ${userCredential.user.displayName || userCredential.user.email}!`);
      console.log(auth)
    } catch (error) {
      if (error instanceof FirebaseError) {  // Type-safe check for FirebaseError
        console.error("Sign-up failed:", error.message);
        alert("Sign-up failed: " + error.message);
      } else {
        console.error("An unknown error occurred:", error);
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-purple py-2 px-6 capitalize rounded-full font-medium flex gap-2 items-center justify-between max-w-fit hover:text-white hover:bg-rosa transition-all duration-500 hover:-translate-y-[2px] bg-white text-blackcolor border"
    >
      Log in
    </button>
  );
};

export default LoginButton;
