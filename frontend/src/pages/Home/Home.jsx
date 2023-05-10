import React, { useContext, useEffect, useState } from "react";
import Category from "../../components/Category";
import Card from "../../components/Card";
import { BlogContext } from "../../context/blogsContext";

const Home = () => {
  const { blogs, allBlogs } = useContext(BlogContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData("/api/blogme/blogs");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async (uri) => {
    try {
      setLoading(true);
      const response = await fetch(uri, { method: "GET" });
      const { data } = await response.json();
      allBlogs(data);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-20 mt-10">
      <Category />

      <div className="my-10 grid grid-cols-2 gap-10 justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : blogs ? (
          blogs.map((blog) => (
            <Card
              key={blog._id}
              blogId={blog._id}
              img={blog.image}
              author={blog.author}
              content={blog.content}
              title={blog.title}
              date={blog.createdAt}
              category={blog.category}
            />
          ))
        ) : (
          <p>Empty Blog</p>
        )}
      </div>
    </div>
  );
};

export default Home;
