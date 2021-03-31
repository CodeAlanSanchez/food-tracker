/* eslint-disable react/prop-types */
import {
  Box, Button, Card, CardActions, CardContent,
  FormControl, Grid, InputLabel, MenuItem, Select, Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Meal = ({ meal }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card variant="contained" align="left" p={2}>
        <Box display="flex" flexDirection="column" alignItems="spaceBetween" width={210}>
          <CardContent>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {meal.category}
            </Typography>
            <Box mb={1}>
              <Typography variant="h5" color="textPrimary">
                {meal.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">{meal.amount}</Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="textPrimary">{`${meal.calories} Calories`}</Typography>
              <Typography variant="body1" color="textPrimary">{`${meal.protein} Protein`}</Typography>
              <Typography variant="body1" color="textPrimary">{`${meal.carbohydrates} Carbohydrates`}</Typography>
              <Typography variant="body1" color="textPrimary">{`${meal.fat} Fat`}</Typography>
              <Typography variant="body1" color="textPrimary">{`${meal.fiber} Fiber`}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <FormControl className={classes.formControl} required variant="standard">
              <InputLabel id="category-label">Time</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                label="Time"
                className={classes.select}
              >
                <MenuItem value="Breakfast">Breakfast</MenuItem>
                <MenuItem value="Lunch">Lunch</MenuItem>
                <MenuItem value="Dinner">Dinner</MenuItem>
                <MenuItem value="Snacks">Snacks</MenuItem>
              </Select>
              <Button variant="outlined" color="primary" mt={2}>Add</Button>
            </FormControl>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default Meal;
