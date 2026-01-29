
import React, { useState } from 'react';

const ENDPOINT = "/api/users";

export default function SignUp() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  };
  const [formData, setFormData] = useState(initialValues);
  const [message, setMessage] = useState("");
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async(e)=>{
  e.preventDefault();
  if (!formData.name || !formData.email || !formData.password) {
    setMessage("Please fill all fields");
    return;
  }
  if (formData.password !== formData.confirmpassword) {
    setMessage("Passwords do not match.");
    console.log(setMessage)
    return;
  }
  try{
   const res = await fetch(ENDPOINT,{
    method:"POST",
    headers :{
      "Content-type":"application/json"
    },
    body:JSON.stringify(formData)
   });
   const data = await res.json();
 
   if (!res.ok) {
    setMessage(data.message || "Something went wrong");
    return;
  }

  
  setMessage("Sign Up successful!");
  setFormData(initialValues);
} catch (error) {
  console.error("Error:", error);
  setMessage("Network error. Please try again.");
}
}
  return (
    <div className="h-screen flex items-center justify-center  bg-white px-4 mt-20">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-red-400">Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl   focus:outline-none focus:ring-2  focus:ring-red-100"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100"
        />
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={formData.confirmpassword}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100"
        />
        <button
          type="submit"
          className="w-full  bg-red-200  hover:bg-rose-400 text-black hover:text-white py-2 rounded-xl font-semibold transition duration-200"
        >
          Submit
        </button>

        {message && (
          <p className={`text-center ${message.includes("successful") ? "text-green-600" : "text-red-500"} mt-4`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
