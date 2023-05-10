import React from "react";

const TextInput = ({ id, title, value, action, mssg }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {title}
      </label>
      <input
        type="text"
        value={value}
        name={id}
        onChange={(e) => action(e.target.value)}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-50 block w-full p-2.5 "
        placeholder={mssg}
        required
      />
    </div>
  );
};

export default TextInput;
