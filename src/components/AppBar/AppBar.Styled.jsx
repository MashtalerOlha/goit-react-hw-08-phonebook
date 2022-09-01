import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  margin: 15px;
  color: white;
`;

export const LoginUser = styled.div`
display: flex;
margin-right: 5px;
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin-right: 10px;
`;

export const Nav = styled.div`
margin: 15px
`;

export const LogOutButton = styled.button`
  margin: auto;
  font:  1.2em 'Fira Sans', serif;
  height: 22px;
  border-color: #565B9F;
  border-style: double;
  border-radius: 25px;
  color: #565B9F;
  box-shadow: 0 4px 4px rgb(0 0 0 / 15%);
  cursor: pointer;
  padding-bottom: 29px;
  
`;
