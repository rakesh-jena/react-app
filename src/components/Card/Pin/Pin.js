import React, { useContext } from "react";
import "./Pin.scss";
import { BasicRating } from "../../../resue";
import { OpenStatus } from "../../../MainLayout/DashboardLayout/DashboardLayout";
import Button from "@mui/material/Button";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Pin = (props) => {
  const state = useContext(OpenStatus);
  return (
    <div className="pin">
      <div className="pin--Wrapper">
        <div className="pin--Container">
          <img
            src={props.url}
            alt="image1"
            className={state ? "openImage" : "closeImage"}
          />

          <div className="pin--Container--Desc">
            <div className="pin--Container--Desc--Buttons">
              <Button
                size="small"
                variant="contained"
                startIcon={<IosShareIcon />}
                className="pin--Container--Card--Button--Share"
              />
              <Button
                variant="contained"
                size="small"
                className="pin--Container--Card--Button--Save"
              >
                Save
              </Button>
            </div>
            <div className="pin--Container--Desc--Bottom">
              <p className="pin--Container--Desc--Title">
                Pinnipeds, commonly known as seals diverse....
              </p>
              <div className="pin--Container--Desc--Bottom--Like">
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<FavoriteBorderIcon />}
                  className="pin--Container--Card--Button--Like"
                >
                  13.4k
                </Button>
              </div>
            </div>
          </div>
          <div className="pin--Content">
            <span className="pin--Content--Title">Title</span>
            <div className="pin--Content--Rating">
              <BasicRating />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pin;
