import React from "react";
import { projects } from "../../models/projects";
import PreviewProject from "../PreviewProject/PreviewProject";

const Intermediate = () => {
  const juniorProjects = projects.filter((e) =>
    e.difficulty.includes("Intermediate")
  );

  return (
    <div className="container_intermediate">
      <h2>Intermediate Projects</h2>
      <ul className="intermediate_projects">
        {juniorProjects.length ? (
          juniorProjects.map((e, i) => {
            return (
              <li key={i}>
                <PreviewProject project={e} />
              </li>
            );
          })
        ) : (
          <h3>I dont have projects with this difficulty yet</h3>
        )}
      </ul>
    </div>
  );
};

export default Intermediate;
