import {
  Grid, Box, Grow, Container, Typography,
} from '@material-ui/core';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Meal from './Meal/Meal';
import MealForm from './MealForm/MealForm';
import useStyles from './styles';

const Meals = () => {
  const classes = useStyles();
  const meals = useSelector((state) => state.meals);
  const time = useSelector((state) => state.time);
  const [mealId, setMealId] = useState('');

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
            <MealForm setMealId={setMealId} mealId={mealId} />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Grid container spacing={3}>
              {meals.map((meal) => (
                <Meal
                  key={meal._id}
                  setMealId={setMealId}
                  meal={meal}
                  time={time}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Meals;
