// import React from 'react';
import { useState } from "react"; //importing the hook use state directly, no need for React..... in code

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Paz", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "Ida", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "Paz", id: 3 },
  ]);

  return (
    <div className="home">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
        ))}
    </div>
  )
};

export default Home;
