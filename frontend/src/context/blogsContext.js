import { useReducer } from "react";
import { createContext } from "react";
import Reducer from "./blogReducer";

const initialState = {
  blogs: [],
};

export const BlogContext = createContext(initialState);
export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function allBlogs(blogsData) {
    dispatch({
      type: "SET_BLOGS",
      payload: blogsData,
    });
  }

  function authorBlogs(blogsData) {
    dispatch({
      type: "SET_BLOGS_AUTHOR",
      payload: blogsData,
    });
  }

  function addBlogs(blogData) {
    dispatch({
      type: "ADD_BLOG",
      payload: blogData,
    });
  }

  function deleteBlogs(id) {
    dispatch({
      type: "DELETE_BLOG",
      payload: id,
    });
  }

  return (
    <BlogContext.Provider
      value={{
        blogs: state.blogs,
        allBlogs,
        addBlogs,
        deleteBlogs,
        authorBlogs,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
