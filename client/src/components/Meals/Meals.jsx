import {
  Grid, Box, Grow, Container, Typography,
} from '@material-ui/core';

import React from 'react';
import Meal from './Meal/Meal';
import MealForm from './MealForm/MealForm';
import useStyles from './styles';

const Meals = () => {
  const classes = useStyles();

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
              {[{
                category: 'legumes', name: 'Pinto Beans', amount: '1 Cup', calories: 175, carbohydrates: 27, protein: 5, fiber: 15, fat: 4,
              }].map((meal) => <Meal key={meal._id} meal={meal} />)}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Meals;
