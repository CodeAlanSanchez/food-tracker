import {
  Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Typography,
} from '@material-ui/core';
import {
  LocalDrink, Fastfood, AddCircle, Clear,
} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { setTime } from '../../../actions/timeActions';

const MealTime = ({ time, items = [] }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onTimeChange = () => {
    dispatch(setTime(time));
    history.push('/meals');
  };

  return (
    <Paper>
      <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
        <Typography variant="h4">
          {time}
        </Typography>
        <IconButton color="primary" onClick={() => onTimeChange()}>
          <AddCircle />
        </IconButton>
      </Box>
      <List>
        {!items || items.length === 0 ? (
          <ListItem>
            <Typography variant="body1" color="textSecondary">
              Empty
            </Typography>
          </ListItem>
        ) : null}
        {items.map((item) => (
          <div key={item._id}>
            <ListItem>
              <ListItemIcon>
                {!item.drink ? (<Fastfood />) : (<LocalDrink />)}
              </ListItemIcon>
              <ListItemText primary={`${item.name} (${item.amount})`} />
              {item.calories > 0 ? <ListItemText primary={item.calories} /> : null}
              <IconButton>
                <Clear />
              </IconButton>
            </ListItem>
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default MealTime;
