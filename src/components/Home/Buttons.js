import React from "react";

export default function Buttons() {
  const btnClass =
  "w-full sm:w-auto px-6 py-2 text-sm sm:text-base bg-rose-200 hover:bg-rose-400 hover:text-white rounded-full shadow-md  hover:shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-rose-200"


  return (
    <div className="flex flex-col md:grid grid-cols-2 gap-5">
      <button className={btnClass}>Try for Free</button>
      <button className={btnClass}>View categories</button>
    </div>
  );
}
