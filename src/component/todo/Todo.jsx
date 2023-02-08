/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useNavigate } from "react-router-dom";
import { todoCreateApi, todoGetApi, todoUpdateApi, todoDeleteApi } from "../../api/authTodo";
import T from "./todoStyle";

const Todo = () => {
  const navigate = useNavigate();
  const [todoContent, setTodoContent] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }
  }, []);

  useEffect(() => {
    getTodoList();
  }, []);

  const handleCreateTodo = async () => {
    try {
      await todoCreateApi(todoContent).then((res) => {
        getTodoList();
      });
    } catch (error) {
      console.dir(error);
    }
  };

  const getTodoList = async () => {
    try {
      await todoGetApi().then((res) => {
        setTodoList(res.data);
      });
    } catch (err) {
      console.log(`todoList 가져오기 Err : ${err}`);
    }
  };

  const handleChecked = async (isComplete, id, todo) => {
    try {
      await todoUpdateApi(isComplete, id, todo).then((res) => {
        getTodoList();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await todoDeleteApi(id).then(() => {
        getTodoList();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleTodoInput = (e) => {
    setTodoContent(e.target.value);
  };

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
            <T.addBtn onClick={handleCreateTodo} data-testid="new-todo-add-button">
              추 가
            </T.addBtn>
          </T.todoAddBox>
          <T.listBox>
            <T.list>
              {todoList.map(({ id, todo, isCompleted }) => (
                <T.listItem key={id}>
                  <T.checkBox
                    onChange={(e) => handleChecked(e.target.checked, id, todo)}
                    type="checkbox"
                    checked={isCompleted}
                  />
                  <T.contents>{isCompleted ? <s>{todo}</s> : todo}</T.contents>
                  <T.todoItemBtnBox>
                    <T.updateBtn data-testid="modify-button">수 정</T.updateBtn>
                    <T.deleteBtn onClick={() => handleDeleteTodo(id)} data-testid="delete-button">
                      삭 제
                    </T.deleteBtn>
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
