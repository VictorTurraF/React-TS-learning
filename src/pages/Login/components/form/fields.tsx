import React from 'react';
import TextField from '@material-ui/core/TextField';

const LoginFields: React.FC = () => (
  <>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Endereço de email"
      name="email"
      autoComplete="email"
      autoFocus
    />
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="password"
      label="Senha"
      type="password"
      id="password"
      autoComplete="current-password"
    />
  </>
);

export default LoginFields;
