import React, { useState } from "react";
import { todoUpdateApi, todoDeleteApi } from "../../api/authTodo";
import T from "./todoStyle";

const TodoItem = ({ id, todo, isCompleted, getTodoList }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState("");

  const handleUpdateTodo = async (isCompleted, id, editContent) => {
    setIsEdit((prev) => !prev);

    if (editContent !== "") {
      try {
        await todoUpdateApi(isCompleted, id, editContent).then(() => {
          getTodoList();
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleChecked = async (isCompleted, id, todo) => {
    try {
      await todoUpdateApi(isCompleted, id, todo).then((res) => {
        getTodoList();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditContent = (e) => {
    setEditContent(e.target.value);
  };

  const handleDeleteTodo = async () => {
    try {
      await todoDeleteApi(id).then(() => {
        getTodoList();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <T.listItem>
      <T.checkBox
        onChange={(e) => handleChecked(e.target.checked, id, todo)}
        type="checkbox"
        checked={isCompleted}
      />
      {isEdit ? (
        <T.editTodoInput onChange={handleEditContent} defaultValue={todo} />
      ) : (
        <T.contents>{isCompleted ? <s>{todo}</s> : todo}</T.contents>
      )}
      {isEdit ? (
        <T.todoItemBtnBox>
          <T.updateBtn
            onClick={() => handleUpdateTodo(isCompleted, id, editContent)}
            data-testid="submit-button"
          >
            제 출
          </T.updateBtn>
          <T.deleteBtn onClick={handleEdit} data-testid="cancel-button">
            취 소
          </T.deleteBtn>
        </T.todoItemBtnBox>
      ) : (
        <T.todoItemBtnBox>
          <T.updateBtn onClick={handleEdit} data-testid="modify-input">
            수 정
          </T.updateBtn>
          <T.deleteBtn onClick={handleDeleteTodo}>삭 제</T.deleteBtn>
        </T.todoItemBtnBox>
      )}
    </T.listItem>
  );
};

export default TodoItem;
