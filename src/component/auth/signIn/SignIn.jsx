/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInApi } from "../../../api/auth";
import { emailValidation, pwValidation } from "../../../utillity/SignUpValidation";
import SignUpStyle from "../signUp/signUpStyle";
import ShareInput from "../../common/shareInput";
import SubmitBtn from "../../common/submitBtn";

const Login = () => {
  const navigate = useNavigate();
  const [isUserInfo, setIsUserInfo] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    emailValidation(userInfo.email) && pwValidation(userInfo.password)
      ? setIsUserInfo(true)
      : setIsUserInfo(false);
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInApi(userInfo.email, userInfo.password).then(() => {
        navigate("/todo");
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSignUpNavi = () => {
    navigate("/signup");
  };

  const handleEmail = (emailData) => {
    setUserInfo({ ...userInfo, email: emailData });
  };

  const handlePw = (pwData) => {
    setUserInfo({ ...userInfo, password: pwData });
  };

  return (
    <SignUpStyle.Wrapper>
      <SignUpStyle.Container>
        <SignUpStyle.titleBox>
          <SignUpStyle.title>Sign In</SignUpStyle.title>
        </SignUpStyle.titleBox>
        <SignUpStyle.Form onSubmit={handleSubmit}>
          <ShareInput
            handleValue={handleEmail}
            placeholder="이메일을 입력해 주세요"
            type="email"
            testId="email-input"
          />
          <ShareInput
            handleValue={handlePw}
            placeholder="비밀번호를 입력해 주세요"
            type="password"
            testId="password-input"
          />
          <SubmitBtn text="로그인" testId="signin-button" />
        </SignUpStyle.Form>
        <SignUpStyle.SignInBtn onClick={handleSignUpNavi}>회원가입</SignUpStyle.SignInBtn>
      </SignUpStyle.Container>
    </SignUpStyle.Wrapper>
  );
};

export default Login;
