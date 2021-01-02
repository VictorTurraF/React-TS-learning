import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const LoginChecks: React.FC = () => (
  <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    label="Lembrar minha senha"
  />
);

export default LoginChecks;
