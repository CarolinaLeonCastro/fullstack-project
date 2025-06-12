// src/App.tsx
import { Routes, Route, Navigate } from 'react-router';

import AllCards from './pages/AllCards';
import SignInPage from './pages/Login';


export function App() {
  return (

            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/register" element={<AllCards />} />
                <Route 
                    path="/dashboard" 
                    element={
                       
                            <AllCards />
                      
                    } 
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>   
      
  );
}
 