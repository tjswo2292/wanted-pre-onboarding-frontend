import React from "react";
import ShareStyle from "./shareStyle";

const ShareInput = ({ placeholder, type, handleValue, testId }) => {
  return (
    <ShareStyle.input
      placeholder={placeholder}
      type={type}
      onChange={(e) => handleValue(e.target.value)}
      data-testid={testId}
    />
  );
};

export default ShareInput;
