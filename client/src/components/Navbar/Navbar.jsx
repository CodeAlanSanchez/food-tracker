import {
  Toolbar, List, ListItem, AppBar, ListItemText,
} from '@material-ui/core';

import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <AppBar position="static">
      <Toolbar>
        <List className={classes.navigationBar} component="nav" color="inherit">
          {!user?.result?.email
            ? (
              <ListItem button to="/auth" component={Link}>
                <ListItemText>
                  Sign&nbsp;in
                </ListItemText>
              </ListItem>
            ) : (
              <ListItem button to="/auth" component={Link}>
                <ListItemText>
                  Account
                </ListItemText>
              </ListItem>
            )}
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
