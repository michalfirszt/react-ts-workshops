import { PageLayout } from '@components/layouts';
import { HomeView } from '@views/HomeView';
import { Route, Routes } from 'react-router-dom';

import { paths } from './paths';

export const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route path={paths.root} element={<PageLayout />}>
      <Route index element={<HomeView />} />
    </Route>
  </Routes>
);
