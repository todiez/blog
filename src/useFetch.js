import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //changing the state inside side effect could be a bad idea because you could create an infinite loop
    setTimeout(() => {
      fetch(url) // start server command, cd into blog then npx json-server --watch data/database.json --port 8000
        .then((res) => {
          //.then necessary because async is not possible inside useEffect, maybe with reference to external function
          console.log(res);
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 3000);
    //dependency array: will only be run when certain conditions are met and not always at every re-render
  }, []); //watches after variable in [] brackets, once it changes it will run the function useEffect

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
