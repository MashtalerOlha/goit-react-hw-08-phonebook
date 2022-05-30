import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Wrapper, Header, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <AppBar />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};