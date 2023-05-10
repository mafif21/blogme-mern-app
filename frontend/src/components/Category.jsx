import React from "react";
import categories from "../enums/Categoryenums";

const Category = () => {
  return (
    <ul className="flex justify-center ">
      {categories.map((category, i) => (
        <li key={i}>
          <button className="px-4 py-4 text-xs font-bold inline-block text-gray-300 hover:text-slate-900">
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Category;
