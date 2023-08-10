/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { styled } from 'styled-components';
import { publicApi } from '../api/core/axios';
import { PATH } from '../api/core/constants';

const TodoItem = ({ id, todo, isCompleted, handleDelete }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [updateData, setUpdateData] = useState(todo);

  const inputRef = useRef(null);
  const checkBoxRef = useRef(null);

  const handleUpdate = () => {
    setIsUpdate((prev) => !prev);
  };

  const handleChecked = async () => {
    try {
      const response = await publicApi.PUT(`${PATH.TODOS}/${id}`, {
        todo: updateData,
        isCompleted: checkBoxRef.current.checked,
      });
    } catch (error) {
      console.log(error);
    }

    setIsChecked((prev) => !prev);
  };

  const handleUpdateTodo = () => {
    setUpdateData(inputRef.current.value);
  };

  const handleUpdateSubmit = async () => {
    try {
      const response = await publicApi.PUT(`${PATH.TODOS}/${id}`, {
        todo: updateData,
        isCompleted: isChecked,
      });
    } catch (error) {
      console.log(error);
    }

    setIsUpdate((prev) => !prev);
  };

  return (
    <Todo>
      <TodoCheck
        ref={checkBoxRef}
        onChange={handleChecked}
        type="checkbox"
        checked={isChecked}
      />
      {isUpdate ? (
        <TodoInput
          onChange={handleUpdateTodo}
          ref={inputRef}
          type="text"
          value={updateData}
        />
      ) : (
        <TodoTitle>
          <TodoContents>{updateData}</TodoContents>
        </TodoTitle>
      )}
      <TodoButtonBox>
        {isUpdate ? (
          <TodoUpdateSubmit onClick={handleUpdateSubmit}>제출</TodoUpdateSubmit>
        ) : (
          <TodoUpdate onClick={handleUpdate}>수 정</TodoUpdate>
        )}
        <TodoDelete onClick={() => handleDelete(id)}>삭 제</TodoDelete>
      </TodoButtonBox>
    </Todo>
  );
};

const Todo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 30px;
  margin-bottom: 5px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px;
`;
const TodoCheck = styled.input``;
const TodoInput = styled.input`
  width: 150px;
  height: 20px;
  font-size: 16px;
  border: 1px solid;
`;
const TodoTitle = styled.div`
  width: 150px;
  height: 20px;
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const TodoContents = styled.span`
  display: inline-block;
  width: inherit;
  height: inherit;
  font-size: 16px;
`;
const TodoButtonBox = styled.div``;
const TodoDelete = styled.button`
  width: 50px;
  border: none;
  border-radius: 10px;
  background-color: #d6e1f3;
`;
const TodoUpdate = styled(TodoDelete)``;
const TodoUpdateSubmit = styled(TodoDelete)``;

export default TodoItem;
