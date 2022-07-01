import React from "react";
import "./ForgotPassword.scss";
import { KWADLeft } from "../../Layout";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = (props) => {
  return (
    <div className="forgotPassword">
      <div className="forgotPassword--Left">
        <KWADLeft />
      </div>
      <div className="forgotPassword--Recover">
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPassword;
