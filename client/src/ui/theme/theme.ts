// src/ui/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    },
    secondary: {
      main: '#ff4081'
    },
    background: {
      default: '#ffffff'
    },
    text: {
      primary: '#000000',
      secondary: '#666666'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem'
    },
    body1: {
      fontSize: '1rem'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          padding: '8px 24px'
        },
        containedPrimary: {
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#115293'
          }
        },
        outlinedSecondary: {
          borderColor: '#ff4081',
          '&:hover': {
            backgroundColor: 'rgba(255, 64, 129, 0.08)'
          }
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'medium'
      },
      styleOverrides: {
        root: {
          marginTop: 8,
          marginBottom: 8,
          '& .MuiOutlinedInput-root': {
            borderRadius: 8
          },
          '& .MuiInputLabel-root': {
            fontSize: '0.9rem'
          }
        }
      }
    }
  }
});

export default theme;
