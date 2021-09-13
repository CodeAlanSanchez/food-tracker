import {
  Box, Typography, Container, Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import useStyles from './styles';

const Account = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!user?.email) {
      history.push('/auth');
    }
  }, []);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/auth');
  };

  return (
    <Container maxWidth="lg" className={classes.account}>
      <Typography variant="h2" gutterBottom>
        Account
      </Typography>
      <Box mt={5} />
      <Box mt={5} />
      <Typography variant="h5" color="textSecondary">
        {`Email: ${user?.email}`}
      </Typography>
      <Box mt={5} />
      <Button
        color="primary"
        size="large"
        variant="contained"
        onClick={() => handleLogout()}
      >
        Log out
      </Button>
    </Container>
  );
};

export default Account;
