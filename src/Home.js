// import React from 'react';
import { useState, useEffect } from "react"; //importing the hook use state directly, no need for React..... in code
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //this function will always be fired off once the page is rendered, first load and every time as the data changes
  useEffect(() => {
    //changing the state inside side effect could be a bad idea because you could create an infinite loop
    setTimeout(() => {
      fetch("http://localhost:8000/blogs") // start server command, cd into blog then npx json-server --watch data/database.json --port 8000
        .then((res) => {
          //.then necessary because async is not possible inside useEffect, maybe with reference to external function
          console.log(res);
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 300);
    //dependency array: will only be run when certain conditions are met and not always at every re-render
  }, []); //watches after variable in [] brackets, once it changes it will run the function useEffect

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
