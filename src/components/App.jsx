import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './Layout/Layout';
import { useFetchCurrentUserQuery } from 'redux/authOperation';
import { useSelector } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { authSelectors } from 'redux/selectors';

const HomePage = lazy(() => import('../page/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../page/ContactPage'));
const LoginPage = lazy(() => import('../page/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('../page/RegistrationPage/RegistrationPage'));

export function App() {
  const token = useSelector(authSelectors.getToken);
  useFetchCurrentUserQuery(null, { skip: !token });

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

