const EMAIL_CHECK = new RegExp("@");
const PW_CHECK = new RegExp("(?=.{8,})");

const emailValidation = (emailData) => {
  return EMAIL_CHECK.test(emailData);
};

const pwValidation = (pwData) => {
  return PW_CHECK.test(pwData);
};

export { emailValidation, pwValidation };
