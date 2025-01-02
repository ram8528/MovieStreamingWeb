import React, { useState } from "react";
import Header from "./Header.jsx";
// import bgImage from '../assets/bg.jpg';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg"
          alt="logo"
        />
      </div>
      <div className="flex justify-center items-center h-screen">
      <form className="w-4/12 p-12 bg-black text-white opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up "}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full name"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up "}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered! Sign In Now"}
        </p>
      </form>
      </div>
    </div>
  );
};

export default Login;
