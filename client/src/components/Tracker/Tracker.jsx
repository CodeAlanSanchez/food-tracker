import {
  Box, CircularProgress, Container, Grid, Grow, Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Info from './Info/Info';
import MealTime from './MealTime/MealTime';
import useStyles from './styles';
import { createLog } from '../../actions/logActions';

const Tracker = () => {
  const classes = useStyles();
  const logs = useSelector((state) => state.logs);
  const currentLog = logs.filter((log) => {
    if
    (new Date(log?.date) === new Date().getDay()) { return log; }
    return '';
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentLog?.breakfast) {
      dispatch(createLog({}));
      console.log('CREATING');
    }
  }, [dispatch]);

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
            {
              currentLog?.breakfast ? (
                <>
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
                    <Info items={[
                      ...currentLog?.breakfast,
                      ...currentLog?.lunch,
                      ...currentLog?.dinner,
                      ...currentLog?.snacks]}
                    />
                  </Grid>
                </>
              )
                : (
                  <CircularProgress />
                )
            }
          </Grid>
        </Box>
      </Container>
    </Grow>
  );
};

export default Tracker;
