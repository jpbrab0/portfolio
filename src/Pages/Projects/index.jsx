import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";

const Projects = () => {
  const [repo, setRepo] = useState([]);
  useEffect(
    () => {
      axios
        .get("https://gh-pinned-repos.now.sh/?username=jpbrab0")
        .then((res) => {
          setRepo(res.data);
        })
    },
    [],
  );
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <header className="projects_header">
        <div>
          <a href="javascript:history.back()">
            <i className="material-icons">arrow_back</i>
          </a>
          <h1>Projects</h1>
        </div>
      </header>
      <main>
        <div className="projects">
          {repo.map((data) => {
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
                    <h2>{data.repo}</h2>
                    <p>{data.description}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </main>
    </>
  );
};
export default Projects;
