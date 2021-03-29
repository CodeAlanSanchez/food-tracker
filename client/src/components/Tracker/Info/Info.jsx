import {
  Box, List, ListItem, ListItemText, Paper, Typography,
} from '@material-ui/core';
import React from 'react';

const Info = () => (
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
          <ListItemText primary="2156" />
        </ListItem>
      </List>
      <Typography variant="h5">
        Macros
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Protein" />
          <ListItemText primary="48g" align="right" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Carbohydrates" />
          <ListItemText primary="128g" align="right" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fat" />
          <ListItemText primary="43g" align="right" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fiber" />
          <ListItemText primary="24g" align="right" />
        </ListItem>
      </List>
    </Box>
  </Paper>
);

export default Info;
