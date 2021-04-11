import {
  Box, List, ListItem, ListItemText, Paper, Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Info = () => {
  const currentLog = useSelector((state) => state.currentLog);
  let items = [];

  useEffect(() => {
    items = [
      ...currentLog.breakfast,
      ...currentLog.lunch,
      ...currentLog.dinner,
      ...currentLog.snacks,
    ];
  }, []);

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
