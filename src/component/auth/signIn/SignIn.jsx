import React from "react";
import SignUpStyle from "../signUp/signUpStyle";
import ShareInput from "../../common/ShareInput";
import SubmitBtn from "../../common/SubmitBtn";

const Login = () => {
  return (
    <SignUpStyle.Wrapper>
      <SignUpStyle.Container>
        <SignUpStyle.titleBox>
          <SignUpStyle.title>Log In</SignUpStyle.title>
        </SignUpStyle.titleBox>
        <SignUpStyle.Form>
          <ShareInput placeholder="이메일을 입력해 주세요" type="text" />
          <ShareInput placeholder="비밀번호를 입력해 주세요" type="password" />
          <SubmitBtn text="로그인" testId="signin-button" />
        </SignUpStyle.Form>
      </SignUpStyle.Container>
    </SignUpStyle.Wrapper>
  );
};

export default Login;
