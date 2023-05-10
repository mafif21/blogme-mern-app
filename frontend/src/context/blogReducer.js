export default function Reducer(state, action) {
  switch (action.type) {
    case "SET_BLOGS":
      return {
        blogs: action.payload,
      };

    case "SET_BLOGS_AUTHOR":
      return {
        blogs: action.payload,
      };

    case "ADD_BLOG":
      return {
        ...state,
        blogs: [...state, action.payload],
      };

    case "DELETE_BLOG":
      return {
        ...state,
        blogs: state.blogs.filter((blog) => {
          return blog.id !== action.payload._id;
        }),
      };

    default:
      return state;
  }
}
