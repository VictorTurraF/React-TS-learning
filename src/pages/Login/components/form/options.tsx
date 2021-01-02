import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const LoginOptions: React.FC = () => (
  <Grid container>
    <Grid item xs>
      <Link href="/forgot-password" variant="body2">
        Esqueceu sua senha?
      </Link>
    </Grid>
    <Grid item>
      <Link href="/register" variant="body2">
        Não tem uma conta? Cadastre-se
      </Link>
    </Grid>
  </Grid>
);

export default LoginOptions;
