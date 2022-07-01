import React from "react";
import "./Login.scss";
import { KWADLeft } from "../../Layout";
import LoginForm from "./LoginForm";
import { KWADRight } from "../../Layout";

const Login = () => {
  return (
    <div className="login">
      <div className="login--Left">
        <KWADLeft />
      </div>
      <div className="login--Sinin">
        <KWADRight
          title="Sign in"
          link="Create new account"
          url="/register"
          param={false}
        >
          <LoginForm />
        </KWADRight>
      </div>
    </div>
  );
};

export default Login;
