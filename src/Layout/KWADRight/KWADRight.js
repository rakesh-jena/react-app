import React, { useState } from "react";
import "./KWADRight.scss";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { ReactComponent as GoogleSvg } from "../../images/logos/Google.svg";
import { Link } from "react-router-dom";

const KWADRight = (props) => {
  const [customDesign, setCustomDesign] = useState(props.param);
  console.log(setCustomDesign);
  return (
    <div className="kwadRight">
      {customDesign === false ? (
        <Paper elevation={0} className="kwadRight--Paper">
          <div className="kwadRight--Paper--Header">
            <span className="pageTitle">{props.title}</span>
            <Link to={props.url} className="link">
              <Button
                className="link--Button"
                href="#text-buttons"
                color="primary"
              >
                {props.link}
              </Button>
            </Link>
          </div>
          <Divider className="kwadRight--Paper--Divider" />
          {props.children}
          <div className="kwadRight--Paper--SigninOption">
            <span>Or</span>
          </div>
          <FormControl className="kwadRight--Paper--GoogleButton">
            <Button
              className="kwadRight--Paper--GoogleButton--Button"
              variant="contained"
            >
              <GoogleSvg />
            </Button>
          </FormControl>
        </Paper>
      ) : (
        <div>{props.children}</div>
      )}
    </div>
  );
};

export default KWADRight;
