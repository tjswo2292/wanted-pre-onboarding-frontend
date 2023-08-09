import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from '../page/signin';
import Layout from '../style/Layout';
import SignUp from '../page/signup';
import Main from '../page/main';
import Todo from '../page/todo';
import ProtectRouter from './ProtectRouter';
import AuthRouter from './AuthRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />

          <Route element={<AuthRouter />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />s
          </Route>

          <Route element={<ProtectRouter />}>
            <Route path="/todo" element={<Todo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
