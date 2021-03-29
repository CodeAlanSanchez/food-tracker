import {
  Avatar, Toolbar, List, ListItem, AppBar, ListItemText,
} from '@material-ui/core';

import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <List className={classes.navigationBar} component="nav" color="inherit">
          <ListItem to="/account" component={Link}>
            <Avatar>
              ?
            </Avatar>
          </ListItem>
          <ListItem button to="/" component={Link}>
            <ListItemText>
              Tracker
            </ListItemText>
          </ListItem>
          <ListItem button to="/meals" component={Link}>
            <ListItemText>
              Meals
            </ListItemText>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
