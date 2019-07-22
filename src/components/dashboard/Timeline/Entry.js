import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { Grid, Paper, Button, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

import { openModal, deleteEntry } from '../../../store/actions';

const useStyles = makeStyles({
  container: {
    marginTop: '16px',
  },
  date: {
    fontSize: '13px',
    fontWeight: 500,
    paddingRight: '12px',
    textTransform: 'uppercase',
  },
  paper: {
    padding: '12px',
  },
});

function Entry({ entry, ...props }) {
  const classes = useStyles();

  const formattedDate = moment(entry.created_at)
    .subtract(4, 'hours')
    .format('lll');

  return (
    <Grid className={classes.container} item>
      <Paper className={classes.paper}>
        <Grid container direction='column' spacing={1}>
          <Grid item>
            <Typography variant='body2'>{entry.post}</Typography>
          </Grid>
          <Grid item>
            <Grid alignItems='center' container justify='space-between'>
              <Grid item>
                <Button onClick={() => props.deleteEntry(entry.id)} size='small'>
                  Delete
                </Button>
                <Button onClick={() => props.openModal(entry)} size='small'>
                  Edit
                </Button>
              </Grid>
              <Grid item>
                <Typography className={classes.date} color='textSecondary' variant='body2'>
                  {formattedDate}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default connect(
  null,
  { deleteEntry, openModal },
)(Entry);
