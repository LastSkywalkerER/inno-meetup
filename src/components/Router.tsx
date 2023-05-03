import { FC, lazy, memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from '../constants/routes';

const MintingPage = lazy(() => import('../components/pages/Minting'));

const Router: FC = memo(() => {
  return (
    <Routes>
      <Route index element={<MintingPage />} />

      {routes.map(({ name, Component }) => (
        <Route key={name} path={name} element={<Component />} />
      ))}

      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
});

export default Router;
