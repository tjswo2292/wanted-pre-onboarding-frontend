import { Navigate, Outlet } from 'react-router-dom';
import { accessTokenManage } from '../util/storage';

const AuthRouter = () => {
  const token = accessTokenManage.GET_TOKEN();

  return token ? <Navigate to={'/todo'} /> : <Outlet />;
};

export default AuthRouter;
