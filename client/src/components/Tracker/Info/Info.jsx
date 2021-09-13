import {
  Box, Button, List, ListItem, ListItemText, Paper, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Info = () => {
  const currentLog = useSelector((state) => state.currentLog);
  const [items, setItems] = useState([]);
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (currentLog) {
      setItems([
        ...currentLog?.breakfast || [],
        ...currentLog?.lunch || [],
        ...currentLog?.dinner || [],
        ...currentLog?.snacks || [],
      ]);
    }
  }, [currentLog]);

  if (!user?.email) {
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
    <Paper position="static">
      <Box display="flex" flexDirection="column" justifyContent="left" p={2}>
        <Typography variant="h4" gutterBottom>
          Today
        </Typography>
      </Box>
      <Box p={2} pt={0}>
        <Typography variant="h5">
          Calories
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary={items.reduce((acc, item) => acc + item.calories, 0)} />
          </ListItem>
        </List>
        <Typography variant="h5">
          Macros
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Protein" />
            <ListItemText primary={`${items.reduce((acc, item) => acc + item.protein, 0)}g`} align="right" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Carbohydrates" />
            <ListItemText primary={`${items.reduce((acc, item) => acc + item.carbohydrates, 0)}g`} align="right" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Fat" />
            <ListItemText primary={`${items.reduce((acc, item) => acc + item.fat, 0)}g`} align="right" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Fiber" />
            <ListItemText primary={`${items.reduce((acc, item) => acc + item.fiber, 0)}g`} align="right" />
          </ListItem>
        </List>
      </Box>
    </Paper>
  );
};

export default Info;
