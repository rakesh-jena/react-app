import React from "react";
import "./ConfirmPageLayout.scss";
import KWADLogo from "../../images/logos/logo_b (1).png";

const ConfirmPageLayout = (props) => {
  return (
    <div className="confirmationPageLayout">
      <div className="confirmationPageLayout--Div">
        <div className="confirmationPageLayout--Div--Left">
          <div className="confirmationPageLayout--Paper--LogoDiv">
            <img
              src={KWADLogo}
              alt="kwad-logo"
              className="confirmationPageLayout--Paper--LogoDiv--Logo"
            />
          </div>
        </div>
        <div className="confirmationPageLayout--Div--Right">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default ConfirmPageLayout;
