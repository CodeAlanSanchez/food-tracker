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
import {
  removeBreakfast, removeDinner, removeLunch, removeSnack,
} from '../../../actions/currentLogActions';

const MealTime = ({ time, items = [] }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('profile'));

  const onTimeChange = () => {
    dispatch(setTime(time));
    history.push('/meals');
  };

  const handleDelete = (meal) => {
    switch (time) {
      case 'Breakfast':
        dispatch(removeBreakfast(meal?._id));
        history.push('/');
        break;
      case 'Lunch':
        dispatch(removeLunch(meal?._id));
        history.push('/');
        break;
      case 'Dinner':
        dispatch(removeDinner(meal?._id));
        history.push('/');
        break;
      case 'Snacks':
        dispatch(removeSnack(meal?._id));
        history.push('/');
        break;
      default:
    }
  };

  return (
    <Paper>
      <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
        <Typography variant="h4">
          {time}
        </Typography>
        {user?.email ? (
          <IconButton color="primary" onClick={() => onTimeChange()}>
            <AddCircle />
          </IconButton>
        ) : null}
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
          <div key={item._id + Math.random()}>
            <ListItem>
              <ListItemIcon>
                {!item.drink ? (<Fastfood />) : (<LocalDrink />)}
              </ListItemIcon>
              <ListItemText primary={`${item.name} (${item.amount})`} />
              {item.calories > 0 ? <ListItemText primary={item.calories} /> : null}
              <IconButton onClick={() => handleDelete(item)}>
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
