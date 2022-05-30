import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useRegisterMutation } from 'redux/authOperation';
import toast, { Toaster } from 'react-hot-toast';
import { RegisterForm, Text, Input, RegisterLable, RegisterButton } from './RegistrationPage.Styled';

export default function RegisterPage() {
  const [register, { isSuccess, isError }] = useRegisterMutation();

  const defaultInitialValues = {
    name: '',
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    register(values);
    resetForm();
  };

  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
  };

  return (
    <>
    <Text>Create your account!</Text>
      {isSuccess && toast.success('Success!') && <Toaster />}
      {isError && toast.error('Something wrong, try again!') && (
        <Toaster />
      )}
      <Formik
        initialValues={defaultInitialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <RegisterForm autoComplete="off">
          <RegisterLable htmlFor="name">Name</RegisterLable>
          <Input name="name" type="text" placeholder="Enter your name" />
          <FormError name="name" />
          <RegisterLable htmlFor="email">Email</RegisterLable>
          <Input name="email" type="email" placeholder="Enter your e-mail" />
          <FormError name="email" />
          <RegisterLable htmlFor="password">Password</RegisterLable>
          <Input name="password" type="password" placeholder="Enter your password" />
          <FormError name="password" />
          <RegisterButton type="submit"> Create!</RegisterButton>
        </RegisterForm>
      </Formik>
    </>
  );
}