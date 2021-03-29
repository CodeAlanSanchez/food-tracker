import {
  Box, Container, Grid, Grow, Typography,
} from '@material-ui/core';
import React from 'react';
import Info from './Info/Info';
import MealTime from './MealTime/MealTime';
import useStyles from './styles';

const Tracker = () => {
  const classes = useStyles();

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
                <MealTime
                  time="Breakfast"
                  items={[{
                    name: 'Apple', amount: '1 Cup', calories: 300, drink: false,
                  }, {
                    name: 'Potato', amount: '100g', calories: 250, drink: false,
                  }, {
                    name: 'Water', amount: '500ml', calories: 0, drink: true,
                  }]}
                />
                <Box mb={2} />
                <MealTime time="Lunch" items={[]} />
                <Box mb={2} />
                <MealTime time="Dinner" items={[]} />
                <Box mb={2} />
                <MealTime time="Snacks" items={[]} />
              </Container>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Info />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grow>
  );
};

export default Tracker;
