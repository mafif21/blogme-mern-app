import React, { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import FileInput from "../../components/FileInput";
import SelectInput from "../../components/SelectInput";
import TextareaInput from "../../components/TextareaInput";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const endpoint = "/api/blogme/blogs";
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDataById();
  }, []);

  const getDataById = async () => {
    try {
      const response = await fetch(endpoint + `/${id}`, { method: "GET" });
      const { data } = await response.json();

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      setTitle(data.title);
      setImage(data.image);
      setCategory(data.category);
      setContent(data.content);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("title", title);
      data.append("image", image);
      data.append("category", category);
      data.append("author", "Muhammad Afif");
      data.append("content", content);
      const response = await fetch(endpoint + `/${id}`, {
        method: "PATCH",
        body: data,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      setTitle("");
      setImage("");
      setCategory("");
      setContent("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-20 mt-10 flex flex-col gap-10 items-center">
      <h1 className="font-bold text-2xl">Edit Blog</h1>

      <form
        className="w-1/2 bg-white py-8 px-7 rounded-md drop-shadow-lg mb-10"
        onSubmit={submitHandler}
      >
        <TextInput
          id="title"
          title="Title"
          value={title}
          action={setTitle}
          mssg="Input your blog title..."
        />
        <FileInput id="image" title="Image" action={setImage} />
        <SelectInput
          id="category"
          title="Category"
          value={category}
          action={setCategory}
        />
        <TextareaInput
          id="content"
          title="Content"
          value={content}
          action={setContent}
        />

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Edit;
