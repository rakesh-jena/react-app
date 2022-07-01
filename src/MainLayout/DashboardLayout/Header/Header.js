import React, { useState } from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import filterIcon from "../../../images/icons/filter.png";
import SideNavBar from "../../../Layout/SideNavBar";
import KWADLogo from "../../../images/logos/logo_blue.png";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#e6e7e4",
    "&:focus": {
      border: "1px solid red",
    },
  },
  inputInput: {
    padding: theme.spacing(1.5, 1.5, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100ch",
    },
    color: "#e6e7e4",
  },
}));

const Header = (props) => {
  console.log(props.displayIcons);
  const classes = useStyles();
  const location = useLocation();
  const [input, setInput] = useState("");
  console.log(input);

  return (
    <div className="dashboardMain--Header">
      {props.displayIcons ? (
        <div className="dashboardMain--Header--LogoDiv">
          <img
            src={KWADLogo}
            alt="kwad-logo"
            className="dashboardMain--Header--LogoDiv--Logo"
          />
        </div>
      ) : (
        <></>
      )}
      {location.pathname === "/dashboard" ? (
        <div
          className={
            props.displayIcons
              ? "dashboardMain--Header--Search--NavClose"
              : "dashboardMain--Header--Search--NavOpen"
          }
        >
          <div className={classes.searchIcon}>
            <SearchIcon className="dashboardMain--Header--SearchIcon" />
          </div>
          <InputBase
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onClick={() => {
              console.log("Hello");
            }}
          />
        </div>
      ) : (
        <></>
      )}

      {props.displayIcons ? <SideNavBar displayIcons={true} /> : <></>}
      {props.displayIcons || location.pathname === "/dashboard" ? (
        <div className="dashboardMain--Header--FilterDiv">
          <img
            src={filterIcon}
            alt="filter--icon"
            className="dashboardMain--Header--FilterDiv--Icon"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
