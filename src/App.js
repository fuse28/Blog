import React from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [blog, setBlog] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [edititem, setEditItem] = useState(null);

  console.log(input);
  console.log(description);

  function addBlog() {
    if (!input) {
      alert("insert data");
    } else if (input || (description && !toggleSubmit)) {
      setBlog(
        blog.map((ele) => {
          if (ele.id == edititem) {
            return { ...ele, name: input, description };
          }
          return ele;
        })
      );
      setToggleSubmit(true);

      setInput("");
      setDescription("");
      setEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: input,
        description,
      };
      setBlog([...blog, allInputData]);
      setInput("");
      setDescription("");
      console.log(allInputData);
    }
  }

  function deleteBlog(index) {
    const delBLog = blog.filter((ele) => {
      return index != ele.id;
    });
    setBlog(delBLog);
  }
  const editBlog = (id) => {
    let editBlog = blog.find((ele) => {
      return (ele.id = id);
    });
    console.log(editBlog);
    setToggleSubmit(true);

    setInput(blog.name);
    setDescription(blog.name);
    setEditItem(id);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>ADD BLOG</h1>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="title"
          placeholder="Title"
        ></input>
        <input
          className="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        ></input>

        {toggleSubmit ? (
          <button className="btn" onClick={addBlog}>
            Add Blog
          </button>
        ) : (
          <button className="btn" onClick={addBlog}>
            Edit Blog
          </button>
        )}
      </div>
      <div className="blogs">
        {blog.map((ele) => {
          return (
            <div className="eachBlog" key={ele.id}>
              <h3>{ele.name}</h3>
              <button className="delete-btn" onClick={() => deleteBlog(ele.id)}>
                Delete
              </button>
              <button className="edit-btn" onClick={() => editBlog(ele.id)}>
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
