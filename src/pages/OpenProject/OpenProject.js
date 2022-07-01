import React, { useContext } from "react";
import "./OpenProject.scss";
import UserProfile from "./UserProfile";
import { userProf } from "../../data/userProf";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import UserWork from "./UserWork";
import { OpenStatus } from "../../MainLayout/DashboardLayout/DashboardLayout";

const OpenProject = (props) => {
  const state = useContext(OpenStatus);
  return (
    <div className={state ? "openProject--NavClose" : "openProject--NavOpen"}>
      <div>
        <UserProfile userProfileData={userProf} />
      </div>
      <div className="openProject--Summary">
        <div className="openProject--Summary--TitleDiv">
          <span className="openProject--Summary--TitleDiv--Title">
            Locally sourced grocer
          </span>
        </div>
        <div>
          <p className="openProject--Summary--About">
            Branding system for Grassroots Larder; A locally sourced grocer and
            a culinary market opening up soon on Cherry Street in Tulsa,
            Oklahoma. Grassroots Larder will be packed with a selection of items
            they deem essential: wine, beer, fresh bread, fresh pasta, sauces
            and special pantry items. Included in the essentials are Grassroots
            Ranch products and also products from their already existing
            partnered farms.
          </p>
          <p className="openProject--Summary--About">
            Branding system for Grassroots Larder; A locally sourced grocer and
            a culinary market opening up soon on Cherry Street in Tulsa,
            Oklahoma. Grassroots Larder will be packed with a selection of items
            they deem essential: wine, beer, fresh bread, fresh pasta, sauces
            and special pantry items. Included in the essentials are Grassroots
            Ranch products and also products from their already existing
            partnered farms.
          </p>
          <div className="openProject--Summary--Divider">
            <Divider>
              <span className="openProject--Summary--Mid">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56 }}
                  className="openProject--Summary--Mid--Avatar"
                />
              </span>
            </Divider>
          </div>
          <div className="openProject--Summary--MidName">
            <span className="openProject--Summary--MidName--Name">
              {userProf.name}
            </span>
          </div>
        </div>
      </div>
      <UserWork />
    </div>
  );
};

export default OpenProject;
