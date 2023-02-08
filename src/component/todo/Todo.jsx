import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useNavigate } from "react-router-dom";
import { todoCreateApi, todoGetApi } from "../../api/authTodo";
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
      await todoCreateApi(todoContent).then(() => {
        getTodoList();
      });
    } catch (error) {
      console.log(error);
    }
    setTodoContent("");
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
              value={todoContent}
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
                <TodoItem
                  key={id}
                  id={id}
                  todo={todo}
                  isCompleted={isCompleted}
                  getTodoList={getTodoList}
                />
              ))}
            </T.list>
          </T.listBox>
        </T.main>
      </T.Container>
    </T.Wrapper>
  );
};

export default Todo;
