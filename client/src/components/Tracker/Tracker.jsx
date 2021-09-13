/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import {
  Box, Button, CircularProgress, Container, Grid, Grow, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Info from './Info/Info';
import MealTime from './MealTime/MealTime';
import useStyles from './styles';
import { createLog } from '../../actions/logActions';
import { setLog } from '../../actions/currentLogActions';

const Tracker = () => {
  const classes = useStyles();
  const currentLog = useSelector((state) => state.currentLog);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleSubmit = () => {
    console.log(currentLog);
    dispatch(createLog(currentLog));
    console.log(currentLog);
  };

  return (
    <Grow in>
      <Container maxWidth="xl" mb={2}>
        <Box mt={3}>
          <Typography variant="h2" align="center" gutterBottom>
            Log
          </Typography>
        </Box>
        <Box className={classes.tracker}>
          <Grid container justify="center" alignItems="stretch" spacing={0}>
            <Grid item xs={12} sm={4}>
              <Container maxWidth="sm">
                <MealTime time="Breakfast" items={currentLog?.breakfast} />
                <Box mb={2} />
                <MealTime time="Lunch" items={currentLog?.lunch} />
                <Box mb={2} />
                <MealTime time="Dinner" items={currentLog?.dinner} />
                <Box mb={2} />
                <MealTime time="Snacks" items={currentLog?.snacks} />
                <Box mb={2} />
                {/* {user?.email ? (
                  <Button variant="contained" color="primary" onClick={() => handleSubmit()}>
                    Submit
                  </Button>
                )
                  : null} */}
              </Container>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Info />
            </Grid>
          </Grid>
        </Box>
        <Box mb={6} />
      </Container>
    </Grow>
  );
};

export default Tracker;
