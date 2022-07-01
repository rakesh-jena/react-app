import React from "react";
import "./PostSignUp.scss";
import KWADLogo from "../../images/logos/logo_b (1).png";
import UserProfile from "../UserProfile/UserProfile";
import DescribeUser from "../DescribeUser/DescribeUser";
import Button from "@material-ui/core/Button";
import OptionsHire from "../OptionsHire/OtionsHire";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const PostSignUp = () => {
  const [count, setCount] = React.useState(0);

  const components = [<UserProfile />, <DescribeUser />, <OptionsHire />];

  return (
    <div className="postSignUp">
      <div className="postSignUp--LogoDiv">
        <img
          src={KWADLogo}
          alt="kwad-logo"
          className="postSignUp--LogoDiv--Logo"
        />
      </div>
      <div className="postSignUp--FormComponent">
        {components[count]}
        <div className="postSignUp--FormComponent--Navigation">
          {count > 0 ? (
            <Button
              className="postSignUp--FormComponent--Back"
              onClick={() => setCount(count - 1)}
            >
              <ArrowBackIosIcon className="postSignUp--FormComponent--Back--ArrowBackIcon" />
            </Button>
          ) : (
            <></>
          )}

          {count < components.length - 1 ? (
            <Button
              className="postSignUp--FormComponent--Forward"
              onClick={() => setCount(count + 1)}
            >
              <ArrowForwardIosIcon className="postSignUp--FormComponent--Front--ArrowForwardIcon" />
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostSignUp;
