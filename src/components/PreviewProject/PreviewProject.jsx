import React from "react";
import { Link } from "react-router-dom";

const PreviewProject = ({ project }) => {
  const setClassDifficulty = (difficulty) => {
    switch (difficulty) {
      case "Newbie":
        return "previewNewbie";
      case "Junior":
        return "previewJunior";
      case "Intermediate":
        return "previewIntermediate";
      case "Advanced":
        return "previewAdvanced";
      case "Guru":
        return "previewGuru";
      default:
        break;
    }
  };

  const setClassTecnologie = (tecnologie) => {
    switch (tecnologie) {
      case "HTML":
        return "previewHTML";

      case "CSS":
        return "previewCSS";

      case "JS":
        return "previewJS";

      case "API":
        return "previewAPI";

      default:
        break;
    }
  };

  const setNumber = (difficulty) => {
    switch (difficulty) {
      case "Newbie":
        return "1";
      case "Junior":
        return "2";
      case "Intermediate":
        return "3";
      case "Advanced":
        return "4";
      case "Guru":
        return "5";
      default:
        break;
    }
  };

  return (
    <Link to={`/${project.difficulty}/${project.route}`}>
      <div className="container_previewProject">
        <img src={project.image} alt="" />
        <div className="info_project">
          <h4>{project.name}</h4>
          <div className={`${setClassDifficulty(project.difficulty)}`}>
            <ul className="tecnologies">
              {project.tecnologies.map((e) => (
                <li className={`${setClassTecnologie(e)}`}>{e}</li>
              ))}
            </ul>
            <p>
              {setNumber(project.difficulty)} <span>{project.difficulty}</span>
            </p>
          </div>
          <p>{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PreviewProject;
