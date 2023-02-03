/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import ShareStyle from "./shareStyle";

const SubmitBtn = ({ text, disabled, route }) => {
  //   const navigate = useNavigate();

  //   const handleNavigate = (route) => {
  //     navigate(route);
  //   };

  return <ShareStyle.submitBtn disabled={disabled}>{text}</ShareStyle.submitBtn>;
};
// onClick={() => handleNavigate(route)}
export default SubmitBtn;
