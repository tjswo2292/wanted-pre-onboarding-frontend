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
  const [isUserInfo, setIsUserInfo] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/todo");
    }
  }, []);

  useEffect(() => {
    emailValidation(userInfo.email) && pwValidation(userInfo.password)
      ? setIsUserInfo(true)
      : setIsUserInfo(false);
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpApi(userInfo.email, userInfo.password).then(() => {
        alert("회원가입 성공");
        navigate("/");
      });
    } catch (error) {
      alert(error.response.data.message);
    }
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
          <SubmitBtn text="회원가입" disabled={!isUserInfo} />
        </SignUpStyle.Form>
      </SignUpStyle.Container>
    </SignUpStyle.Wrapper>
  );
};

export default SignUp;
