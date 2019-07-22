import React, { useState } from 'react';

import {
  Paper,
  Grid,
  TextField,
  IconButton,
  Typography
} from '@material-ui/core';

import {
  Add as AddIcon
} from '@material-ui/icons';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  counter: {
    fontSize: '13px',
    textAlign: 'right',
    width: '56px'
  },
  paper: {
    padding: '8px'
  }
});

export default ({ activeEntry, addEntry, updateEntry }) => {
  const { id, post } = activeEntry || {};

  const classes = useStyles();

  const [state, setState] = useState({
    input: post || '',
    maxLength: 320
  });

  const handleChange = e => setState({...state, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();

    if (!state.input)
      return;

    if (activeEntry) {
      updateEntry(id, state.input);
    } else {
      addEntry(state.input);
      setState({...state, input: ''});
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter')
      handleSubmit(e);
  };

  return (
    <Paper
      className={classes.paper}
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid 
        container
        justify="space-evenly"
        spacing={1}
      >
        <Grid item xs>
          <TextField
            fullWidth
            inputProps={{
              maxLength: state.maxLength
            }}
            margin="none"
            multiline
            name="input"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="What's on your mind?"
            rowsMax="4"
            variant="outlined"
            value={state.input}
          />
        </Grid>
        <Grid item>
          <Grid
            alignItems="flex-end"
            direction="column"
            container
            justify="space-between"
            style={{
              height: '100%'
            }}
          >
            <Grid 
              item 
              style={{
                height: '30px'
              }}
            >
              <IconButton 
                color="primary" 
                size="small" 
                type="submit"
              >
                <AddIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography className={classes.counter} color="textSecondary">
                {state.input.length} / {state.maxLength}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};