/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { authApi } from '../api/core/axios';
import { accessTokenManage } from '../util/storage';
import { useLocation, useNavigate } from 'react-router-dom';

const UserForm = ({ apiPath, title }) => {
  const [inputValid, setInputValid] = useState({
    email: false,
    password: false,
  });
  const [ableSubmit, setAbleSubmit] = useState(true);
  const [userInfoValue, setUserInfoValue] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const emailRegExp = new RegExp(/@/);
  const passwordRegExp = new RegExp(/.{8}/);

  const checkEmail = () => {
    if (emailRegExp.test(emailRef.current.value)) {
      setInputValid((prev) => {
        return {
          ...prev,
          email: true,
        };
      });
    } else {
      setInputValid((prev) => {
        return {
          ...prev,
          email: false,
        };
      });
    }

    setUserInfoValue((prev) => {
      return {
        ...prev,
        email: emailRef.current.value,
      };
    });
  };

  const checkPassword = () => {
    if (passwordRegExp.test(passwordRef.current.value)) {
      setInputValid((prev) => {
        return {
          ...prev,
          password: true,
        };
      });
    } else {
      setInputValid((prev) => {
        return {
          ...prev,
          password: false,
        };
      });
    }

    setUserInfoValue((prev) => {
      return {
        ...prev,
        password: passwordRef.current.value,
      };
    });
  };

  const movePage = (pathName) => {
    if (location.pathname === '/signin') {
      navigate('/todo');
    } else if (location.pathname === '/signup') {
      navigate('/signin');
    }
  };

  const saveToken = (token) => {
    accessTokenManage.SET_TOKEN(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authApi.POST(apiPath, userInfoValue);
      const { access_token } = response.data;

      location.pathname === '/signin' && saveToken(access_token);

      movePage(location.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (inputValid.email && inputValid.password) {
      setAbleSubmit(false);
    } else {
      setAbleSubmit(true);
    }
  }, [inputValid]);

  return (
    <FormBox onSubmit={handleSubmit}>
      <Title>{title}</Title>
      <UserInput
        data-testid="email-input"
        ref={emailRef}
        type="text"
        onChange={checkEmail}
      />
      <UserInput
        data-testid="password-input"
        ref={passwordRef}
        type="password"
        onChange={checkPassword}
      />
      <SubmitButton
        data-testid="signin-button"
        type="submit"
        disabled={ableSubmit}
      >
        {title}
      </SubmitButton>
    </FormBox>
  );
};

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const UserInput = styled.input`
  display: inline-block;
  width: 180px;
  height: 20px;
  margin-bottom: 10px;
  border: 0.2px solid #e1e2e3;
`;
const SubmitButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #d6e1f3;
`;

export default UserForm;
