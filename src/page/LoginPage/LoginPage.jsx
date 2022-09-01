import { Formik, ErrorMessage } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import * as yup from 'yup';
import { useLoginMutation } from 'redux/authOperation';
import { authSelectors } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { LoginForm, Text, Input, LoginLable, LoginButton, ErrorMessageText } from './LoginPage.Styled';

export default function LoginPage() {
  const [login, { isSuccess, isError }] = useLoginMutation();
  const userName = useSelector(authSelectors.getUserName);

  const defaultInitialValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    login(values);
    resetForm();
  };

  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={message => <ErrorMessageText>{message}</ErrorMessageText>} />;
  };

  return (
    <>
    <Text>Log in to Phonebook!</Text>
      {isSuccess && toast.success(`Welcome back, ${userName}!`) && <Toaster />}
      {isError &&
        toast.error('Oops...Check entered email or password and try again') && (
          <Toaster />
        )}
      <Formik
        initialValues={defaultInitialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <LoginForm autoComplete="off">
          <LoginLable htmlFor="email">Email</LoginLable>
          <Input name="email" type="email" placeholder="Enter email" />
          <FormError name="email" />
          <LoginLable htmlFor="password">Password</LoginLable>
          <Input name="password" type="password" placeholder="Enter password" />
          <FormError name="password" />
          <LoginButton type="submit"> Log in</LoginButton>
        </LoginForm>
      </Formik>
    </>
  );
}