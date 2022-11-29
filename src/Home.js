// import React from 'react';
import { useState } from "react"; //importing the hook use state directly, no need for React..... in code
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Paz", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "Ida", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "Paz", id: 3 },
  ]);

  return (
    <div className="home">
        <BlogList blogs={blogs} title="All Blogs!"/>
    </div>
  )
};

export default Home;
