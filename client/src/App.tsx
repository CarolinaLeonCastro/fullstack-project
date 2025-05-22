// src/App.tsx
import { Layout } from './ui/layout/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({ cssVariables: true });

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <h1>Contacts app</h1>
      </Layout>
    </ThemeProvider>
  );
}