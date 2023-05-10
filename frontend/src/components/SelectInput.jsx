import React from "react";
import categories from "../enums/Categoryenums";

const SelectInput = ({ id, title, value, action }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {title}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full p-2.5"
        onChange={(e) => action(e.target.value)}
      >
        {categories.map((category, i) => (
          <option key={i}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
