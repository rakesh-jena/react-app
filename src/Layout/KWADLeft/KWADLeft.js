import React from "react";
import "./KWADLeft.scss";
import Paper from "@material-ui/core/Paper";
import KWADLogo from "../../images/logos/logo_b (1).png";
import { useLocation } from "react-router-dom";

const KWADLeft = (props) => {
  // const [changeBackground, setChangeBackground] = useState(props.param);
  const location = useLocation();

  if (location.pathname === "/confirmemail") {
    console.log("confirmemail");
  }

  return (
    <div className="kwadLeft">
      <Paper elevation={0} className="kwadLeft--Paper">
        <div className="kwadLeft--Paper--LogoDiv">
          <img
            src={KWADLogo}
            alt="kwad-logo"
            className="kwadLeft--Paper--LogoDiv--Logo"
          />
        </div>
      </Paper>
    </div>
  );
};

export default KWADLeft;
