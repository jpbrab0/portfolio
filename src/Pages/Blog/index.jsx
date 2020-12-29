import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Footer from '../../Components/Footer'
import "./styles.css";
export default (_) => {
  const [postData, setPostData] = useState([]);
  const [postDataLoaded, setPostDataLoaded] = useState(false);
  useEffect(() => {
    axios.get("https://dev.to/api/articles?username=jpbrab0").then((res) => {
      setPostData(res.data);
    });
  }, []);
  setTimeout(() => {
    setPostDataLoaded(true);
  }, 1500);
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <header className="posts_header">
        <div>
          <Link to="/">
            <i className="material-icons">arrow_back</i>
          </Link>
          <h1>Posts</h1>
        </div>
      </header>
      <div className="posts">
        { postDataLoaded ? postData.map((post) => {
          return (
            <div className="post" key={post.id}>
              <a href={post.url}>
                <div className="thumbnail">
                  <img src={post.cover_image} alt={post.title}/>
                </div>
                <div className="description">
                    <span>{post.readable_publish_date}</span>
                    <h2>{post.title}</h2>
                </div>
                <div className="tags">
                    <span><a href={`https://dev.to/t/${post.tags}`}>{post.tags}</a></span>
                </div>
              </a>
            </div>
          );
        }) : <h1>Loading Posts...</h1>}
        <Footer position={true}/>
      </div>
    </>
  );
};
