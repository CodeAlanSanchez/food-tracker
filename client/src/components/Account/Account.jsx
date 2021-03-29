import { Typography, Container } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Account = ({ user }) => {
  const classes = useStyles();

  return (
    <Container container maxWidth="lg" className={classes.account}>
      <Typography variant="h2" gutterBottom>
        Account
      </Typography>
      <Typography variant="h6">
        {user?.name}
      </Typography>
      <Typography variant="h6">
        {user?.email}
      </Typography>
    </Container>
  );
};

export default Account;
