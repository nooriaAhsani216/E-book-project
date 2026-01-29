import React from "react";

export default function Buttons({text,className=""}) {
  return (
    <div>
       <button
      className={`w-48 px-6 py-2 text-sm sm:text-base bg-red-200 text-black hover:text-white hover:bg-rose-400 rounded-full ${className}`}
    >{text}</button>
    </div>
  );
}
