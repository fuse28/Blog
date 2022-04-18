import React from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [blog, setBlog] = useState([]);

  function addBlog() {
    setBlog([...blog, input, description]);
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
        <div className="eachBlog">
          <h3>hello</h3>
          <button className="delete-btn">Delete</button>
          <button className="edit-btn">Edit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
