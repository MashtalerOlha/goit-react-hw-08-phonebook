import styled from '@emotion/styled';

export const FilterLable = styled.label`
font-size: 26px;
color: #565b9f;
margin-right: 8px;
`;

export const FilterField = styled.input`
  margin: 11px;
  padding: 4px;
  border-color: #565b9f;
  border-style: solid;
  border-radius: 4px;
  color: cadetblue;
  font:  0.8em 'Fira Sans', serif;

  &:focus {
    outline: none !important;
    border-color: #565b9f;
    box-shadow: 0 0 10px #565b9f;
    color: cadetblue;
    font:  0.8em 'Fira Sans', serif;
  }
`;
