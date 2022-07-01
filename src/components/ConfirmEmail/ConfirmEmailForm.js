import React from "react";
import "./ConfirmEmailForm.scss";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const ConfirmEmailForm = () => {
  return (
    <div className="confirmEamilForm">
      <Paper elevation={0} className="confirmEamilForm--Form">
        <div className="confirmEamilForm--Form--Top">
          <div className="confirmEamilForm--Form--Top--TitleDiv">
            <span className="confirmEamilForm--Form--Top--TitleDiv--Title">
              Sign up
            </span>
          </div>
          <div className="confirmEamilForm--Form--Top--Confirm">
            <span className="confirmEamilForm--Form--Top--Confirm--Span">
              Confirm your Email
            </span>
          </div>
          <div className="confirmEamilForm--Form--Top--Description">
            <span className="confirmEamilForm--Form--Top--Description--Span">
              Please check your inbox for a confirmation email. Click the link
              in the email to confirm your email.
            </span>
          </div>
          <Divider className="confirmEamilForm--Form--Top--Divider" />

          <div className="confirmEamilForm--Form--Top--Resend">
            <span className="confirmEamilForm--Form--Top--Resend--Link">
              Resend Email
            </span>
          </div>
        </div>
        <div className="confirmEamilForm--Form--Bottom">
          <div className="confirmEamilForm--Form--Bottom--Signin">
            <Link to="/" className="link">
              <Button className="link--Button">Already have an account?</Button>
            </Link>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ConfirmEmailForm;
