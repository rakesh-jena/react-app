import React from "react";
import "./ProfileBottom.scss";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { projects } from "../../data/projects";
import { Project } from "../../components/Card";

const ProfileBottom = (props) => {
  const [value, setValue] = React.useState("1");
  const [age, setAge] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="profileBottom">
      <TabContext value={value} className="profileBottom--TabContext">
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          className="profileBottom--TabContext--TabList"
          indicatorColor="none"
        >
          <Tab
            label="Projects"
            value="1"
            className={
              value === "1"
                ? "profileBottom--TabContext--TabList--Tab"
                : "profileBottom--TabContext--TabList--Tab--UnSelect"
            }
          />
          <Tab
            label="Reviews"
            value="2"
            className={
              value === "2"
                ? "profileBottom--TabContext--TabList--Tab"
                : "profileBottom--TabContext--TabList--Tab--UnSelect"
            }
          />
          <Tab
            label="Blogs"
            value="3"
            className={
              value === "3"
                ? "profileBottom--TabContext--TabList--Tab"
                : "profileBottom--TabContext--TabList--Tab--UnSelect"
            }
          />
          <Tab
            label="About"
            value="4"
            className={
              value === "4"
                ? "profileBottom--TabContext--TabList--Tab"
                : "profileBottom--TabContext--TabList--Tab--UnSelect"
            }
          />
        </TabList>
        <Divider className="profileBottom--Divider" />
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          className="profileBottom--FormControl"
        >
          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Age"
            onChange={handleChangeSelect}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TabPanel value="1">
          <div className="profileBottom--Projects">
            {projects.map((project) => (
              <div className="profileBottom--Projects--Project">
                <Project project={project} />
                <div>
                  <span className="profileBottom--Projects--Project--Title">
                    Demo Content
                  </span>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel value="2">Reviews</TabPanel>
        <TabPanel value="3">Blogs</TabPanel>
        <TabPanel value="4">About</TabPanel>
      </TabContext>
    </div>
  );
};

export default ProfileBottom;
