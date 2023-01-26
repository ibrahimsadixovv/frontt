import React, { useEffect, useState } from "react";
import axios from "axios";
import './cards.css';
import { Link } from "react-router-dom";

function Cards() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);

  return (
    <div className="cards">
      {post.map((item, i) => {
        return (
          <div key={i}>
         <img src={item?.imgUrl}/>
            <p>{item?.category}</p>
            <p>{item?.title}</p>
            <p>{item?.price}</p>
            <Link to={`/details/${item._id}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;