import { Navigate, Outlet } from 'react-router-dom';
import { accessTokenManage } from '../util/storage';

const ProtectRouter = () => {
  const token = accessTokenManage.GET_TOKEN();

  return token ? <Outlet /> : <Navigate to={'/signin'} />;
};

export default ProtectRouter;
