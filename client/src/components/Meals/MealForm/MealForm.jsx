/* eslint-disable no-unused-vars */
import {
  Typography, TextField, Paper, Box, Button,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const MealForm = () => {
  const [formData, setFormData] = useState({
    name: '', amount: '', category: '', calories: '', protein: '', carbohydrates: '', fat: '', fiber: '',
  });

  const clear = () => {
    setFormData({
      name: '', amount: '', category: '', calories: '', protein: '', carbohydrates: '', fat: '', fiber: '',
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNumberChange = (e) => {
    if (e.target.value === '' || /^[0-9]+$/.test(e.target.value)) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <Paper>
      <Box p={2}>
        <form>
          <Typography variant="h5" align="center">
            Add Meal
          </Typography>
          <TextField
            name="name"
            variant="standard"
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            fullWidth
          />
          <TextField
            name="amount"
            variant="standard"
            label="Serving Size"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            fullWidth
          />
          <TextField
            name="category"
            variant="standard"
            label="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            fullWidth
          />
          <TextField
            name="calories"
            variant="standard"
            label="Calories"
            value={formData.calories}
            onChange={(e) => handleNumberChange(e)}
            fullWidth
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
          />
          <TextField
            name="carbohydrates"
            variant="standard"
            label="Carbohydrates"
            value={formData.carbohydrates}
            onChange={(e) => handleNumberChange(e)}
            fullWidth
          />
          <TextField
            name="fat"
            variant="standard"
            label="Fat"
            value={formData.fat}
            onChange={(e) => handleNumberChange(e)}
            fullWidth
          />
          <TextField
            name="fiber"
            variant="standard"
            label="Fiber"
            value={formData.fiber}
            onChange={(e) => handleNumberChange(e)}
            fullWidth
          />
          <Box mt={1} display="flex" justifyContent="space-between" p={2}>
            <Button type="submit" size="small" variant="contained" color="primary">Submit</Button>
            <Button type="button" size="small" variant="text" color="secondary" onClick={() => clear()}>Clear</Button>
          </Box>
        </form>
      </Box>
    </Paper>
  );
};

export default MealForm;
