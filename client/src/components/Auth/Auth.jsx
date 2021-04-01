import {
  Avatar, Button, Container, Grid, IconButton, InputAdornment, Paper, TextField, Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useState } from 'react';
import useStyles from './styles';

const initialState = {
  email: '', password: '', confirmPassword: '',
};

const Auth = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <Container maxWidth="xs">
      <Paper className={classes.auth}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5" gutterBottom>
          {isSignup ? 'Sign up' : 'Sign in'}
        </Typography>
        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={2} align="center">
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                name="email"
                variant="outlined"
                value={formData.email}
                label="Email"
                onChange={(e) => handleChange(e)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                name="password"
                variant="outlined"
                value={formData.password}
                label="Password"
                onChange={(e) => handleChange(e)}
                type={showPassword ? 'text' : 'password'}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                        <Visibility />
                      </IconButton>
                    </InputAdornment>),
                }}
                required
                fullWidth
              />
            </Grid>
            {isSignup ? (
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  name="confirmPassword"
                  variant="outlined"
                  value={formData.confirmPassword}
                  label="Confirm Password"
                  onChange={(e) => handleChange(e)}
                  type={showPassword ? 'text' : 'password'}
                  required
                  fullWidth
                />
              </Grid>
            ) : null}
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Button size="large" color="primary" variant="contained" className={classes.submit} fullWidth>
                {isSignup ? 'Sign up' : 'Sign in'}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button size="large" color="primary" variant="outlined" fullWidth>
                Continue as Guest
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button size="large" color="default" variant="text" onClick={() => switchMode()}>
                {isSignup ? 'Already Registered? Sign In' : 'Don\'t have an account? Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
