import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Main = () => {
  return (
    <Box>
      <AuthLink to="signin">
        <SignInPage>로그인</SignInPage>
      </AuthLink>
      <AuthLink to="signup">
        <SignUpPage>회원가입</SignUpPage>
      </AuthLink>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
`;
const SignInPage = styled.div`
  margin-right: 20px;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  background-color: #d6e1f3;
`;
const SignUpPage = styled(SignInPage)`
  margin-right: 0;
`;
const AuthLink = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export default Main;
