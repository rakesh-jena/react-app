import React from "react";
import "./Register.scss";
import { KWADLeft } from "../../Layout";
import { KWADRight } from "../../Layout";
import RegisterForm from "./RegisterForm";

const Register = (props) => {
  return (
    <div className="register">
      <div className="register--Left">
        <KWADLeft />
      </div>
      <div className="register--SignIn">
        <KWADRight
          title="Sign up"
          link="Already have an account?"
          url="/"
          redirect="/confirmpassword"
          buttonName="Sign up"
          param={false}
        >
          <RegisterForm />
        </KWADRight>
      </div>
    </div>
  );
};

export default Register;
