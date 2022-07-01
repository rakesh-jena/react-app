import React from "react";
import "./OptionsHire.scss";

const OptionsHire = (props) => {
  return (
    <div>
      <div className="optionsHire--PageTitle">
        <span className="optionsHire--PageTitle--Title">
          Who are you looking to hire?
        </span>
      </div>
      <div className="optionsHire--PageDescription">
        <p className="optionsHire--PageDescription--Description">
          You can now hire from the best people in the world
        </p>
      </div>
      <div className="optionsHire--RowOne">
        <div className="optionsHire--Option">
          <span className="optionsHire--Option--Span">Consultant</span>
        </div>
        <div className="optionsHire--Option">
          <span className="optionsHire--Option--Span">Psychologist</span>
        </div>
      </div>
      <div className="optionsHire--RowOne">
        <div className="optionsHire--Option">
          <span className="optionsHire--Option--Span">Lawyer</span>
        </div>
        <div className="optionsHire--Option">
          <span className="optionsHire--Option--Span">Mentor</span>
        </div>
      </div>
    </div>
  );
};

export default OptionsHire;
