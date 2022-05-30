import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return isLoggedIn ? children : <Navigate to={'/login'} />;
  }
