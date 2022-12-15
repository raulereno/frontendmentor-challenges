import React from "react";
import { projects } from "../../models/projects";
import PreviewProject from "../PreviewProject/PreviewProject";

const Guru = () => {
  const juniorProjects = projects.filter((e) => e.difficulty.includes("Guru"));

  return (
    <div className="container_guru">
      <h2>Guru Projects</h2>
      <ul className="guru_projects">
        {juniorProjects.length ? (
          juniorProjects.map((e, i) => {
            return (
              <li key={i}>
                <PreviewProject project={e} />
              </li>
            );
          })
        ) : (
          <h3>
            I dont have projects with this difficulty yet, this are really
            difficult to do 😥
          </h3>
        )}
      </ul>
    </div>
  );
};

export default Guru;
