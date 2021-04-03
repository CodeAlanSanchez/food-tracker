/* eslint-disable no-unused-vars */
import {
  Typography, TextField, Paper, Box, Button,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createMeal, updateMeal } from '../../../actions/mealActions';

const MealForm = ({ mealId, setMealId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '', amount: '', category: '', calories: '', protein: '', carbohydrates: '', fat: '', fiber: '',
  });
  const meal = useSelector(
    (state) => (mealId ? state.meals.find((m) => m._id === mealId) : null),
  );
  const user = JSON.parse(localStorage.getItem('profile'));

  const clear = () => {
    setFormData({
      name: '', amount: '', category: '', calories: '', protein: '', carbohydrates: '', fat: '', fiber: '',
    });
  };

  const cancel = () => {
    setMealId(null);
    clear();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNumberChange = (e) => {
    if (e.target.value === '' || /^[0-9]+$/.test(e.target.value)) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (meal) setFormData(meal);
  }, [meal]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mealId) {
      dispatch(updateMeal(mealId, formData));
      setMealId(null);
    } else {
      dispatch(createMeal(formData));
    }
    clear();
  };

  if (!user?.result?.email) {
    return (
      <Paper>
        <Box p={3}>
          <Typography variant="h6" aling="center">
            Please Sign In to track and create meals.
          </Typography>
          <Box m={3} />
          <Button component={Link} to="/auth" variant="contained" color="primary">
            Sign in
          </Button>
        </Box>
      </Paper>
    );
  }

  return (
    <Paper>
      <Box p={2}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Typography variant="h5" align="center">
            {mealId ? 'Edit Meal' : 'Create Meal'}
          </Typography>
          <TextField
            name="name"
            variant="standard"
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            fullWidth
            required
          />
          <TextField
            name="amount"
            variant="standard"
            label="Serving Size"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            fullWidth
            required
          />
          <TextField
            name="category"
            variant="standard"
            label="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            fullWidth
            required
          />
          <TextField
            name="calories"
            variant="standard"
            label="Calories"
            value={formData.calories}
            onChange={(e) => handleNumberChange(e)}
            fullWidth
            required
          />
          <Box mt={3} />
          <Typography variant="body1" align="center">
            Macronutrients
          </Typography>
          <TextField
            name="protein"
            variant="standard"
            label="Protein"
            value={formData.protein}
            onChange={(e) => handleNumberChange(e)}
            fullWidth
            required
          />
          <TextField
            name="carbohydrates"
            variant="standard"
            label="Carbohydrates"
            value={formData.carbohydrates}
            onChange={(e) => handleNumberChange(e)}
            fullWidth
            required
          />
          <TextField
            name="fat"
            variant="standard"
            label="Fat"
            value={formData.fat}
            onChange={(e) => handleNumberChange(e)}
            fullWidth
            required
          />
          <TextField
            name="fiber"
            variant="standard"
            label="Fiber"
            value={formData.fiber}
            onChange={(e) => handleNumberChange(e)}
            fullWidth
            required
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button type="submit" size="small" variant="contained" color="primary">{mealId ? 'Update\xa0Meal' : 'Create\xa0Meal'}</Button>
            <Button type="button" size="small" variant="text" color="secondary" onClick={() => clear()}>Clear</Button>
            {mealId ? (
              <Button type="button" size="small" variant="text" color="secondary" onClick={() => cancel()}>Cancel</Button>
            ) : null}
          </Box>
        </form>
      </Box>
    </Paper>
  );
};

export default MealForm;
