import React, { useState, useEffect } from "react";

const TestApi = () => {
  const [mtitle, setMtitle] = useState();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/version")
      .then((res) => res.json())
      .then((data) => {
        setMtitle(data.username);
        //setMatches(data.username.matches);
      });
    //.then((data) => setMtitle({ title: data.title }));
  }, []);

  return <div>{mtitle}</div>;
};

export default TestApi;
