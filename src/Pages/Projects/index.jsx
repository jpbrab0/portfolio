import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from '../../Components/Footer'
import "./styles.css";
import { Link } from 'react-router-dom'
const Projects = () => {
  const [repo, setRepo] = useState([]);
  const [repoLoaded, setRepoLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=jpbrab0")
      .then((res) => {
        setRepo(res.data);
      });
  }, []);
  setTimeout(() => {
    setRepoLoaded(true);
  }, 1500);
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <header className="projects_header">
        <div>
          <Link to="/">
            <i className="material-icons">arrow_back</i>
          </Link>
          <h1>Projects</h1>
        </div>
      </header>
      <main>
        <div className="projects">
          {repoLoaded ? (
            repo.map((data) => {
              return (
                <div className="project" key={data.repo}>
                  <header className="headerProject">
                    <a
                      className="projects"
                      href={`https://github.com/jpbrab0/${data.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="Logo github"
                      />
                    </a>
                  </header>
                  <div className="description">
                    <h2>jpbrab0/{data.repo}</h2>
                    <div className="repo__status">
                      <img src="https://www.prositesbrasil.com.br/wp-content/uploads/2019/07/star.png" />
                      <p>{data.stars}</p>
                    </div>
                    <p>{data.description}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="loading__container">
              <h1>Loading Projects...</h1>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
export default Projects;
