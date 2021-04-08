import {
  Toolbar, List, ListItem, AppBar, ListItemText,
} from '@material-ui/core';
import decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGOUT } from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch({ type: LOGOUT });
      }
    }
  }, []);

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
