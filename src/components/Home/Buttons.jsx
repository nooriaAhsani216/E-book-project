import React from "react";

export default function Buttons({text,className=""}) {
  return (
    <div>
       <button
      className={`w-48 px-6 py-2 text-sm sm:text-base bg-[#FAF3E0] text-[#6B4226] hover:text-white hover:bg-[#6B4226] rounded-full shadow-md hover:shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#6B4226] ${className}`}
    >{text}</button>
      {/* <button className={btnClass}>View categories</button> */}
    </div>
  );
}
