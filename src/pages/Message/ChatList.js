import React from "react";
import "./ChatList.scss";
import { UserMessage } from "../../components/Card";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@material-ui/core/TextField";

const ChatList = (props) => {
  const { userMessages } = props;

  if (userMessages !== undefined) {
    return (
      <div className="chatList">
        <div className="chatList--Header">
          <span className="chatList--Header--Chats">Chats</span>
          <div className="chatList--Header--Right">
            <SearchIcon className="chatList--Header--Right--Icon" />
            <AddIcon className="chatList--Header--Right--Icon" />
          </div>
        </div>
        <TextField
          InputProps={{
            startAdornment: (
              <SearchIcon className="chatList--Header--Right--Icon searchIcon" />
            ),
          }}
          id="outlined-textarea"
          placeholder="Search messages"
          multiline
          name="username"
          className="form--TextField textFieldSize--Chat"
          //onChange={(e) => handleInputChange(e)}
        />
        {userMessages.map((userMessage) => (
          <div key={userMessage.id}>
            <UserMessage
              userMessage={userMessage}
              handleChat={props.handleChat}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return <></>;
  }
};

export default ChatList;
