import React from "react";
import "./MainChat.scss";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import InsertEmoticonRoundedIcon from "@mui/icons-material/InsertEmoticonRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import TextField from "@material-ui/core/TextField";

const MainChat = (props) => {
  if (props.currentChat !== null) {
    return (
      <div className="mainChat">
        <div className="mainChat--Header">
          <div className="mainChat--Header--ImageDiv">
            <img
              src={props.currentChat.image}
              alt="user--prof"
              className="mainChat--Header--ImageDiv--Image"
            />
          </div>
          <span className="mainChat--Header--Name">
            {props.currentChat.userName}
          </span>
          <div className="mainChat--Header--Left">
            <CallIcon className="mainChat--Header--Left--Icon call" />
            <VideocamIcon className="mainChat--Header--Left--Icon video" />
          </div>
        </div>
        <div className="mainChat--Bottom">
          <AddCircleOutlinedIcon className="mainChat--Header--Left--Icon add" />
          <div className="mainChat--Bottom--TextField ">
            <TextField
              id="outlined-textarea"
              placeholder="Write a message..."
              multiline
              name="username"
              className="form--TextField textFieldSize"
              //onChange={(e) => handleInputChange(e)}
              InputProps={{
                endAdornment: (
                  <InsertEmoticonRoundedIcon className="mainChat--Header--Left--Icon" />
                ),
              }}
            />
          </div>
          <SendRoundedIcon className="mainChat--Header--Left--Icon send" />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default MainChat;
