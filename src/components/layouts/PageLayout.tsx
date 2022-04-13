import { Outlet } from 'react-router-dom';

export const PageLayout = (): JSX.Element => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
