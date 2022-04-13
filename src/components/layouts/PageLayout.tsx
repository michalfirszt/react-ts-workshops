import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PageLayout = (): JSX.Element => (
  <Container>
    <Outlet />
  </Container>
);
