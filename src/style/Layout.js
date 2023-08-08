import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Layout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d6e1f3;
`;

export default Layout;
