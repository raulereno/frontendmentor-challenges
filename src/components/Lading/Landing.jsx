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
      <div className="container_lastProjects">
        <h2>Last Projects</h2>
        <ul className="previewLastProjects">
          {projects
            .slice(projects.length - 3)
            .reverse()
            .map((e, i) => {
              return (
                <Link key={i} to={`${e.difficulty}/${e.route}`}>
                  <li>
                    <img srcSet={e.image} alt="Last projects" />
                    <p>{e.name}</p>
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
