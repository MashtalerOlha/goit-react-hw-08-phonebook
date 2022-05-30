import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/selectors';
import { BookImage, Text, NavLink } from './HomePage.Styled';
import { GrGremlin } from "react-icons/gr";

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <BookImage
        src="https://cdn-icons-png.flaticon.com/512/3253/3253756.png"
        alt="phonebook"
      />
      {!isLoggedIn ? (
        <Text>
          Hello!
          <br />
          Here may be your phone book!
          <br /> You need to <NavLink to="/register">Sign Up</NavLink> or
          <NavLink to="/login"> Log In</NavLink> to continue.
        </Text>
      ) : (
        <Text>Glad to see you! Enjoy <GrGremlin width="20px" height="20px"/></Text>
      )}
    </>
  );
}
