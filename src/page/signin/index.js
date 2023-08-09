import UserForm from '../../components/Form';

import { PATH } from '../../api/core/constants';

const SignIn = () => {
  return <UserForm title="로그인" apiPath={PATH.AUTH_SIGNIN} />;
};

export default SignIn;
