import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const LoginForm = styled(Form)`
  margin: 0 auto 15px;
  padding: 15px;
  border: 1px solid #565b9f;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const Text = styled.p`
  font-size: 34px;
  margin-top: 100px;
  margin-bottom: 40px;
  font-weight: 700;
  color:  #565b9f;
`;

export const Input = styled(Field)`
  height: 25px;
  margin-bottom: 4px;
  padding: 4px;
  font:  1.2em 'Fira Sans', serif;
  font-size: 14px;
`;
export const LoginLable = styled.label`
  text-align: start;
  margin-bottom: 4px;
  color:  #565b9f;
`;

export const LoginButton = styled.button`
  margin: 10px auto ;
  font:  1.2em 'Fira Sans', serif;
  height: 40px;
  width: 200px;
  border: 0px solid #565b9f;
  border-radius: 4px;
  color: #565b9f;
  box-shadow: 0 4px 4px rgb(0 0 0 / 15%);
  cursor: pointer;
`;

export const ErrorMessageText = styled.p`
  margin: 2px;
  text-align: end;
  color: red;
  font-size: 15px;
`;