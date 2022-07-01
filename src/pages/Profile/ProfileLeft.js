import React from "react";
import "./ProfileLeft.scss";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Avatar from "@mui/material/Avatar";
import userProfilePic from "../../images/userPic.png";

const ProfileLeft = (props) => {
  const { userProfileData } = props;
  return (
    <div className="profileLeft">
      <div className="profileLeft--ImageDiv">
        <img
          src={userProfilePic}
          alt="user-prof"
          className="profileLeft--ImageDiv--Image"
        />
      </div>
      <div className="profileLeft--ConnectUser">
        <Button
          variant="outlined"
          size="medium"
          className="profileLeft--ConnectUser--Connect"
        >
          Connect
        </Button>
        <Avatar
          sx={{ bgcolor: "#023246" }}
          className="profileLeft--ConnectUser--Message"
        >
          <ChatBubbleIcon />
        </Avatar>
        <Button
          variant="outlined"
          startIcon={<PersonIcon />}
          className="profileLeft--ConnectUser--Follow"
        >
          Follow
        </Button>
      </div>
      <div className="profileLeft--UserCost">
        <span>
          <span className="profileLeft--UserCost--Price">
            <span>&#8377;</span> {userProfileData.price}
          </span>
          <span className="profileLeft--UserCost--Text">Per Second </span>
        </span>
      </div>
    </div>
  );
};

export default ProfileLeft;
