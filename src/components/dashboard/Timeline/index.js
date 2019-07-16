import React from 'react';

import {
  Grid
} from '@material-ui/core';

import { styled } from '@material-ui/styles';

import Entry from './Entry';

const Container = styled('main')({});

export default ({ entries }) => {
  return (
    <Container>
      <Grid 
        container
        direction="column"
        justify="space-evenly"
        spacing={2}
      >
        {entries.map(entry => (
          <Entry 
            key={entry.id}
            {...entry}
          />
        ))}
      </Grid>
    </Container>
  );
};