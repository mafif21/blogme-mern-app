import React from "react";

const TextareaInput = ({ id, title, value, action }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {title}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Input your blog content..."
        onChange={(e) => action(e.target.value)}
      ></textarea>
    </div>
  );
};

export default TextareaInput;
