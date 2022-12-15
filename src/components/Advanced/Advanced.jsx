import React from "react";
import { projects } from "../../models/projects";
import PreviewProject from "../PreviewProject/PreviewProject";

const Advanced = () => {
  const juniorProjects = projects.filter((e) =>
    e.difficulty.includes("Advanced")
  );

  return (
    <div className="container_advanced">
      <h2>Advanced Projects</h2>
      <ul className="advanced_projects">
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

export default Advanced;
