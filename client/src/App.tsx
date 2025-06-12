// src/App.tsx
import { Routes, Route, Navigate } from 'react-router';
import { ROUTES_CONFIG } from './routes/routes.config';

import AllCards from './pages/AllCards';
import SignInPage from './pages/Login';

export function App() {
  return (
    <Routes>
      <Route path={ROUTES_CONFIG.HOME} element={<SignInPage />} />
      <Route path={ROUTES_CONFIG.AUTH.LOGIN} element={<SignInPage />} />
      <Route path={ROUTES_CONFIG.AUTH.REGISTER} element={<AllCards />} />
      <Route path={ROUTES_CONFIG.CARDS.ALL} element={<AllCards />} />
      <Route path={ROUTES_CONFIG.ERROR.NOT_FOUND} element={<Navigate to={ROUTES_CONFIG.HOME} replace />} />
      <Route path="*" element={<Navigate to={ROUTES_CONFIG.ERROR.NOT_FOUND} replace />} />
    </Routes>
      
  );
}
 