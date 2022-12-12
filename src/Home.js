// import React from 'react';
import { useState, useEffect } from "react"; //importing the hook use state directly, no need for React..... in code
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {
        isPending && (
          <div>Loading</div>
        ) /*output the div only when isPending is true*/
      }
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

      {/* filter: return array for true items of call backfunction */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Paz')} title="Paz' Blogs!"/>  */}
    </div>
  );
};

export default Home;
