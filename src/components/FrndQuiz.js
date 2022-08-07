import React from "react";

export default function FrndQuiz() {
  const numbers = [];

  for (let i = 1; i <= 20; i++) {
    numbers.push(
      <li className="bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-full text-xs cursor-default text-center">
        {i}
      </li>
    );
  }
  return (
    <div className="border-dashed border-2 border-gray-200 rounded-lg col-md-3 mt-4 w-full md:w-1/2 lg:w-1/3 mx-auto p-2">
      <div className="header">
        <img
          className="h-30 w-28 mx-auto"
          src="https://cdn.pixabay.com/photo/2012/04/18/19/51/blindfolded-37705__480.png"
          alt="icon"
        />
        <h1 className="text-center text-3xl font-serif font-semibold">
          Check Your YaariScore
        </h1>
      </div>
      <div>
        <ul className="flex flex-wrap">{numbers}</ul>
      </div>
      <div className="row">
        <div className="card">
          hii
        </div>
      </div>
    </div>
  );
}
