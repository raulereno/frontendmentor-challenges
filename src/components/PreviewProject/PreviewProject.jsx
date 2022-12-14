import React from "react";
import { Link } from "react-router-dom";

const PreviewProject = ({ project }) => {
  return (
    <Link to={`/newbie/${project.route}`}>
      <div className="container_previewProject">
        <img src={project.image} alt="" />
        <div className="info_project">
          <h4>{project.name}</h4>
          <div>
            <ul className="tecnologies">
              {project.tecnologies.map((e) => (
                <li>{e}</li>
              ))}
            </ul>
            <p>Difficulty: {project.difficulty}</p>
          </div>
          <p>{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PreviewProject;
