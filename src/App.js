import React from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [blog, setBlog] = useState([]);

  console.log(input);
  console.log(description);

  function addBlog() {
    if (!input) {
    } else {
      setBlog([...blog, input, description]);
      setInput("");
      setDescription("");
    }
  }
  function deleteBlog(id) {
    console.log(id);
    const delBLog = blog.filter((ele, ind) => {
      return ind !== id;
    });
    setBlog(delBLog);
  }

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
        <button className="btn" onClick={addBlog}>
          Add Blog
        </button>
      </div>
      <div className="blogs">
        {blog.map((ele, ind) => {
          return (
            <div className="eachBlog" key={ind}>
              <h3>{ele}</h3>
              <button className="delete-btn" onClick={() => deleteBlog(ind)}>
                Delete
              </button>
              <button className="edit-btn">Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
