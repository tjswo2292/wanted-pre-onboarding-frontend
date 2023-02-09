import styled from "styled-components";
import ShareStyle from "../../common/shareStyle";

const SignUpStyle = {
  Wrapper: styled.div`
    padding: 0.9375rem 0.625rem;
    width: 25rem;
    height: auto;
    border: 0.0625rem solid #e1e2e3;
    border-radius: 0.25rem;
    background-color: #fff;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  `,
  titleBox: styled.div`
    padding: 0.3125rem;
  `,
  title: styled.span`
    font-weight: bold;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.25rem;
  `,
  SignInBtn: styled(ShareStyle.submitBtn)`
    margin-top: 1rem;
  `,
};

export default SignUpStyle;
