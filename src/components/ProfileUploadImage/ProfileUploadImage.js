import React from "react";
import "./ProfileUploadImage.scss";
import Avatar from "@material-ui/core/Avatar";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import { ImageUploadButton } from "../../resue";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const ProfileUploadImage = () => {
  return (
    <div className="profileUploadImage">
      <div className="profileUploadImage--Header">
        <span className="profileUploadImage--Header--Title">Add an avatar</span>
      </div>
      <div className="profileUploadImage--AvatarAdd">
        <Avatar
          src="/broken-image.jpg"
          className="profileUploadImage--AvatarAdd--Avatar"
        >
          <AddAPhotoOutlinedIcon />
        </Avatar>
        <div className="profileUploadImage--AvatarAdd--UploadButton">
          <ImageUploadButton />
          <div className="profileUploadImage--AvatarAdd--UploadButton--ChooseDefault">
            <ArrowForwardIosIcon className="profileUploadImage--AvatarAdd--UploadButton--ChooseDefault--Arrow" />
            <span> Or choose one of our defaults</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUploadImage;
