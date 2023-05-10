import React, { useContext } from "react";
import { parseISO, format } from "date-fns";
import { BlogContext } from "../context/blogsContext";

const MyblogCard = ({ id, image, title, content, date }) => {
  const dateObj = parseISO(date);
  const newFormat = format(dateObj, "dd MMMM yyyy");
  const { deleteBlogs } = useContext(BlogContext);

  const deleteHandle = async () => {
    const response = await fetch(`/api/blogme/blogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      deleteBlogs(id);
    }
  };
  return (
    <div className="border-b-2 border-gray-300 py-4">
      <div className="grid grid-cols-[200px__1fr_400px] gap-7">
        <div className="w-full">
          <img src={image} alt="blogImage" className="w-full h-32 rounded" />
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-gray-400">{content.substring(0, 150)}...</p>
          <p className="font-semibold text-slate-800 text-xs">
            post at {newFormat}
          </p>
        </div>

        <div className="flex justify-center items-center gap-2">
          <a
            href={`/myblogs/edit/${id}`}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Edit
          </a>

          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={deleteHandle}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyblogCard;
