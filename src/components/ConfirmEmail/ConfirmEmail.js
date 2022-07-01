import React from "react";
import "./ConfirmEmail.scss";
import ConfirmEmailForm from "./ConfirmEmailForm";
import { KWADLeft } from "../../Layout";
import { KWADRight } from "../../Layout";
import { motion } from "framer-motion";

const ConfirmEmail = () => {
  return (
    <div className="confirmEmail">
      <motion.div
        className="confirmEmail--Left"
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      >
        <KWADLeft />
      </motion.div>
      <div className="confirmEmail--Sinin">
        <KWADRight
          title="Sign in"
          link="Create new account"
          url="/register"
          param={true}
        >
          <ConfirmEmailForm />
        </KWADRight>
      </div>
    </div>
  );
};

export default ConfirmEmail;
