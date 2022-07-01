import React from "react";
import "./DescribeUser.scss";

const DescribeUser = (props) => {
  return (
    <div className="describeUser">
      <div className="describeUser--PageTitle">
        <span className="describeUser--PageTitle--Title">
          What are you looking for?
        </span>
      </div>
      <div className="describeUser--PageDescription">
        <p className="describeUser--PageDescription--Description">
          Select the options that best describe you.
        </p>
        <p className="describeUser--PageDescription--Description">
          Don’t worry, you can explore other options later.
        </p>
      </div>
      <div className="describeUser--SelectOption">
        <div className="describeUser--SelectOption--Option">
          <span className="describeUser--SelectOption--Option--Type">
            I'm looking to share my work
          </span>
        </div>
        <div className="describeUser--SelectOption--Option">
          <span className="describeUser--SelectOption--Option--Type">
            I'm looking to hire
          </span>
        </div>
        <div className="describeUser--SelectOption--Option">
          <span className="describeUser--SelectOption--Option--Type">
            I'm looking to explore
          </span>
        </div>
      </div>
    </div>
  );
};

export default DescribeUser;
