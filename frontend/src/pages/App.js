import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "../components/Navbar";
import Create from "./Blogs/Create";
import Myblogs from "./authorBlog/Myblogs";
import { BlogProvider } from "../context/blogsContext";
import Edit from "./Blogs/Edit";

function App() {
  return (
    <BlogProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/postblog" element={<Create />}></Route>
          <Route path="/myblogs" element={<Myblogs />}></Route>
          <Route path="/myblogs/edit/:id" element={<Edit />}></Route>
        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;
