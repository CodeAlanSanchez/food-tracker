/* eslint-disable react/prop-types */
import {
  Box, Button, Card, CardActions, CardContent,
  FormControl, Grid, InputLabel, MenuItem, Select, Typography,
} from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMeal } from '../../../actions/mealActions';
import { setTime } from '../../../actions/timeActions';
import useStyles from './styles';

const Meal = ({ meal, time, setMealId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleDelete = () => {
    dispatch(deleteMeal(meal._id));
  };

  const handleTimeChange = (e) => {
    dispatch(setTime(e.target.value));
  };

  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card variant="elevation" align="left" p={2}>
        <Box display="flex" flexDirection="column" alignItems="spaceBetween" width="100%">
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
              <Typography variant="body1" color="textPrimary">{`${meal.protein}g Protein`}</Typography>
              <Typography variant="body1" color="textPrimary">{`${meal.carbohydrates}g Carbohydrates`}</Typography>
              <Typography variant="body1" color="textPrimary">{`${meal.fat}g Fat`}</Typography>
              <Typography variant="body1" color="textPrimary">{`${meal.fiber}g Fiber`}</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="body1" color="textSecondary">
                {meal.creator === '6067589f421b7304d90f4a5c' ? (
                  'Created by Guest'
                ) : (
                  'Created by User'
                )}
              </Typography>
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
                value={time}
                onChange={(e) => handleTimeChange(e)}
              >
                <MenuItem value="Breakfast">Breakfast</MenuItem>
                <MenuItem value="Lunch">Lunch</MenuItem>
                <MenuItem value="Dinner">Dinner</MenuItem>
                <MenuItem value="Snacks">Snacks</MenuItem>
              </Select>
              <Box display="flex" justifyContent="space-between">
                <Button variant="contained" color="primary" size="small" mt={2}>Add</Button>
                {user?.result?._id === meal.creator ? (
                  <>
                    <Button variant="text" color="primary" size="small" mt={2} onClick={() => setMealId(meal._id)}>Edit</Button>
                    <Button variant="text" color="secondary" size="small" mt={2} onClick={() => handleDelete()}>Delete</Button>
                  </>
                ) : null}
              </Box>
            </FormControl>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default Meal;
