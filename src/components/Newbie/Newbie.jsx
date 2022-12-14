import React from "react";
import { projects } from "../../models/projects";
import PreviewProject from "../PreviewProject/PreviewProject";

const Newbie = () => {
  return (
    <div className="container_newbie">
      <h2>Newbie</h2>
      <ul>
        {projects
          .filter((e) => e.difficulty.includes("Newbie"))
          .map((e, i) => {
            return (
              <li key={i}>
                <PreviewProject project={e} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Newbie;
