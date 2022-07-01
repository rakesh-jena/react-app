import React, { useState } from "react";
import "./LoginForm.scss";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { CustomPasswordField } from "../../resue";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });

  // console.log("auth", localStorage.getItem("isAuthenticated"));

  console.log(userData.username);
  console.log(userData.password);

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if username or password field is empty, return error message
    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    } else if (
      userData.username === "admin" &&
      userData.password === "123456"
    ) {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/dashboard";
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({
        value:
          "We couldn’t find an account matching the username and password you entered. Please check your username and password and try again.",
      }));
    }
  };

  const getPassword = (password) => {
    console.log(password);
    setUserData((prevState) => {
      return {
        ...prevState,
        password: password,
      };
    });
  };
  return (
    <div className="loginForm">
      {errorMessage.value && (
        <div className="messageBox">
          <p className="messageBox--Text">{errorMessage.value}</p>
        </div>
      )}
      <FormControl className="loginForm--Paper--FormControl">
        <TextField
          id="outlined-textarea"
          placeholder="Email"
          multiline
          name="username"
          className="form--TextField"
          onChange={(e) => handleInputChange(e)}
        />
      </FormControl>
      <div className="loginForm--Paper--Password">
        <CustomPasswordField getPasword={getPassword} />
      </div>
      <div className="loginForm--Paper--ForgotPassword">
        <Link to="/forgotpassword" className="link">
          <Button className="link--Button">Forgot password</Button>
        </Link>
      </div>
      <Button
        className="form--Button"
        onClick={handleSubmit}
        variant="contained"
        color="primary"
      >
        Sign in
      </Button>
    </div>
  );
};

export default LoginForm;
