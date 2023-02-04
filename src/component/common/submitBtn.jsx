/* eslint-disable react/prop-types */
import React from "react";
import ShareStyle from "./shareStyle";

const SubmitBtn = ({ text, disabled }) => {
  return <ShareStyle.submitBtn disabled={disabled}>{text}</ShareStyle.submitBtn>;
};

export default SubmitBtn;
