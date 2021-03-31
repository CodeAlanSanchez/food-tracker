import {
  Grid, Box, Grow, Container, Typography,
} from '@material-ui/core';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMeals } from '../../actions/mealActions';
import Meal from './Meal/Meal';
import MealForm from './MealForm/MealForm';
import useStyles from './styles';

const Meals = () => {
  const classes = useStyles();
  const meals = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <Grow in>
      <Container maxWidth="lg" className={classes.meals}>
        <Box mb={2}>
          <Typography variant="h2" align="left">
            Meals
          </Typography>
        </Box>
        <Grid container spacing={3} justify="space-between" alignItems="stretch">
          <Grid item xs={12} sm={4} md={3}>
            <MealForm />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Grid container spacing={3}>
              {meals.map((meal) => <Meal key={meal._id} meal={meal} />)}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Meals;
