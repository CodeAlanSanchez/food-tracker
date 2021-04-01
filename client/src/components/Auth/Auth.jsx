import {
  Avatar, Container, Grid, Paper, Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

const Auth = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="xs">
      <Paper className={classes.auth}>
        <Avatar>
          <LockOutlined />
        </Avatar>
        <Typography variant="h6">
          Sign Up
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={3} />
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
