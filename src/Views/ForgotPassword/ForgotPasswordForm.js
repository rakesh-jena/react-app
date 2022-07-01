import React from "react";
import "./ForgotPasswordForm.scss";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";

const ForgotPasswordForm = () => {
  let history = useHistory();
  return (
    <div className="forgotPasswordForm">
      <Paper elevation={0} className="forgotPasswordForm--Paper">
        <Button
          className="forgotPasswordForm--Paper--Back"
          onClick={() => history.goBack()}
        >
          <ArrowBackIosIcon className="forgotPasswordForm--Paper--Back--ArrorBackIcon" />
        </Button>
        <div className="forgotPasswordForm--Paper--Title">
          <span className="pageTitle">Forgot password?</span>
        </div>
        <div className="forgotPasswordForm--Paper--InstructionsDiv">
          <p className="forgotPasswordForm--Paper--Instructions">
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
          </p>
        </div>

        <Divider className="forgotPasswordForm--Paper--Divider" />
        <div className="messageBox">
          <p className="messageBox--Text">
            If this email address was used to create an account, instructions to
            reset your password will be sent to you. Please check your email.
          </p>
        </div>
        <div className="forgotPasswordForm--Paper--FormControlDiv">
          <FormControl className="forgotPasswordForm--Paper--FormControl">
            <TextField
              id="outlined-textarea"
              placeholder="Email"
              multiline
              className="form--TextField"
            />
          </FormControl>
        </div>
        <Button className="form--Button" variant="contained" color="primary">
          Send Rest Instructions
        </Button>
      </Paper>
    </div>
  );
};

export default ForgotPasswordForm;
