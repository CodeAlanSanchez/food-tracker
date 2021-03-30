import { Box, Typography, Container } from '@material-ui/core';

import React from 'react';
import useStyles from './styles';

const Account = ({ user }) => {
  const classes = useStyles();

  return (
    <Container container maxWidth="lg" className={classes.account}>
      <Typography variant="h2" gutterBottom>
        Account
      </Typography>
      <Box mt={5} />
      <Typography variant="h5" color="textSecondary" gutterBottom>
        {`Name: ${user?.name}`}
      </Typography>
      <Box mt={5} />
      <Typography variant="h5" color="textSecondary">
        {`Email: ${user?.email}`}
      </Typography>
    </Container>
  );
};

export default Account;
