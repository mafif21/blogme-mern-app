import React, { useContext, useEffect } from "react";
import MyblogCard from "../../components/MyblogCard";
import { BlogContext } from "../../context/blogsContext";

function Myblogs() {
  const { blogs, authorBlogs } = useContext(BlogContext);

  useEffect(() => {
    fetchAuthorBlog("/api/blogme/blogs");
  });

  const fetchAuthorBlog = async (uri) => {
    try {
      const response = await fetch(uri, { method: "GET" });
      const { data } = await response.json();
      authorBlogs(data.filter((target) => target.author === "Muhammad Afif"));

      if (!response.ok) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return (
    <div className="px-20 mt-10">
      <h1 className="font-bold text-2xl mb-5">My Blogs</h1>
      <div className="flex flex-col gap-y-4">
        {blogs ? (
          blogs.map((blog) => {
            return (
              <MyblogCard
                key={blog._id}
                id={blog._id}
                image={blog.image}
                title={blog.title}
                content={blog.content}
                date={blog.createdAt}
              />
            );
          })
        ) : (
          <div>
            <p>Post Your Blog</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Myblogs;
