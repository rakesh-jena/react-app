import React from "react";
import "./UserWork.scss";
import { work } from "../../data/work";
import { Work } from "../../components/Card";

const UserWork = (props) => {
  return (
    <div className="userWork">
      <div className="userWork--Top">
        <span className="userWork--Top--Title">
          Explore the work of Trevor Williom
        </span>
        <span className="userWork--ViewProf"> View Profile </span>
      </div>
      <div className="userWork--Work">
        {work.map((work) => (
          <Work work={work} />
        ))}
      </div>
    </div>
  );
};

export default UserWork;
