import {
  Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Typography,
} from '@material-ui/core';
import {
  LocalDrink, Fastfood, AddCircle, Clear,
} from '@material-ui/icons';

import React from 'react';

const MealTime = ({ time, items }) => (
  <Paper>
    <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
      <Typography variant="h4">
        {/* {`${time} (${items.reduce((prev, curr) => prev + curr.calories, 0)})`} */}
        {time}
      </Typography>
      <IconButton color="primary">
        <AddCircle />
      </IconButton>
    </Box>
    <List>
      {items.length === 0 ? (
        <ListItem>
          <Typography variant="body1" color="textSecondary">
            Empty
          </Typography>
        </ListItem>
      ) : null}
      {items.map((item) => (
        <ListItem key={item._id}>
          <ListItemIcon>
            {!item.drink ? (<Fastfood />) : (<LocalDrink />)}
          </ListItemIcon>
          <ListItemText primary={`${item.name} (${item.amount})`} />
          {item.calories > 0 ? <ListItemText primary={item.calories} /> : null}
          <IconButton>
            <Clear />
          </IconButton>
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default MealTime;
