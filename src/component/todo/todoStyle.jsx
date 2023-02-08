import styled from "styled-components";
import SignUpStyle from "../auth/signUp/signUpStyle";

const todoStyle = {
  Wrapper: styled(SignUpStyle.Wrapper)`
    width: 20rem;
  `,
  Container: styled(SignUpStyle.Container)``,
  titleBox: styled(SignUpStyle.titleBox)``,
  title: styled(SignUpStyle.title)``,
  main: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
  `,
  todoAddBox: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: inherit;
  `,
  addInput: styled.input`
    display: block;
    width: 10rem;
    height: 2.5rem;
    padding: 1rem 0.5rem;
    border-radius: 0.4rem;
    border: 0.1rem solid;
  `,
  addBtn: styled.button`
    width: 6rem;
    height: 2.5rem;
    text-align: center;
    background-color: #01a9fe;
    border-radius: 0.4rem;
    font-weight: bold;
    color: #fff;
  `,
  listBox: styled.section`
    width: 100%;
    margin-top: 1rem;
    height: 20rem;
    overflow: scroll;
    border: 1px solid #e1e2e3;
  `,
  list: styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  listItem: styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid #e1e2e3;
  `,
  checkBox: styled.input``,
  contents: styled.p``,
  todoItemBtnBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  updateBtn: styled.button`
    margin-right: 0.5rem;
    padding: 0.8rem;
    font-weight: 900;
    background-color: #a6eda6;
    color: #fff;
    border: none;
  `,
  deleteBtn: styled.button`
    padding: 0.8rem;
    font-weight: bold;
    background-color: red;
    color: #fff;
    border: none;
  `,
  editTodoInput: styled.input``,
};

export default todoStyle;
