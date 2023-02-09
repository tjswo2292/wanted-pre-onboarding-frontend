import styled from "styled-components";

const ShareStyle = {
  input: styled.input`
    display: block;
    width: 15rem;
    height: 2rem;
    margin-bottom: 0.625rem;
    padding: 0.875rem;
    border-radius: 0.875rem;

    &:last-child {
      margin-bottom: 1.875rem;
    }

    &::placeholder {
      font-size: 0.6875rem;
    }
  `,
  submitBtn: styled.button`
    display: block;
    text-align: center;
    width: 6.25rem;
    height: 1.875rem;
    cursor: pointer;
    font-weight: bold;
    color: #01a9fe;
  `,
};

export default ShareStyle;
