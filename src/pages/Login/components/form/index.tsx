import React from 'react';
import LoginOptions from './options';
import LoginFields from './fields';
import LoginChecks from './checks';
import LoginCTA from './cta';
import useStyles from '../../styles';

const LoginForm: React.FC = () => {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <LoginFields />
      <LoginChecks />
      <LoginCTA />
      <LoginOptions />
    </form>
  );
};

export default LoginForm;
