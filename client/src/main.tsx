import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App'
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './ui/theme/theme'
import { BrowserRouter } from 'react-router';
import { Layout } from './ui/layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Layout>
        <BrowserRouter>
        <CssBaseline /> {/* Pour une base CSS propre */}
        <App />
        </BrowserRouter>
        </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
