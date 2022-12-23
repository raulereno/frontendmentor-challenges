import React from "react";
import { projects } from "../../models/projects";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container_landing">
      <div className="landing">
        <img
          src="https://mis-retos-erv.netlify.app/src/img/banner.png"
          alt=""
          srcSet=""
        />
        <h1>Challenges</h1>
      </div>
      <div className="container_allProjects">
        <h2>All Projects</h2>
        <ul className="previewAllProjects">
          {projects.reverse().map((e, i) => {
            return (
              <Link key={i} to={`${e.difficulty}/${e.route}`}>
                <li>
                  <img srcSet={e.image} alt="Last projects" />
                  <p>{e.name}</p>
                  <p className="difficulty">Difficulty:{e.difficulty}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Landing;
