/* eslint-disable react/prop-types */
import {
  Box, Button, Card, CardActions, CardContent,
  FormControl, Grid, InputLabel, MenuItem, Select, Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  addBreakfast, addDinner, addLunch, addSnack,
} from '../../../actions/currentLogActions';
import { deleteMeal } from '../../../actions/mealActions';
import { setTime } from '../../../actions/timeActions';
import useStyles from './styles';

const Meal = ({ meal, time, setMealId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentLog = useSelector((state) => state.currentLog);
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  useEffect(() => {
    console.log(currentLog);
  }, []);

  const handleDelete = () => {
    dispatch(deleteMeal(meal._id));
  };

  const handleTimeChange = (e) => {
    dispatch(setTime(e.target.value));
  };

  const handleAdd = () => {
    switch (time) {
      case 'Breakfast':
        dispatch(addBreakfast(meal));
        history.push('/');
        break;
      case 'Lunch':
        dispatch(addLunch(meal));
        history.push('/');
        break;
      case 'Dinner':
        dispatch(addDinner(meal));
        history.push('/');
        break;
      case 'Snacks':
        dispatch(addSnack(meal));
        history.push('/');
        break;
      default:
    }
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
              {user?.result?.email ? (
                <>
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
                    <Button variant="contained" color="primary" size="small" mt={2} type="button" onClick={() => handleAdd()}>Add</Button>
                    {user?.result?._id === meal.creator ? (
                      <>
                        <Button type="button" variant="text" color="primary" size="small" mt={2} onClick={() => setMealId(meal._id)}>Edit</Button>
                        <Button type="button" variant="text" color="secondary" size="small" mt={2} onClick={() => handleDelete()}>Delete</Button>
                      </>
                    ) : null}
                  </Box>
                </>
              ) : null}
            </FormControl>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default Meal;
