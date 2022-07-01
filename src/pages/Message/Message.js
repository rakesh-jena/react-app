import React, { useState, useContext } from "react";
import "./Message.scss";
import ChatList from "./ChatList";
import MainChat from "./MainChat";
import UserFiles from "./UserFiles";
import Divider from "@mui/material/Divider";
import userMessages from "../../data/userMessages";
import { OpenStatus } from "../../MainLayout/DashboardLayout/DashboardLayout";

const Message = () => {
  console.log(userMessages);
  const state = useContext(OpenStatus);
  const [currentChat, setCurrentChat] = useState(userMessages[0]);

  const handleChat = (obj) => {
    setCurrentChat(obj);
  };

  return (
    <div className={state ? "message--NavClose" : "message--NavOpen"}>
      {state ? <></> : <Divider className="divider" />}
      <div className="message">
        <ChatList userMessages={userMessages} handleChat={handleChat} />
        <Divider orientation="vertical" variant="middle" flexItem />
        <MainChat currentChat={currentChat} />
        <Divider orientation="vertical" variant="middle" flexItem />
        <UserFiles currentChat={currentChat} />
      </div>
    </div>
  );
};

export default Message;
