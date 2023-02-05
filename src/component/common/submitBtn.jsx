/* eslint-disable react/prop-types */
import React from "react";
import ShareStyle from "./shareStyle";

const SubmitBtn = ({ text, disabled, testId }) => {
  return (
    <ShareStyle.submitBtn disabled={disabled} data-testid={testId}>
      {text}
    </ShareStyle.submitBtn>
  );
};

export default SubmitBtn;
