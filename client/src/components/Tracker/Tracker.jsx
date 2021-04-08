/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import {
  Box, CircularProgress, Container, Grid, Grow, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Info from './Info/Info';
import MealTime from './MealTime/MealTime';
import useStyles from './styles';
import { createLog } from '../../actions/logActions';

const Tracker = () => {
  const classes = useStyles();
  const currentLog = useSelector((state) => state.currentLog);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const user = JSON.stringify(localStorage.getItem('profile'));
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/auth');
    }
    console.log(currentLog);
    if (currentLog !== null && currentLog?.breakfast) {
      setItems([
        ...currentLog?.breakfast,
        ...currentLog?.lunch,
        ...currentLog?.dinner,
        ...currentLog?.snacks,
      ]);
    }
  }, []);

  return (
    <Grow in>
      <Container maxWidth="xl">
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
              </Container>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Info items={items} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grow>
  );
};

export default Tracker;
