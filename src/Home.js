// import React from 'react';
import { useState, useEffect } from "react"; //importing the hook use state directly, no need for React..... in code
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);


  //this function will always be fired off once the page is rendered, first load and every time as the data changes
  useEffect(() => {
    //changing the state inside side effect could be a bad idea because you could create an infinite loop
     console.log('use effect ran');
     fetch('http://localhost:8000/blogs')
      .then(res => {              //async is not possible inside useEffect, maybe with reference to external function
          return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      }) 
     

     //dependency array: will only be run when certain conditions are met and not always at every re-render
  }, []); //watches after variable in [] brackets, once it changes it will run the function useEffect
 

  return (
    <div className="home">
        {/* handle delete will be evoked inside BlogList.js component but it is defined here above*/}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
     

        {/* filter: return array for true items of call backfunction */}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Paz')} title="Paz' Blogs!"/>  */}
    </div>
  )
};

export default Home;
