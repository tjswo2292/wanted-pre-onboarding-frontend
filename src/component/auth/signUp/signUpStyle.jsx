import styled from "styled-components";

const SignUpStyle = {
  Wrapper: styled.div`
    padding: 0.9375rem 0.625rem;
    width: 25rem;
    height: auto;
    border: 1px solid #e1e2e3;
    border-radius: 4px;
  `,
  Container: styled.div`
    height: auto;
  `,
  titleBox: styled.div`
    text-align: center;
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
};

export default SignUpStyle;
