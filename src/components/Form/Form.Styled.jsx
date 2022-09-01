import styled from '@emotion/styled';

export const AddContactForm = styled.form`
  margin: 43px auto;
  display: flex;
  flex-direction: column;
  width: 320px;
  border: 1px solid #565b9f;
  border-radius: 4px;
  padding: 25px;
`;

export const SearchCard = styled.input`
  margin: 11px;
  padding: 5px;
  border-color: #565b9f;
  border-style: solid;
  border-radius: 4px;
  color: #565b9f;
  font: 0.8em 'Fira Sans', serif;

  &:focus {
    outline: none !important;
    border-color: #565b9f;
    box-shadow: 0 0 10px #565b9f;
    color: #565b9f;
    font: 0.8em 'Fira Sans', serif;
  }
`;
export const Lable = styled.label`
  font-size: 26px;
  color: #565b9f;
`;

export const Button = styled.button`
  color: white;
  background-color: #565b9f;
  margin: auto;
  width: 190px;
  padding: 5px 20px;
  border: 4px;
  border-color: #eddeff;
  border-style: double;
  border-radius: 25px;
  font: 1.2em 'Fira Sans', serif;
`;
