// src/ui/pages/SignInPage.tsx
import { type FC, useState } from 'react';
import { Box, Button, InputAdornment, TextField, Typography, useMediaQuery, useTheme, type Theme } from '@mui/material';
import {   Email, Password} from '@mui/icons-material';

const LoginPage: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Veuillez renseigner l\'email et le mot de passe');
      return;
    }
    setError('');
    // TODO: Envoyer les données de connexion
    console.log({ email, password });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        mt: 6
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection:  'column' ,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 2,
          bgcolor: theme.palette.background.paper,
          boxShadow: isMobile ? 1 : 3,
          p: 4,
          width: isMobile ? '90%' : '50%',
          maxWidth: 400
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, width: '100%', textAlign: 'center' }}>
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
                  slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Email/>
              </InputAdornment>
            ),
          },
        }}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
             slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
              <Password/>
              </InputAdornment>
            ),
          },
        }}
          sx={{ mb: 2 }}

          
        />

        

        {error && (
          <Typography color="error" variant="body2" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Se connecter
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
