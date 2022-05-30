import { authSelectors } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from 'redux/authOperation';
import { NavigationLink, LoginUser, Text, LogOutButton, Nav } from './AppBar.Styled';

export const AppBar = () => {
  const [logOut] = useLogoutMutation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const userName = useSelector(authSelectors.getUserName);

  return (
    <>
      <Nav>
        <NavigationLink to="/">Home Page</NavigationLink>
        {isLoggedIn && <NavigationLink to="contacts">Contacts</NavigationLink>}
      </Nav>
      {isLoggedIn ? (
        <LoginUser>
          <Text>Welcome, {userName}!</Text>
          <LogOutButton type="button" onClick={() => logOut()}>
            Log Out
          </LogOutButton>
        </LoginUser>
      ) : (
        <div>
          <NavigationLink to="/register">Sign Up</NavigationLink>
          <NavigationLink to="/login">Log In</NavigationLink>
        </div>
      )}
    </>
  );
};
