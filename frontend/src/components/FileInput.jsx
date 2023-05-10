import React from "react";

const FileInput = ({ id, title, action }) => {
  return (
    <div className="mb-3">
      <label
        className="block mb-2 text-sm font-medium text-gray-900"
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2.5"
        id={id}
        name={id}
        type="file"
        formEncType="multipart/form-data"
        onChange={(e) => action(e.target.files[0])}
      />
    </div>
  );
};

export default FileInput;
