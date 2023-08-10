import UserForm from '../../components/Form';

import { PATH } from '../../api/core/constants';

const SignUp = () => {
  return (
    <UserForm
      title="회원가입"
      apiPath={PATH.AUTH_SIGNUP}
      testId="signup-button"
    />
  );
};

export default SignUp;
