import React from "react";
import "./UserFiles.scss";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const UserFiles = (props) => {
  const [alignment, setAlignment] = React.useState("media");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(alignment);
  };

  if (props.currentChat !== null) {
    return (
      <div className="userFiles">
        <div className="userFiles--ImageDiv">
          <img
            src={props.currentChat.image}
            alt="user--prof"
            className="userFiles--ImageDiv--Image"
          />
        </div>
        <div className="userFiles--UserNameDiv">
          <span className="userFiles--UserNameDiv--Name">
            {props.currentChat.userName}
          </span>
        </div>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          className="userFiles--ToggleButtonGroup"
        >
          <ToggleButton
            value="media"
            className="userFiles--ToggleButtonGroup--ToggleButton"
          >
            Media
          </ToggleButton>
          <ToggleButton
            className="userFiles--ToggleButtonGroup--ToggleButton"
            value="files"
          >
            Files
          </ToggleButton>
          <ToggleButton
            className="userFiles--ToggleButtonGroup--ToggleButton"
            value="links"
          >
            Links
          </ToggleButton>
        </ToggleButtonGroup>
        <div className="userFiles--FilesSection">
          <div className="userFiles--FilesSection--Files"> </div>
          <div className="userFiles--FilesSection--Files"> </div>
          <div className="userFiles--FilesSection--Files"> </div>
          <div className="userFiles--FilesSection--Files"> </div>
          <div className="userFiles--FilesSection--Files"> </div>
          <div className="userFiles--FilesSection--Files"> </div>
        </div>
        <div className="userFiles--Privacy">
          <span className="userFiles--Privacy--Span">Privacy and Support</span>
          <span className="userFiles--Privacy--SpanImmediate">
            Get immediate support
          </span>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default UserFiles;
