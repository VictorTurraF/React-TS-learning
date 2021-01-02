import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from '../../styles';

const LogingCTA: React.FC = () => {
  const classes = useStyles();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Entrar
    </Button>
  );
};

export default LogingCTA;
