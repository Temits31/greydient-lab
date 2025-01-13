import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { FirebaseError } from "firebase/app";

const SignUpButton = () => {
  const handleSignUp = async () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email || "", password || "");
      alert(`Sign-up successful! Welcome, ${userCredential.user.email}`);
    } catch (error: FirebaseError) {
      console.error("Sign-up failed:", error.message);
      alert("Sign-up failed: " + error.message);
    }
  };

  return (
    <button
      onClick={handleSignUp}
      className="bg-purple-300 py-2 px-6 capitalize rounded-full font-medium flex gap-2 items-center justify-between max-w-fit hover:text-white hover:bg-rosa transition-all duration-500 hover:-translate-y-[2px] text-white"
    >
      Sign up
    </button>
  );
};

export default SignUpButton;
