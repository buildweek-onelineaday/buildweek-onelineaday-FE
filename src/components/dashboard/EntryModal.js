import React from 'react';

import {
  Dialog
} from '@material-ui/core';

import EntryForm from './EntryForm';

export default ({ activeEntry, onClose, open, updateEntry }) => {
  return (
    <Dialog
      fullWidth
      onClose={onClose}
      open={open}
    >
      <EntryForm 
        activeEntry={activeEntry}
        updateEntry={updateEntry}
      />
    </Dialog>
  );
};