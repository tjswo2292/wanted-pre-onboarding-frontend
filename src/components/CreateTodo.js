import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { publicApi } from '../api/core/axios';
import { PATH } from '../api/core/constants';
import TodoItem from './TodoItem';

const CreateTodo = () => {
  const [todo, setTodo] = useState('');
  const [createdTodo, setCreateTodo] = useState({});
  const [fetchTodo, setFetchTodo] = useState([]);

  const todoRef = useRef(null);

  const handleOnChange = () => {
    setTodo(todoRef.current.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await publicApi.POST(PATH.TODOS, { todo });
      setCreateTodo(response.data);

      return response;
    } catch (error) {
      console.log(error);
    }

    setTodo('');
  };

  useEffect(() => {
    const getTodo = async () => {
      try {
        const response = await publicApi.GET(PATH.TODOS);
        const { data } = response;

        setFetchTodo(data);
      } catch (error) {
        console.log(error);
      }
    };

    getTodo();
  }, [createdTodo]);

  return (
    <Box>
      <TodoInputForm onSubmit={handleOnSubmit}>
        <TodoInput
          ref={todoRef}
          type="text"
          onChange={handleOnChange}
          value={todo}
          placeholder="Todo 입력하세요."
        />
        <TodoCreateButton>추가</TodoCreateButton>
      </TodoInputForm>
      <TodoListBox>
        {fetchTodo.map(({ id, isCompleted, todo }) => (
          <TodoItem key={id} id={id} todo={todo} isCompleted={isCompleted} />
        ))}
      </TodoListBox>
    </Box>
  );
};

const Box = styled.div`
  min-width: 300px;
  min-height: 300px;
  max-height: 300px;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  overflow-y: scroll;
`;
const TodoInputForm = styled.form`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const TodoInput = styled.input`
  width: 200px;
  margin-right: 10px;
`;
const TodoCreateButton = styled.button`
  width: 50px;
  border: none;
  border-radius: 10px;
  background-color: #d6e1f3;
`;
const TodoListBox = styled.ol``;

export default CreateTodo;
