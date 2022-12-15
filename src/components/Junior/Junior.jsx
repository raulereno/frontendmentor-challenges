import React from "react";
import { projects } from "../../models/projects";
import PreviewProject from "../PreviewProject/PreviewProject";

const Junior = () => {
  const juniorProjects = projects.filter((e) =>
    e.difficulty.includes("Junior")
  );

  return (
    <div className="container_junior">
      <h2>Junior Projects</h2>
      <ul className="junior_projects">
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

export default Junior;
