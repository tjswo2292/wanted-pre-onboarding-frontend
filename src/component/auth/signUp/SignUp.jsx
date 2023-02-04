/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShareInput from "../../common/shareInput";
import SubmitBtn from "../../common/submitBtn";
import SignUpStyle from "./signUpStyle";

import { emailValidation } from "../../../utillity/SignUpValidation";
import { pwValidation } from "../../../utillity/SignUpValidation";
import { signUpApi } from "../../../api/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (emailData) => {
    setUserInfo({ ...userInfo, email: emailData });
  };

  const handlePw = (pwData) => {
    setUserInfo({ ...userInfo, password: pwData });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpApi(userInfo.email, userInfo.password).then(() => {
        alert("회원가입 성공");
        navigate("/signin");
      });
    } catch (error) {
      alert("회원가입 실패!!");
      console.log(error);
    }
  };

  useEffect(() => {
    emailValidation(userInfo.email) && setIsEmail(true);
  }, [userInfo]);

  useEffect(() => {
    pwValidation(userInfo.password) && setIsPassword(true);
  }, [userInfo]);

  return (
    <SignUpStyle.Wrapper>
      <SignUpStyle.Container>
        <SignUpStyle.titleBox>
          <SignUpStyle.title>Sign Up</SignUpStyle.title>
        </SignUpStyle.titleBox>
        <SignUpStyle.Form onSubmit={handleSubmit}>
          <ShareInput
            placeholder="이메일을 입력해 주세요"
            type="text"
            handleValue={handleEmail}
            testId="email-input"
          />
          <ShareInput
            placeholder="비밀번호를 입력해 주세요"
            type="password"
            handleValue={handlePw}
            testId="password-input"
          />
          <SubmitBtn text="회원가입" disabled={!(isEmail && isPassword)} />
        </SignUpStyle.Form>
      </SignUpStyle.Container>
    </SignUpStyle.Wrapper>
  );
};

export default SignUp;
