import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { deleteEntry } from '../../../store/actions';

import {
  Grid,
  Paper,
  Button,
  Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  date: {
    fontSize: '13px',
    fontWeight: 500,
    paddingRight: '12px',
    textTransform: 'uppercase'
  },
  paper: {
    padding: '12px'
  }
});

function Entry({ id, date, text, ...props }) {
  const classes = useStyles();
  
  const formattedDate = moment(date).format('lll');

  return (
    <Grid item>
      <Paper
        className={classes.paper}
      >
        <Grid 
          container
          direction="column"
          spacing={1}
        >
          <Grid item>
            <Typography variant="body2">
              {text}
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              alignItems="center"
              container
              justify="space-between"
            >
              <Grid item>
                <Button onClick={() => props.deleteEntry(id)} size="small">
                  Delete
                </Button>
                <Button size="small">
                  Edit
                </Button>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.date}
                  color="textSecondary" 
                  variant="body2"
                >
                  {formattedDate}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default connect(
  null,
  { deleteEntry }
)(Entry);