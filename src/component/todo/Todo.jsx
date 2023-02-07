/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { todoCreateApi, todoGetApi } from "../../api/authTodo";
import T from "./todoStyle";

const Todo = () => {
  const [todoContent, setTodoContent] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = async () => {
    try {
      await todoCreateApi(todoContent).then((res) => {
        setTodoList([...todoList, res.data]);
      });
    } catch (error) {
      console.dir(error);
    }
  };

  const handleTodoInput = (e) => {
    const { value } = e.target;
    setTodoContent(value);
  };

  useEffect(() => {
    const getTodoList = async () => {
      try {
        await todoGetApi().then((res) => {
          setTodoList(res.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getTodoList();
  }, []);

  return (
    <T.Wrapper>
      <T.Container>
        <T.titleBox>
          <T.title>Todo List</T.title>
        </T.titleBox>
        <T.main>
          <T.todoAddBox>
            <T.addInput
              onChange={handleTodoInput}
              type="text"
              placeholder="Todo"
              data-testid="new-todo-input"
            />
            <T.addBtn onClick={handleAddTodo} data-testid="new-todo-add-button">
              추 가
            </T.addBtn>
          </T.todoAddBox>
          <T.listBox>
            <T.list>
              {todoList.map(({ id, todo }) => (
                <T.listItem key={id}>
                  <T.checkBox type="checkbox" />
                  <T.contents>{todo}</T.contents>
                  <T.todoItemBtnBox>
                    <T.updateBtn data-testid="modify-button">수 정</T.updateBtn>
                    <T.deleteBtn data-testid="delete-button">삭 제</T.deleteBtn>
                  </T.todoItemBtnBox>
                </T.listItem>
              ))}
            </T.list>
          </T.listBox>
        </T.main>
      </T.Container>
    </T.Wrapper>
  );
};

export default Todo;

// default : 수정하기, 삭제하기
// 수정하기 버튼 클릭 : 등록하기, 삭제하기
